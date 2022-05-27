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
    

    hide:boolean=true;

    hide1:boolean=false;

    sub:boolean=true;
   


    constructor(public channelService:ChannelService,public messageService:MessageService){}

    submit(na:string){
        this.name=na;
        //  console.log(this.name+" hi");
        //  console.log()
        
        //console.log(this.name);
        this.channelService.toGeneralChannel({
            id:this.id++,
            name:this.name,
            channelName:'general',
          })

          this.hide=false;
        this.hide1=true;
        //console.log(this.name)

      
       
    }

    sendMessage(mess:string,name:string){
        this.channelService.messagePrint({
            name:name,
            messageBody:mess,
            date:new Date()
        })
         //this.message=mess;
          //console.log(mess);
       
    }

   createChannel(name:string){
       this.messageService.createChannel({
           name:name,
           user:'',
           message:undefined

       })
       //this.cname=name;
        
        console.log(name);
       // this.sub=false;
      
       
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
  //this.send=false;
  

   }

   joinChannel(name:string){
       this.channelName=name;
     
    //  console.log(name);
    //  this.send=true;
    //this.sub=false;

    

    

    
    
   }


   printMessage(){
       this.sub=false;
       return this.messageService.printMessage(this.channelName);
   }

   isSubscribe():boolean{
    if (this.channelName=='general') {
        return true;
    }

    console.log("channel name "+this.channelName)
return this.messageService.isSubscribe(this.channelName,this.name)
}

   getMemberNames(){
       return this.messageService.getMemberNames(this.channelName);
   }

   
   subscribe(cname:string) {
        
    console.log(this.name+" NAME")
    // this.send=false;
    // this.sub=true;
    this.sub=true;


    return this.messageService.subscribe(cname,this.name);
    
}

unsubscribe(cname:string){
    return this.messageService.unsubscribe(cname,this.name);
}

}