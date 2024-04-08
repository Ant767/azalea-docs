const fs = require('fs')
let json = [];
fs.readdir('./',(err,files)=>{
for(const file of files) {
if(!file.endsWith('.png')) continue;
json.push({
name: `Packs/Asteroid/${file.slice(0,-4)}`,
path: `textures/amethyst_icons/Packs/asteroid_icons/${file.slice(0,-4)}`
})
}
fs.writeFile("test.json", JSON.stringify(json, null, 2), err=>{});
});