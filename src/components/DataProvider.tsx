import { createContext, FC } from "react";
import { ContextType, Data } from "../types";
import { useQuery } from "@apollo/client";
import { getData } from "../queries";

export const DataContext = createContext<ContextType>({
  loading: true,
  error: undefined,
  data: undefined,
});
export const DataProvider: FC = ({ children }) => {
  const { loading, error, data } = useQuery<Data>(getData);
  return (
    <DataContext.Provider value={{ loading, error, data }}>
      {children}
    </DataContext.Provider>
  );
};
