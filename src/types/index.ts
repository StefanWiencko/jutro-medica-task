import { ApolloError } from "@apollo/client";
export interface Country {
  code: string;
  name: string;
  emoji: string;
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
export interface Data {
  continents: Continent[];
  countries: Country[];
}

export interface ContextType {
  loading: boolean;
  error: ApolloError | undefined;
  data: Data | undefined;
}
