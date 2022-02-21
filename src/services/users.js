import mongoose  from "mongoose";
import User from "../models/user.js";
import GenericQueries from "./genericQueries.js";

export default class UserService extends GenericQueries{
    constructor(dao){
        super(dao,User.model);
    }
    async findByUsername(username){
        return this.dao.findOne({username},User.model);
    }
}

