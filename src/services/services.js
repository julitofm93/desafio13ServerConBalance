import Dao from "../models/dao.js";
import UserService from './users.js';
import MessageService from "./messages.js";
import ProductService from "./products.js";

const dao = new Dao();

export const userService = new UserService(dao);
export const messageService = new MessageService(dao);
export const productService = new ProductService(dao);