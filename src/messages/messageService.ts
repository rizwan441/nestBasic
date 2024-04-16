import { messageRepo } from "./messageRepository";

export class MessageService{
    messageRepop:messageRepo
    constructor(){

        this.messageRepop = new messageRepo()
       }
        findOne(id:string){
        this.messageRepop.findObeById
    }
     findAll(){
        this.messageRepop.findAll();
    }
     createMessage(content:string){
         this.messageRepop.createMessage(content)
    }
}