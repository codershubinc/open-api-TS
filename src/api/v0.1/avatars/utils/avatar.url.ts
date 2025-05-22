import { avatarStyles } from "./avatar.constants";

class avatar {

    endpoint = 'https://api.dicebear.com/9.x/';

    getUrl(style: string, query?: string | null) {

        return `${this.endpoint}${style}/svg${query ? `?seed=${query}` : ''}`;
    }
}

const AVATAR = new avatar();
export default AVATAR;