import { createContext, FC } from "react";
import { ContextType, LandingPageData } from "../types";
import { useQuery } from "@apollo/client";
import { getLandingPageData } from "../queries";

export const DataContext = createContext<ContextType>({
  loading: true,
  error: undefined,
  data: undefined,
});
export const DataProvider: FC = ({ children }) => {
  const { loading, error, data } =
    useQuery<LandingPageData>(getLandingPageData);
  return (
    <DataContext.Provider value={{ loading, error, data }}>
      {children}
    </DataContext.Provider>
  );
};
