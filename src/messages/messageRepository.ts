import { readFile, writeFile } from "fs/promises";
import { json } from "stream/consumers";


export class messageRepo {
    async findObeById(id:string){
        const contents = await   readFile('message.json','utf-8')
        const message = JSON.parse(contents);
        console.log(message)
      return  message[id];

    }
    async findAll(){
        const contents = await readFile('message.json','utf-8');
        const message = JSON.parse(contents);
        return message;
    }

    async createMessage (content:string){
        const contents = await readFile('message.json','utf-8');
        const message = JSON.parse(contents);
        const id = Math.floor(Math.random()*999)
        message[id] = {id,content};
        await writeFile('message.json',JSON.stringify(message))
    }
}

