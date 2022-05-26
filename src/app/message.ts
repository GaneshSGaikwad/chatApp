export class Message{
    name!:string;
    messageBody!:string;
    date!:Date;
    
    

    constructor(name:string,messageBody:string,date:Date){
        this.name=name;
        this.messageBody=messageBody;
        this.date=date;
        
    }

}