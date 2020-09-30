import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { JWT_SECRET } from '../utils/secrets';
import { UserModel } from '../components/users/users.model';

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET,
};

passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
        UserModel.findOne({ id: jwt_payload.sub }, (err, user) => {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
    }),
);
