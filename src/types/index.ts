import { ApolloError } from "@apollo/client";
export interface Country {
  code: string;
  name: string;
  continent: Continent;
  languages: Language[];
}
interface Continent {
  code: string;
  name: string;
  countries: Country[];
}
interface Language {
  code: string;
  name: string;
  native: string;
  rtl: boolean;
}
export interface LandingPageData {
  continents: Continent[];
  countries: Country[];
}

export interface ContextType {
  loading: boolean;
  error: ApolloError | undefined;
  data: LandingPageData | undefined;
}
