import countryCodes from "@/common/data/contryData/utils/constants/allContryCodes";
import getData from "@/common/data/contryData/utils/handler/contry.data.controller";



class getUser {
    constructor() {

        console.log('createUser')

    }

    byContry(country: string) {

        try {
            console.log('return await getData(country);');
            if (!countryCodes.includes(country)) return 'Country not found';;
            return getData(country);
        } catch (error) {
            console.log(error)

        }

    }

    random() {

        console.log('return await getData(country);');

    }
}


const GetUser = new getUser()

export default GetUser;