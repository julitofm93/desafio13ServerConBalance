import mongoose from 'mongoose';
let Schema = mongoose.Schema;
export default class Product{
    constructor(data){
        this.data=data;
    }
    static get model(){
        return 'Product';
    }
    static get schema(){
        return {
            name:{
                type:String,
                required:true,
            },
            description:{
                type:String,
                required:true,
            },
            price:{
                type:Number
            },
            stock:{
                type:Number,
            },
            code:{
                type:Number,
                required:true,
                unique:true
            }
        }
    }
}