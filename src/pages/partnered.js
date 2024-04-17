import React from 'react';
import Layout from '@theme/Layout';
import Details from '@theme/Details'
import DocCardList from '@theme/DocCardList';
import DocCard from '@theme/DocCard';
import ThemedImage from '@theme/ThemedImage'
export default function MyReactPage() {
    let tags = {
        public: "PUBLIC",
        closed: "CLOSED"
    }
    let featured = [
        {
            "banner": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/142781fe-9277-41c2-9e3f-ec0b253bd5d4/dg9ro0m-fb8954ef-108b-4636-bf9c-af1d493204c4.png/v1/fill/w_1200,h_666,q_70,strp/_free__furry_wallpaper__almost__6k__12__ai__by_notsuspiciouscat_dg9ro0m-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzEwIiwicGF0aCI6IlwvZlwvMTQyNzgxZmUtOTI3Ny00MWMyLTllM2YtZWMwYjI1M2JkNWQ0XC9kZzlybzBtLWZiODk1NGVmLTEwOGItNDYzNi1iZjljLWFmMWQ0OTMyMDRjNC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7NpZGk-F-H0bBCDCKHQutBBzro39H6YTMcPRcpQtCzY",
            "img": "https://cdn.discordapp.com/icons/1137801967016620114/32525e687cc49afec6b989099168a491.webp?size=96",
            "owner": "Voltrex",
            a: true,
            "name": "Dark Network",
            "tag": tags.public,
            "description": "We have a toxic community :3",
            "link": "https://discord.gg/nbEawQ7crx"
        },
        {
            "banner": "https://media.discordapp.net/attachments/1123842919904845886/1198497402085199912/IMG_0881.png?ex=662ddcaf&is=661b67af&hm=f4fe1813ffc4ae4ec9f991bd054bcee58021f66e5a81eb2b260cae92064702a4&=&format=webp&quality=lossless&width=550&height=254",
            "img": "https://cdn.discordapp.com/icons/1123842919254732910/888c8ba93a1b7cddefc24ca60d9d9314.webp",
            "owner": "elaina_kawaii",
            "name": "Re:Birth SMP",
            "tag": tags.closed,
            "description": "Best realm fr",
            "link": "https://discord.gg/gDqdRmUuzG"
        },
        // {
        //     "link": "https://discord.gg/xUMF5tJy",
        //     "description": "azalea on top",
        //     "name": "Faithless Network",
        //     "owner": "whatdoyoumeanbro",
        //     "tag": tags.public,
        //     "img": "https://cdn.discordapp.com/icons/1196921548435636386/5cefc149c9e53832655bd7515bee0363.webp?size=56",
        //     "banner": "/img/IMG_2482.jpg"
        // },
        // {
        //     "banner": "https://files.worldwildlife.org/wwfcmsprod/images/HERO_Chimpanzee_Uganda/hero_small/5ww9mfzphi_Medium_WW215321.jpg",
        //     "img": "https://cdn.discordapp.com/icons/1222627580851785770/43eaca4cb06927f051a671956e819490.webp?size=56",
        //     "owner": "tiredgamedev.",
        //     "name": "Chimp tag",
        //     "tag": tags.public,
        //     "description": "Gorilla tag ripoff",
        //     "link": "https://discord.gg/9Y8GJyfw"
        // }
    ]
    return (
        <Layout>
            <div className='banner' style={{
                width: "100%",
                height: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <h1>Azalea Featured Servers</h1>
            </div>
            <div style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "fit-content",
                flexDirection: "column",
                gap: "10px"
            }}>
                {featured.map(server => {
                    return (
                        <div className='center' style={{
                            width: "100%",
                            height: "fit-content",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div className="card" style={{
                                background: `url(${server.banner})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                width: "800px",
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '20px'
                            }}>
                                <div style={{
                                    border: "1px solid var(--ifm-color-emphasis-200)",
                                    background: "linear-gradient(45deg, var(--ifm-card-background-color), transparent)",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backdropFilter: "blur(3.5px)",
                                    padding: "10px",
                                    width: "100%",
                                    height: "100%",
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: '20px'
    
                                }}>
                                <div className="icon">
                                    <img src={server.img} style={{
                                        width: "85px",
                                        borderRadius: "85px"
                                    }} />

                                </div>
                                <div className='info'>
                                    <div className="name" style={{
                                        display: "flex",
                                        gap: "10px",
                                        alignItems: "center",
                                        height: "fit-content"
                                    }}>
                                        <h1 style={{
                                            margin: "0",
                                            padding: "0"
                                        }}>{server.name}</h1>
                                        <span className="tag-a" style={{
                                            background: "rgba(0,0,0,35%)",
                                            color: "#fff",
                                            backdropFilter: "blur(10px)",
                                            padding: ".12em .5em",
                                            borderRadius: "6px"
                                        }}>{server.tag}</span>

                                    </div>
                                    <p>{server.description}</p>
                                    {/* <div style={{
                    display: "flex",
                    gap: "20px"
                }}> */}
                                    <a style={{ display: "flex", gap: "10px" }} href={server.link}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ fill: "currentcolor", width: "16px" }}>
                                            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                                        </svg> Visit</a>
                                    {/* </div> */}
                                </div>
                            </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <br />
            <br />
        </Layout>
    );
}