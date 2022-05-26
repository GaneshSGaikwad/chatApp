export class User{
    id!:number;
    name!:string;
    channelName!:string;
    

    constructor(id:number,name:string,channelName:string){
        this.id=id;
        this.name=name;
        this.channelName=channelName;
        
    }

}