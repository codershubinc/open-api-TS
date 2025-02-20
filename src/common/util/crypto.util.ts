import crypto from 'crypto';

class CryptoUtil {
    generateSalt(): string {
        return crypto.randomBytes(16).toString('hex');
    }

    hashWithSalt(str: string, salt: string): string {
        return crypto.createHash('sha256').update(str + salt).digest('hex');
    }

    static hashPassword(password: string): string {
        return crypto.createHash('sha256').update(password).digest('hex');
    }
}

export default CryptoUtil;