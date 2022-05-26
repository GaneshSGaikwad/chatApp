import { ChannelC} from './createChannel';
import { Channel } from './channel.component';
import { Message } from './message';
import {User} from './user'



export class ChannelService{

    user:User[]=[];

    message:Message[]=[];

    channelc:ChannelC[]=[{name:'general',user:[],message:[]}];



    

   


    toGeneralChannel(u:any){
        let x=new User(u['id'],u['name'],u['channelName']);
        this.user.push(x);
        console.log(this.user);

    }

    messagePrint(m:any){

        let y=new Message(m['name'],m['messageBody'],m['date'])
        this.message.push(y);
        console.log(this.message);

    }

    createChannel(c:any){
        let a=new ChannelC(c['name'],c['user'],c['message'])
        this.channelc.push(a);
        console.log(this.channelc)

    }


    addMessToChannel(a:any,cname:string){
       
      let b= this.channelc.find((x)=>{
           return x.name==cname;
       })
            b?.message.push(a);
            b?.user.push(a.name);

          console.log(b)

    }

    printMessage(cname:string):Message[]{
        console.log(this.channelc.find((x)=> x.name==cname)!.message)
        return this.channelc.find((x)=> x.name==cname)!.message;
    }






    



   



}