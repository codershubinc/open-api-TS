export interface GetCountryDataUrl {
    (countryCode?: string): string;
}

export interface FetchCountryData {
    (url: string): Promise<any>;
}

export interface DataFunction {
    (countryCode?: string, dataType?: string): Promise<any>;
}