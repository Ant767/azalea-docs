import Layout from "@theme/Layout";
import { useEffect, useState } from "react";
import axios from 'axios';
import './downloader.css';
import showdown from 'showdown';
export default function Home() {
    let [modules, setModules] = useState([])
    let [states, setStates] = useState({})
    let [disabled, setDisabled] = useState(false);
    let [buttonText, setButtonText] = useState("Download");
    useEffect(() => {
        getModules();
    }, []);

    async function getModules() {
        let res = await axios.get('https://azalea-api.trashdev.org/api/get-modules', {
            headers: {
                "origin": 'https://azalea-api.trashdev.org'
            }
        })
        let newStates = {};
        for(const config of res.data) {
            newStates[config.namespace] = true;
        }
        setStates(newStates);
        setModules(res.data);
    }

    return (
        <Layout>
            <div style={{display:"flex",height:"fit-content","alignItems":"center",justifyContent:"center",flexDirection:"column",gap:"10px"}}>
                <h1>Azalea Downloader <span class="badge badge--primary">BETA</span></h1>
                <div className="cards">
                    {modules.map(config=>{
                        let converter = new showdown.Converter();
                        return (
                            <div className="card" data-activated={states[config.namespace] == true ? "true" : "false"} onClick={()=>{
                                let newStates = JSON.parse(JSON.stringify(states));
                                newStates[config.namespace] = newStates[config.namespace] == true ? false : true;
                                setStates(newStates)
                            }}>
                                <div className="title">
                                    <img src={config.icon} alt="" />
                                    {config.namespace}
                                    {states[config.namespace] ? <span class="badge badge--primary">SELECTED</span> : <span class="badge badge--secondary">NOT SELECTED</span>}
                                </div>
                                <div className="description" dangerouslySetInnerHTML={{__html:converter.makeHtml(config.description).substring(3).slice(0, -4)}}/>
                            </div>
                        )
                    })}
                </div>
                <button class="button button--primary" style={{width:"90%"}} disabled={disabled} onClick={()=>{
                    let ws = new WebSocket("wss://azalea-api.trashdev.org");
                    setButtonText("Setting up websocket connection");
                    setDisabled(true);
                    ws.onopen = ()=>{
                        function downloadBase64File(contentBase64, fileName) {
                            const linkSource = `data:application/zip;base64,${contentBase64}`;
                            const downloadLink = document.createElement('a');
                            document.body.appendChild(downloadLink);
                        
                            downloadLink.href = linkSource;
                            downloadLink.target = '_self';
                            downloadLink.download = fileName;
                            downloadLink.click(); 
                        }
                        ws.onmessage = (data)=>{
                            console.log(data.data);
                            let message = JSON.parse(data.data);
                            if(message.type == 2) {
                                setButtonText(message.data);
                            } else if(message.type == 1) {
                                setButtonText("Download");
                                setDisabled(false);
                                downloadBase64File(message.data, "Custom Azalea.mcaddon")
                            }
                        }
                        let newStates = JSON.parse(JSON.stringify(states));
                        let modules = [];
                        for(const key in newStates) {
                            if(newStates[key]) modules.push(key);
                        }
                        ws.send(JSON.stringify({
                            command: "create-download",
                            modules
                        }))
                    }
                }}>{buttonText}</button>
            </div>
        </Layout>
    )
}
