import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import moment from 'moment';
const supabase = createClient("https://gjqsznhwkjsanuvlryxe.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqcXN6bmh3a2pzYW51dmxyeXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI1MjUwNjUsImV4cCI6MjAyODEwMTA2NX0.v4z-KTl5mK7jAWcZveJ-_WzKN5FT6FpeCW7KszDHUbc");

function HomepageHeader() {

  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docs
          </Link>
        </div>
      </div>

    </header>
  );
}

export default function Home() {
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

  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
      </main>
      <hr style={{
        opacity: "0"
      }}></hr>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "10px"
      }}>
        <div style={{
          width: '90%',
          display: 'flex',
          gap: '10px',
          margin: '10px'
        }} className='mobile-card-list'>
          <div className="card feature-card">
    <div className="card__body">
      <h4>Chest GUIs</h4>
      <small>
        In Azalea, you can make your own Chest GUIs and you have thousands of icons to choose from!
      </small>
    </div>
    <div className="card__footer">
      <button className="button button--primary button--block">View Tutorial</button>
    </div>
  </div>
  <div className="card feature-card">
    <div className="card__body">
      <h4>Customization focused</h4>
      <small>
        Azalea is almost entirely focused around customization. You can customize almost everything you want with almost no limits.
      </small>
    </div>
    <div className="card__footer">
      <button className="button button--primary button--block">Visit Docs</button>
    </div>
  </div>
  <div className="card feature-card">
    <div className="card__body">
      <h4>Open-source</h4>
      <small>
        Azalea is entirely open source on GitHub. You can modify anything you want, and you are encouraged to modify the code if you need it to do something different.
      </small>
    </div>
    <div className="card__footer">
      <button className="button button--primary button--block">Visit Github</button>
    </div>
  </div>
  </div>
        <h1>Recent downloads</h1>
        <br></br>
        {(() => {
          let downloadsSorted = countries.sort((a, b) => {
            let json = JSON.parse(a.json_data);
            let json2 = JSON.parse(b.json_data);
            return json2.date - json.date;
          });
          // let download = downloadsSorted[0];
          // let download1 = downloadsSorted[1];
          // let download2 = downloadsSorted[2];
          // if (!download) return;
          // if (!download1) return;
          // if (!download2) return;
          let downloads = downloadsSorted.slice(1, 4);
          return downloads.map(download => {
            
            return (
              <div className="card" style={{
                maxWidth: "600px",
                width: "90%",
                height: "fit-content",
                border: "1px solid rgba(255, 255, 255, 10%)",
                background: "linear-gradient(45deg,var(--background-900),var(--background-950))",
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
                    padding: "0",
                    maxWidth: "400px",
                    "textOverflow": "ellipsis",
                    "maxLines": "1",
                    "overflow": "hidden",
                    "whiteSpace": "nowrap"
                  }}>{JSON.parse(download.json_data).version} #{JSON.parse(download.json_data).buildVersion.toString()}</h1>
                  <span className="tag-a" style={{
                    background: "var(--ifm-color-primary-tag)",
                    color: "var(--ifm-color-primary)",
                    padding: ".12em .5em",
                    borderRadius: "6px",
                    height: "fit-content",
                  }}>{JSON.parse(download.json_data).tag}</span>

                </div>
                <p style={{
                  opacity: "0.8"
                }}><i>{moment(JSON.parse(download.json_data).date).format("MMM Do YYYY")}</i></p>
                {/* <p><i>{JSON.parse(download.json_data).createdAt}</i></p> */}
                <a className="download btn button button--primary btn-primary" href={URL.createObjectURL(download.downloadData)} download={`${JSON.parse(download.json_data).version} ${JSON.parse(download.json_data).buildVersion.toString()}.mcaddon`} target="_blank">Download</a>
              </div>
            )
          })
        })()}
        <hr style={{
          opacity: "0"
        }}></hr>

        <h6 style={{
          "opacity": "0.5"
        }}><i><b>🌱🌺 Addon and website made by TheLegendaryTrashCan 🌺🌱</b></i></h6>
      </div>
    </Layout>
  );
}
