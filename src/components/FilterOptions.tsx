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
type SelectChangeHandler = (
  option: SingleValue<{
    value: string;
    label: string;
  }>
) => void;
type InputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => void;

export const FilterOptions: FC<Props> = ({ filterValue, setFilterValue }) => {
  const { data } = useContext(DataContext);
  const inputChangeHandler: InputChangeHandler = (event) => {
    setFilterValue((prev) => ({ ...prev, input: event.target.value }));
  };
  const selectChangeHandler: SelectChangeHandler = (option) => {
    if (option === null) {
      return;
    }
    setFilterValue((prev) => ({ ...prev, select: option.value }));
  };
  const options = data?.continents.map((continent) => ({
    value: continent.name,
    label: continent.name,
  }));
  return (
    <div className="flex flex-wrap ">
      <input
        className="w-52 h-[38px] mr-4 focus:outline-blue-500 border-[1px] rounded border-gray-300 placeholder:text-[#838383] p-2 hover:border-[#b3b3b3] sm:mb-0 mb-4"
        onChange={inputChangeHandler}
        value={filterValue.input}
        type="text"
        placeholder="Search by country name"
      />
      <Select
        className="w-52 "
        onChange={selectChangeHandler}
        options={options}
        placeholder="Select continent"
      />
    </div>
  );
};
