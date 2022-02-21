import mongoose from 'mongoose';
import passport from 'passport';
import fbStrategy from 'passport-facebook';
import { UserModel } from './models/dao.js';
import UserService from './services/users.js';
const FacebookStrategy = fbStrategy.Strategy;



const initializePassportConfig = () =>{
    passport.use('facebook',new FacebookStrategy({
        clientID:'1669719896708948',
        clientSecret:'3ce4b7e3563b5a7d6d72fa5882ce3305',
        callbackURL:'https://2142-2800-810-566-89c6-c58a-1719-855d-4690.ngrok.io/auth/facebook/callback',
        profileFields:['emails']
    },async (accessToken,refreshToken,profile,done)=>{
        try{
            console.log(accessToken);
            console.log(profile);
            let user = await UserModel.findOne({email:profile.emails[0].value})
            done(null,user);
        }catch(error){
            done(error);
        }
    }))

    passport.serializeUser((user,done)=>{
        done(null,user._id)
    })
    passport.deserializeUser((id,done)=>{
        UserModel.findById(id,done);
    })
}

export default initializePassportConfig;