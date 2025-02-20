


class getUser {
    constructor() {
        console.log('createUser')
    }

    byContry(country: string) {

        console.log('return await getData(country);');
        return `return await getData(${country});`;

    }

    random() {

        console.log('return await getData(country);');

    }
}


const GetUser = new getUser()

export default GetUser;