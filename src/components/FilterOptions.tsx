import { FC, Dispatch, useContext } from "react";
import { ChangeEvent } from "react";
import { DataContext } from "../components/DataProvider";
import Select, { SingleValue } from "react-select";

interface Props {
  filterValue: {
    input: string;
    select: string;
  };
  setFilterValue: Dispatch<
    React.SetStateAction<{
      input: string;
      select: string;
    }>
  >;
}
export const FilterOptions: FC<Props> = ({ filterValue, setFilterValue }) => {
  const { data } = useContext(DataContext);
  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterValue((prev) => ({ ...prev, input: event.target.value }));
  };
  const selectChangeHandler = (
    option: SingleValue<{ value: string; label: string }>
  ) => {
    if (option === null) return;
    setFilterValue((prev) => ({ ...prev, select: option.value }));
  };
  const options = data?.continents.map((continent) => ({
    value: continent.name,
    label: continent.name,
  }));
  return (
    <div>
      <input
        onChange={inputChangeHandler}
        value={filterValue.input}
        type="text"
      />
      <Select onChange={selectChangeHandler} options={options} />
    </div>
  );
};
