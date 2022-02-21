export default class GenericQueries{
    constructor(dao,model){
        this.dao=dao;
        this.model = model;
    }
    async getBy(params){
        return this.dao.findOne(params,this.model);
    }
    async getAll(params){
        return this.dao.findAll(params,this.model);
    }

    async exists(params){
        return this.dao.exists(this.model,params);
    }
    async save(data){
        return this.dao.insert(data,this.model);
    }
    remove(id){
        return this.dao.remove(id,this.model);
    }
}