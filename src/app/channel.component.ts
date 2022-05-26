import { Component } from "@angular/core";
import { ChannelService } from "./channelService";
import { Message } from "./message";

@Component({
    selector:'app-channel',
    templateUrl:'./channel.component.html',
    providers:[ChannelService]

})


export class Channel{
    id:number=0;
    
    name!:string;
    
    channelName:string='general';
    

    message!:string;

    cname!:string;
    flag1:boolean=false;
    flag2:boolean=false;
   


    constructor(public channelService:ChannelService){}

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
       this.channelService.createChannel({
           name:name,
           user:'',
           message:undefined

       })
       //this.cname=name;

       this.flag2=false;

       console.log(name);
   }

   addMessToChannel(mess:string,name:string){
    //    if(this.channelName===this.cname){

    let msg=new Message(name,mess,new Date());
    console.log(msg)
       this.channelService.addMessToChannel(msg, this.channelName)

       
    //    console.log(mess+" "+name)
    //    this.message=mess;
    //    console.log(this.channelService.channelc)
    // }
   }

   joinChannel(name:string){
       this.channelName=name;
       this.flag1=true;
       

    //    if(this.channelName!=='general'){
    //     this.flag=true;
    //    }
      
       console.log(this.channelName);
    
   }


   printMessage(){
       return this.channelService.printMessage(this.channelName);
   }

   subscribe(){
       this.flag2=true;
   }











    


    // create(name:string){
    //     this.channelService.createChannel({
    //         name:name,
              
    //     })

    //     console.log("hii")
        
    // }


    // createdChannel(name:string){
    //     this.channelService.toNewChannel({
    //         name:name,
    //         user:{ id:this.id++,
    //             name:this.name,
    //             channelName:'a'},
    //         message:{ name:name,
    //             messageBody:this.message,
    //             date:new Date()}    
    //     })
    // }

}