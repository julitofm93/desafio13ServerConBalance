import mongoose from 'mongoose';

const collection = 'Users'


export default class User{
    constructor(data){
        this.data=data;
    }
    static get model(){
        return 'Users';
    }
    static get schema(){
        return {
            first_name:{
                type:String,
                required:true,
            },
            last_name:{
                type:String,
                required:true,
            },
            age:{
                type:Number
            },
            username:{
                type:String,
                default:"anonymus",
                unique:true
            },
            email:{
                type:String,
                required:true,
                unique:true
            },
            password:{
                type:String,
                required:true
            }
        }
    }
}

