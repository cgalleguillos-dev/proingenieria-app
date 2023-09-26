import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
export const comparePassword = async (
    password: string,
    receivedPassword: string
): Promise<boolean> => {
    return await bcrypt.compare(password, receivedPassword);
};

export const hashPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, 12);
}

export const decodeToken = (token: string, key: string = 'secret'): any => {
    return jwt.verify(token, key);
}

export const verifySession = (session: any, role: string): boolean => {
    if (!session) {
        return false;
    }
    return session.user.role.name === role;
}