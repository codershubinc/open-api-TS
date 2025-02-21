import type { GetCountryDataUrl, FetchCountryData, DataFunction } from "../interfaces/contry.data.interfaces";
import Random from "@/common/util/random.util";
import countryCodes from "../constants/allContryCodes";
import * as path from "path";

const fetchCountryData: FetchCountryData = async (countryCode: string) => {
    try {
        const modulePath = path.join(__dirname, `../data/${countryCode}/index`);
        const result = require(modulePath);

        console.log("Loaded country data:", result);
        return result["femaleFirst"];
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
