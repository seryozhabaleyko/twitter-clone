import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { userModel } from '../user/user.model';
import { User } from '../user/user.interface';
import { UserWithThatEmailAlreadyExistsException } from '../exceptions/UserWithThatEmailAlreadyExistsException';
import { DataStoredInToken } from '../interfaces/dataStoredInToken';
import { TokenData } from '../interfaces/tokenData.interface';
import { LogInDto } from './authentication.dto';
import { WrongCredentialsException } from '../exceptions/WrongCredentialsException';

class AuthService {
    public user = userModel;

    public async register(data: User): Promise<User> {
        const isEmailExist = await this.user.findOne({ email: data.email });
        if (isEmailExist) throw new UserWithThatEmailAlreadyExistsException(data.email);

        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(data.password, salt);

        const user: User = await this.user.create({ ...data, password });

        return user;
    }

    public async login(data: LogInDto) {
        const user: User | null = await this.user.findOne({ email: data.email });
        if (!user) throw new WrongCredentialsException();

        const isPasswordMatching: boolean = await bcrypt.compare(data.password, user.password);
        if (!isPasswordMatching) throw new WrongCredentialsException();

        const token = this.createToken(user);

        return token;
    }

    public async logout() {}

    public createToken(user: User): TokenData {
        const expiresIn: string = '24h';
        const secret: string = process.env.JWT_SECRET as string;
        const dataStoredInToken: DataStoredInToken = { _id: user._id };

        return {
            expiresIn,
            token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
        };
    }
}

export { AuthService };
