import { Injectable } from '@angular/core';
import { ChannelC } from './createChannel';
import { Message } from './message';
import { User } from './user';




@Injectable({
    providedIn: 'root'
  })
export class MessageService{
   
    channelc:ChannelC[]=[{name:'general',user:[],message:[]}];
    member:User[] =[];

    printMessage(cname:string):Message[]{
        //console.log(this.channelc.find((x)=> x.name==cname)!.message)
        return this.channelc.find((x)=> x.name==cname)!.message;
    }

    addMessToChannel(a:any,cname:string){
       
        let b= this.channelc.find((x)=>{
             return x.name==cname;
         })
              b?.message.push(a);
              b?.user.push(a.name);
  
            //console.log(b)

            console.log(this.channelc)
  
      }

      createChannel(c:any){
        let a=new ChannelC(c['name'],c['user'],c['message'])
        this.channelc.push(a);
        //console.log(this.channelc)

    }

    // getMemberNames(cname:string):Message[]{
    //     return this.channelc.find((x)=> x.name==cname)!.message;
    // }

    getMemberNames(cname:string):any{
        //console.log(this.channelc.find((x)=> x.name==cname)!.user+" hii "+cname)
       console.log( this.channelc.filter((x)=> x.name==cname)+" hiiii")
     
       
        
        let temp=this.channelc.find((x)=> x.name==cname);
        let unique = [...new Set(temp?.user)];

        console.log(unique+" hhhh")
            return unique;
    
        
    
       


      
       
        // return this.channelc.find((x)=> x.name==cname)!.user;

        
    }
}