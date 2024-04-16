import { Controller,Get,Post,Body,Param,NotFoundException } from '@nestjs/common';
import { createMessagesDto } from './dtos/create-messages-dtos';
import { MessageService } from './messageService';


@Controller('messages')
export class MessagesController {
    MessageServices: MessageService

    constructor(){
        this.MessageServices = new MessageService()
    }
    @Get()
    listMessages(){
        return this.MessageServices.findAll()
    }
    @Post()
    createMessages(@Body() body:createMessagesDto){
        return this.MessageServices.createMessage(body.content)
    }
    @Get('/:id')
    getMessages(@Param('id')id:any){
     const message =  this.MessageServices.findOne(id)
     if(!message){
        throw new NotFoundException("Id not found")

     }
    }
}
