import type { GetCountryDataUrl, FetchCountryData, DataFunction } from "../interfaces/contry.data.interfaces";
import Random from "@/common/util/random.util";
import countryCodes from "../constants/allContryCodes";

const getContryDataUrl: GetCountryDataUrl = (countryCode) => {
    return `@/data/contryData/data/${countryCode}`;
};

const fetchContryData: FetchCountryData = async (url) => {
    const result = await import(url);
    const data = result["femaleFirst"];
    return data;
};

const getData: DataFunction = async (countryCode) => {
    const url = getContryDataUrl(countryCode || Random.fromArray(countryCodes));
    return fetchContryData(url);
};

export default getData;