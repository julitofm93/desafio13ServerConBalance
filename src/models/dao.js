import mongoose from 'mongoose';
import User from './user.js';
import Message from './message.js';
import Product from './products.js';

export default class Dao{
    constructor(){
        mongoose.connect("mongodb+srv://Julito:123@prueba.e1gkm.mongodb.net/desafio11?retryWrites=true&w=majority",{ useNewUrlParser: true }).catch(error=>{
            console.error(error);
            process.exit();
        })

        const timestamp = {timestamps:{createdAt:'created_at',updatedAt:'updated_at'}};
        const UserSchema = mongoose.Schema(User.schema,timestamp);
        const ProductSchema = mongoose.Schema(Product.schema,timestamp);
        const MessageSchema = mongoose.Schema(Message.schema,timestamp);
        MessageSchema.pre('find',function(){
            this.populate('user')
        })

        this.models={
            [User.model]:mongoose.model(User.model,UserSchema),
            [Message.model]:mongoose.model(Message.model,MessageSchema),
            [Product.model]:mongoose.model(Product.model,ProductSchema)
        }
    }
    async get(options,entity){
        if(!this.models[entity]) throw new Error(`Entity ${entity} not found or defined`);
        return this.models[entity].findOne(options);
    }
    async getAll(options,entity){
        if(!this.models[entity]) throw new Error(`Entity ${entity} not found or defined`);
        let results = await this.models[entity].find(options);
        return results.map(result=>result)
    }
    async findOne( options, entity ) {
		if( !this.models[entity] ) throw new Error( 'Entity ' + entity + ' not found or defined.' );
		let result = await this.models[entity].findOne( options );
		return result ? result.toObject() : null;
	}
    async findAll(options,entity){
        if(!this.models[entity]) throw new Error(`Entity ${entity} not found or defined`);
        let results = await this.models[entity].find(options);
        return results.map(result=>result.toObject())
    }
    async insert(document,entity){
        if(!this.models[entity]) throw new Error(`Entity ${entity} not found or defined`);
        try{
            let instance = new this.models[entity](document);
            let result = await instance.save();
            return result? result.toObject():null;
        }catch(error){
            console.log(error);
            return null;
        }
    }
    async remove(id,entity){
        if(!this.models[entity]) throw new Error(`Entity ${entity} not found or defined`);
        let result = await this.modes[entity].findByIdAndDelete(id);
        return result? result.toObject():null;
    }
    async exists (entity, options) {
		if( !this.models[entity] ) throw new Error( 'Entity ' + entity + ' not found or defined.' );
		return this.models[entity].exists( options );
	}
}

export const UserModel = mongoose.model("users", mongoose.Schema({
    first_name:String,
    last_name:String,
    username:String,
    email:String,
    password:String,
    age:Number,
    address:String
}))