const fs = require('fs');
const icons = require('./icons')

let iconsList = fs.readFileSync('icons.mdx').toString();

for(const icon of icons) {
    if(!iconsList.includes(icon.name) && !icon.name.startsWith('block_row')) {
        iconsList += `\n| ${icon.name}                                    | ${icon.name.split('/').at(-1).replace(/_/g," ")}                       | ![furry](/img/${icon.path}.png)                                                                               |`

    }
}
fs.writeFileSync('icons.mdx', iconsList)