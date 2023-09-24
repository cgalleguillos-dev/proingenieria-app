
import * as bcrypt from 'bcrypt';

export const comparePassword = async (
    password: string,
    receivedPassword: string
): Promise<boolean> => {
    return await bcrypt.compare(password, receivedPassword);
};

export const hashPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, 12);
}

