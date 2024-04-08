import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Layout from '@theme/Layout';
import moment from 'moment';
const supabase = createClient("https://gjqsznhwkjsanuvlryxe.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqcXN6bmh3a2pzYW51dmxyeXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI1MjUwNjUsImV4cCI6MjAyODEwMTA2NX0.v4z-KTl5mK7jAWcZveJ-_WzKN5FT6FpeCW7KszDHUbc");

export default function MyReactPage() {
    const [countries, setCountries] = useState([]);
    const [downloadLinks, setDownloadLinks] = useState({});

    useEffect(() => {
        getCountries();
    }, []);

    async function getCountries() {
        const { data } = await supabase.from("DownloadMetadata").select();
        let i = -1;
        console.log(data)
        for (const link of data) {
            i++;
            // let publicURL = await supabase.storage.from("Downloads").getPublicUrl(`Downloads/${link.id}`).data.publicUrl
            console.log(link.id)
            let downloadData = await supabase.storage.from("Downloads").download(`Downloads/${link.id}.mcaddon`)
            data[i].downloadData = downloadData.data;
        }
        setCountries(data);
    }
    return (
        <Layout>
            <br /><br />
            <div style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "10px"
            }}>
                {countries.map(download => {
                    return (
                        <div className="card" style={{
                            width: "600px",
                            height: "fit-content",
                            border: "1px solid rgba(255, 255, 255, 10%)",
                            padding: "10px",
                            borderRadius: "10px"
                        }}>
                            <div style={{
                                display: "flex",
                                gap: "10px",

                                alignItems: "center"
                            }}>
                                <h1 style={{
                                    margin: "0",
                                    padding: "0"
                                }}>{JSON.parse(download.json_data).version} #{JSON.parse(download.json_data).buildVersion.toString()}</h1>
                                <span className="tag-a" style={{
                                    background: "var(--ifm-color-primary-tag)",
                                    color: "var(--ifm-color-primary)",
                                    padding: ".12em .5em",
                                    borderRadius: "6px",
                                    height: "fit-content",
                                }}>{JSON.parse(download.json_data).tag}</span>

                            </div>
                            <p><i>{moment(JSON.parse(download.json_data).createdAt).format("MMM Do YYYY")}</i></p>
                            <a className="download" href={URL.createObjectURL(download.downloadData)} download={`${JSON.parse(download.json_data).version} ${JSON.parse(download.json_data).buildVersion.toString()}.mcaddon`} target="_blank">Download</a>
                        </div>

                    )
                })}
            </div>

        </Layout>
    )
}