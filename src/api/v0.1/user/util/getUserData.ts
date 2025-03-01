import Random from "../../../../common/util/random.util";
import countryCodes from "../../../../common/data/contryData/utils/constants/allContryCodes"
import getData from "../../../../common/data/contryData/utils/handler/contry.data.controller";
import USER from "./createUserFromData";



class getUser {
    constructor() {

        console.log('createUser')

    }

    async byContryCode(country: string) {
        try {
            console.log('return await getData(country);');
            if (country === 'random') return USER(await getData(Random.fromArray(countryCodes)))
            return USER(await getData(country))
        } catch (error) {
            console.log(error)
        }
    }
}


const GetUser = new getUser()

export default GetUser;