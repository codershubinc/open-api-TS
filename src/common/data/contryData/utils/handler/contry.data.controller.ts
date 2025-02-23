import type { FetchCountryData, DataFunction, ContryData } from "../interfaces/contry.data.interface";
import Random from "../../../../util/random.util";
import countryCodes from "../constants/allContryCodes";
import contryImports from "../constants";

const fetchCountryData: FetchCountryData = (countryCode: string) => {
    try {
        const data: ContryData = contryImports[countryCode];
        return data;
    } catch (error) {
        console.error("Error fetching country data:", error);
        return error;
    }
};

const getData: DataFunction = async (countryCode?: string) => {
    const selectedCountry = countryCode || Random.fromArray(countryCodes);
    const data = fetchCountryData(selectedCountry);
    return data;
};

export default getData;
