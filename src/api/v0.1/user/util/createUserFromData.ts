import { ContryData } from "@/common/data/contryData/utils/interfaces/contry.data.interface"
import Random from "@/common/util/random.util"

const USER = (data: ContryData) => {
    const gender = Random.fromArray(['M', 'F'])

    const firstName = String(Random.fromArray(data[gender === 'M' ? 'maleFirst' : 'femaleFirst']))
    const lastName = String(Random.fromArray(data.lastName))

    return {
        'FirstName': firstName,
        'LastName': lastName,
        'Gender': gender === 'M' ? 'male' : 'female',
        'Email': (`${firstName
            .toLowerCase()
            .replace(/ /g, '')
            .replace(/'/g, '')
            .replace(/-/g, '')
            }.${lastName
                .toLowerCase()
                .replace(/ /g, '')
                .replace(/'/g, '')
                .replace(/-/g, '')
            }@codershubinc.tech`).trim(),
        'Phone': Random.phone(),
        'Address': {
            'Street': Random.fromArray(data.streets),
            'City': Random.fromArray(data.cities),
            'State': Random.fromArray(data.states),
            'Zip': Random.zip()
        }
    }
}

export default
    USER