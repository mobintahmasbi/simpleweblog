import bcrypt from 'bcrypt';

export const generatedHashedPassword = async (password: string) => {
    return await bcrypt.hash(password, 10);
}

export const compareHashedPassword = async (password: string, hashedPassword: string) => {
    return await bcrypt.compare(password, hashedPassword);
}
