import { useDispatch } from "react-redux";
import Select from "react-select";
import PropTypes from "prop-types";
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

export const FilterSelect = ({ setVisibleCards }) => {
  const dispatch = useDispatch();

  const handleSelectChange = ({ value }) => {
    dispatch(setFilter(value));
    setVisibleCards(3);
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

FilterSelect.propTypes = {
  setVisibleCards: PropTypes.func,
};
