---
sidebar_position: 2
---

# Add advanced items

## Example

```js
if(player.hasTag("admin")) {
    setIcon("emerald")
    setName("§a§lYou are an admin!")
    setLore(["you are probably 9 years old"]);
} else {
    setIcon("red_dye");
    setName("§c§lYou are not an admin");
    setLore(["imagine not being an admin"])
}

setOnclick((player, {uiManager}) => {
    player.sendMessage("hello, world!")
})
```