import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filter/slice";

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

  const handleSelectChange = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <select aria-label="select" name="filter" onChange={handleSelectChange}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
