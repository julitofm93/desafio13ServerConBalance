import dotenv from 'dotenv'

dotenv.config()
export default {
    mongo: {
        baseUrl: process.env.MONGO_URL_ECOMMERCE
    }
}
