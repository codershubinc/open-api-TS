import crypto from 'crypto';


class cryptoUtil {

    generateSalt(): string {
        return crypto.randomBytes(16).toString('hex');
    }

    hashWithSalt(str: string, salt: string): string {
        return crypto.createHash('sha256').
            update
            (str + salt).
            digest('hex');
    }
}

const CryptoUtil = new cryptoUtil();
export default CryptoUtil;