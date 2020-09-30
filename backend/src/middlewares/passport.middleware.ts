import dotenv from 'dotenv';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { UserModel } from '../components/users/users.model';

dotenv.config();

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};

export const applyPassportStrategy = (passport: any) => {
    passport.use(
        new JwtStrategy(options, (jwt_payload, done) => {
            UserModel.findOne({ _id: jwt_payload.userId }, (err, user) => {
                if (err) {
                    return done(err, false);
                }
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            });
        }),
    );
};
