import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Layout from '@theme/Layout';
import comp1 from '@theme/Tabs'
import moment from 'moment';
const supabase = createClient("https://gjqsznhwkjsanuvlryxe.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqcXN6bmh3a2pzYW51dmxyeXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI1MjUwNjUsImV4cCI6MjAyODEwMTA2NX0.v4z-KTl5mK7jAWcZveJ-_WzKN5FT6FpeCW7KszDHUbc");

export default function MyReactPage() {
    let [theme, setTheme] = useState({
        name: "Default Azalea",
        descriptionText: "Default.",
        successColor: "§a",
        errorColor: "§c",
        infoColor: "§b",
        darkSuccess: "§2",
        darkError: "§4",
        darkInfo: "§9",
        defaultBracketColor: "§8",
        defaultRankColor: "§b",
        defaultNameColor: "§3",
        defaultMessageColor: "§7",
        barFull: "§a",
        barEmpty: "§c",
        barBracket: "§7",
        category: "§8",
        header: "§e",
        footer: "§f",
        footerAlt: "§o§7",
        command: "§a",
        description: "§7",
        alias: "§b",
        warningColor: "§e"
    })
    let colorCodes = {
        c0: "#000000",
        c1: "#0000AA",
        c2: "#00AA00",
        c3: "#00AAAA",
        c4: "#AA0000",
        c5: "#AA00AA",
        c6: "#FFAA00",
        c7: "#AAAAAA",
        c8: "#555555",
        c9: "#5555FF",
        ca: "#55FF55",
        cb: "#55FFFF",
        cc: "#FF5555",
        cd: "#FF55FF",
        ce: "#FFFF55",
        cf: "#FFFFFF",
        cg: "#DDD605",
        ch: "#E3D401",
        ci: "#CECACA",
        cj: "#443A3B",
        cm: "#971607",
        cn: "#B4684D",
        cp: "#DEB12D",
        cq: "#47A036",
        cs: "#2CBAA8",
        ct: "#21497B",
        cu: "#9A5CC6"
    }

    function lightOrDark(color) {

        // Variables for red, green, blue values
        var r, g, b, hsp;

        // Check the format of the color, HEX or RGB?
        if (color.match(/^rgb/)) {

            // If RGB --> store the red, green, blue values in separate variables
            color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

            r = color[1];
            g = color[2];
            b = color[3];
        }
        else {

            // If hex --> Convert it to RGB: http://gist.github.com/983661
            color = +("0x" + color.slice(1).replace(
                color.length < 5 && /./g, '$&$&'));

            r = color >> 16;
            g = color >> 8 & 255;
            b = color & 255;
        }

        // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
        hsp = Math.sqrt(
            0.299 * (r * r) +
            0.587 * (g * g) +
            0.114 * (b * b)
        );

        // Using the HSP value, determine whether the color is light or dark
        if (hsp > 127.5) {

            return 'light';
        }
        else {

            return 'dark';
        }
    }
    return (
        <Layout>
            {Object.keys(theme).map(_ => {
                if (!theme[_].startsWith('§') || theme[_].length != 2) return (
                    <span style={{display:"none"}}></span>
                )
                return (
                    <div class="dropdown dropdown--hoverable">
                        <button class="button button--primary" style={{
                            background: colorCodes[theme[_].replace('§', 'c')],
                            color: lightOrDark(colorCodes[theme[_].replace('§', 'c')]) == 'dark' ? "#FFFFFF" : "#000000",
                            border: "1px solid transparent"

                        }}>{_} ({theme[_]})</button>
                        <ul class="dropdown__menu" style={{
                            maxHeight: "200px",
                        }}>
                            {Object.keys(colorCodes).map(_2 => {
                                return (
                                    <li className="dropdown__link" style={{
                                    }} onClick={() => {
                                        // theme.;
                                        setTheme({ ...theme, [_]: `§${_2[1]}` });
                                    }}>
                                        <div style={{
                                            background: colorCodes[_2],
                                            width: "100%",
                                            height: "20px",
                                            borderRadius: "5px"
                                        }}></div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </Layout>
    )
}