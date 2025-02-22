import type { FetchCountryData, DataFunction } from "../interfaces/contry.data.interfaces";
import Random from "../../../../util/random.util";
import countryCodes from "../constants/allContryCodes";
import contryImports from "../constants";

const fetchCountryData: FetchCountryData = async (countryCode: string) => {
    try {
        const data = contryImports[countryCode];
        return data;
    } catch (error) {
        console.error("Error fetching country data:", error);
        return error;
    }
};

const getData: DataFunction = async (countryCode?: string) => {
    const selectedCountry = countryCode || Random.fromArray(countryCodes);
    return fetchCountryData(selectedCountry);
};

export default getData;
