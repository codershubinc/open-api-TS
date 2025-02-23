export interface GetCountryDataUrl {
    (countryCode?: string): string;
}

export interface FetchCountryData {
    (code: string): ContryData;
}

export interface DataFunction {
    (countryCode?: string, dataType?: string): Promise<any>;

}

export interface ContryData {
    firstName: string[],
    lastName: string[],
    streets: string[],
    states: string[],
    cities: string[],
    femaleFirst: string[],
    maleFirst: string[]
}

