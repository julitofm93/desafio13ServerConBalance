import Product from "../models/products.js";
import GenericQueries from "./genericQueries.js";

export default class ProductService extends GenericQueries{
    constructor(dao){
        super(dao,Product.model);
    }
    async findByCode(code){
        return this.dao.findOne({code},Product.model);
    }
}