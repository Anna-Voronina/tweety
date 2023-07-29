import { useDispatch } from "react-redux";
import Select, { components } from "react-select";
import { setFilter } from "../../redux/filter/slice";
import { selectStyles } from "./FilterSelect.styled";

const options = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "follow",
    label: "Follow",
  },
  {
    value: "following",
    label: "Following",
  },
];

export const FilterSelect = () => {
  const dispatch = useDispatch();

  const handleSelectChange = ({ value }) => {
    dispatch(setFilter(value));
  };

  return (
    <Select
      name="filter"
      defaultValue={options[0]}
      options={options}
      onChange={handleSelectChange}
      styles={selectStyles}
    />
  );
};
