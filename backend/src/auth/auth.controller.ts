import { Controller, Post, Body, UnauthorizedException, ConflictException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly usersService: UsersService) { }

    @Post('login')
    async login(@Body() body: { username: string; password: string }) {
        const { username, password } = body;

        if (!username || !password) {
            throw new UnauthorizedException('Username and password are required');
        }

        const user = await this.usersService.findByUsername(username);

        if (!user || user.password !== password) {
            throw new UnauthorizedException('Invalid username or password');
        }

        // Return user data (without password)
        const { password: _, ...userWithoutPassword } = user.toObject();
        return {
            success: true,
            message: 'Login successful',
            user: userWithoutPassword,
        };
    }

    @Post('register')
    async register(
        @Body() body: { username: string; password: string; email?: string; fullName?: string },
    ) {
        const { username, password, email, fullName } = body;

        if (!username || !password) {
            throw new UnauthorizedException('Username and password are required');
        }

        // Check if user already exists
        const existingUser = await this.usersService.findByUsername(username);
        if (existingUser) {
            throw new ConflictException('Username already exists');
        }

        // Create new user
        const newUser = await this.usersService.create({
            username,
            password,
            email,
            fullName,
        });

        const { password: _, ...userWithoutPassword } = newUser.toObject();
        return {
            success: true,
            message: 'Registration successful',
            user: userWithoutPassword,
        };
    }
}
