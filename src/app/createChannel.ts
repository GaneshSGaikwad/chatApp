import { Message } from "./message";


export class ChannelC{
    name!:string;
    user!:string[];
    message!:Message[];

    constructor(name:string,user:string[],message:Message[]){
     this.name=name;
     this.user=[];
     this.message=[];
    }

   

    
}