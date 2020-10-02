import { IsEmail, IsString } from 'class-validator';

class CreateUserDto {
    @IsString()
    public name: string;

    @IsString()
    public surname: string;

    @IsEmail()
    public email: string;

    @IsString()
    public password: string;
}

export { CreateUserDto };
