import { Component } from "@angular/core";
import { ChannelService } from "./channelService";
import { Message } from "./message";
import { MessageService } from "./messageService";

@Component({
    selector:'app-channel',
    templateUrl:'./channel.component.html',
    providers:[ChannelService],
    styleUrls: ['./channel.component.css']
    

})


export class Channel{
    id:number=0;
    
    name!:string;
    
    channelName:string='general';
    

    message!:string;

    cname!:string;
    sub:boolean=false;
    send:boolean=false;

    hide:boolean=true;
   


    constructor(public channelService:ChannelService,public messageService:MessageService){}

    submit(na:string){
        this.name=na;
         console.log(this.name+" hi");
         console.log()
        
        //console.log(this.name);
        this.channelService.toGeneralChannel({
            id:this.id++,
            name:this.name,
            channelName:'general',
          })

        this.hide=false;
        console.log(this.name)

      
       
    }

    sendMessage(mess:string,name:string){
        this.channelService.messagePrint({
            name:name,
            messageBody:mess,
            date:new Date()
        })
         //this.message=mess;
          console.log(mess);
       
    }

   createChannel(name:string){
       this.messageService.createChannel({
           name:name,
           user:'',
           message:undefined

       })
       //this.cname=name;
        
        console.log(name);
        this.sub=false;
       
   }

   addMessToChannel(mess:string,name:string){
    //    if(this.channelName===this.cname){

    let msg=new Message(name,mess,new Date());
    //console.log(msg)
       this.messageService.addMessToChannel(msg, this.channelName)

    //    console.log(mess+" "+name)
    //    this.message=mess;
    //    console.log(this.channelService.channelc)
    // }
  this.send=false;

   }

   joinChannel(name:string){
       this.channelName=name;
     
     console.log(name);
     this.send=true;
    //this.sub=false;

    if(this.channelName=='general'){
        this.send=false;
    }

   

    
    
   }


   printMessage(){
       return this.messageService.printMessage(this.channelName);
   }

   subscribe(){
       this.send=false;
       this.sub=true;
     
   }

   getMemberNames(){
       return this.messageService.getMemberNames(this.channelName);
   }

}