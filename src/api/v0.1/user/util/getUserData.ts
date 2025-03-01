import Random from "../../../../common/util/random.util";
import countryCodes from "../../../../common/data/contryData/utils/constants/allContryCodes"
import getData from "../../../../common/data/contryData/utils/handler/contry.data.controller";
import USER from "./createUserDataFromData";



class getUser {
    constructor() {

        console.log('createUser')

    }

    async byContryCode(country: string) {
        try {
            // console.log('return await getData(country);', country);
            if (country === 'random') return USER(getData(Random.fromArray(countryCodes)))
            return USER(getData(country))
        } catch (error) {
            console.log(error)
        }
    }
}


const GetUser = new getUser()

export default GetUser;