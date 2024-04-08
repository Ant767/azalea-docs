# Installation

This is a script that can be added to your addon to communicate with azalea

# NOTE: THIS ONLY WORKS ON AZALEA V2.2+

```js
import { ScriptEventSource, system, world } from "@minecraft/server";

class AzaleaAPI {
    constructor() {
        this.overworld = world.getDimension("overworld");
        this.responseTypes = {
            error: "ERROR",
            info: "INFO",
            plainText: "TEXT",
            wait: "WAIT",
            warn: "WARN",
            success: "SUCCESS"
        }
    }
    send(id,json) {
        this.overworld.runCommand(`scriptevent azalea_begin:${id}`);
        let text = JSON.stringify(json);
        let parts = text.match(/.{1,256}/g);
        for(const part of parts) {
            this.overworld.runCommand(`scriptevent azalea_append:${id} ${part}`);
        }
        this.overworld.runCommand(`scriptevent azalea_end:${id}`);
    }
    generateMessageID() {
        let text = "";
        let chars = "abcdefghijklmnopqrstuvwxyz".split('');
        for(let i = 0;i < 10;i++) {
            text += chars[Math.floor(Math.random() * chars.length)]
        }
        return text;
    }
    createCommand(name, data, callback) {
        let scriptevent = `azalea_api:${this.generateMessageID()}`;
        this.send(this.generateMessageID(), {
            type: "azalea:create_command",
            data: {
                name,
                ...data
            },
            scriptevent_id: scriptevent
        });
        system.afterEvents.scriptEventReceive.subscribe(e=>{
            if(e.id != scriptevent) return;
            if(e.sourceType != ScriptEventSource.Entity) return;
            if(e.sourceEntity.typeId != "minecraft:player") return;
            callback({
                message: e.message,
                sender: e.sourceEntity,
            }, e.message.split(' ').slice(1));
        })
    }
    respond(player, type, message) {
        this.send(this.generateMessageID(), {
            message: `${type} ${message}`,
            playerName: player.name,
            type: 'azalea:response'
        })
    }
}

export const azalea = new AzaleaAPI();
```