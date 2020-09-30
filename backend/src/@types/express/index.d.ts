import { IUserDoc } from '../../components/users/users.interface';

declare global {
    namespace Express {
        interface User extends IUserDoc {}
    }
}
