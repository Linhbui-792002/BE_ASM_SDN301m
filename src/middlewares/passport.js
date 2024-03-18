import passport from 'passport';
import JwtPassport, { ExtractJwt } from 'passport-jwt';
const JwtStratery = JwtPassport.Strategy;
import PassportLocal from 'passport-local';
const LocalStrategy = PassportLocal.Strategy;
import GooglePlusTokenStratgy from 'passport-google-plus-token';
import createHttpError from 'http-errors';
import AccountModel from '../models/account.model.js';

//Passport authorization
export const passportConfig = passport.use(
  new JwtStratery(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('Authorization'),
      secretOrKey: process.env.ACCESS_TOKEN_SECRET,
    },
    async (payload, done) => {
      try {
        //tim user tu database
        console.log(payload.sub);
        const user = {
          name: 'linhbui',
          phone: '036526712',
        };
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

// passport google
export const passportConfigGoogle = passport.use(
  new GooglePlusTokenStratgy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, next) => {
      try {
        //tim user tu database

        if (!profile) return next(null, false);
        if (!(profile?._json?.domain == 'fpt.edu.vn')) return next(null, false);
        const userProfile = profile._json;
        const email = profile._json?.emails?.[0]?.value;

        console.log(email, 'email', userProfile);
        console.log('==================');
      } catch (error) {
        next(error, false);
      }
    }
  )
);

// passport local
export const passportLocalConfig = passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
    },
    async (email, password, done) => {
      try {
        // imuser by email
        // const user = AccountModel.find({ email: email });
        const user = {
          email: 'linhbx@fpt.edu.vn',
          password: '123456',
        };
        if (!user) return done(null, false);
        // so sanh pass
        const isCorrectPassword = password == user.password;

        if (!isCorrectPassword) return done(null, false);
        done(null, user);
      } catch (error) {
        done(error, false);
        console.log(error);
      }
    }
  )
);
