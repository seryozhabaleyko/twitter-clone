import { Document } from 'mongoose';
import { User } from '../../user/user.interface';

declare global {
    namespace Express {
        interface User extends User, Document {}
    }
}
