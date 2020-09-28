export const JWT_SECRET: string = process.env['JWT_SECRET'] as string;

if (!JWT_SECRET) {
    console.log('No JWT secret string. Set JWT_SECRET environment variable.');
    process.exit(1);
}
