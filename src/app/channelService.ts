import { Message } from './message';
import {User} from './user'



export class ChannelService{

    user:User[]=[];

    message:Message[]=[];

   
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

    
}