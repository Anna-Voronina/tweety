const breakpoints = {
  tablet: `@media only screen and (min-width: 768px)`,
  desktop: `@media only screen and (min-width: 1280px)`,
};

export const selectStyles = {
  container: (styles) => ({
    ...styles,
    marginLeft: "18%",
    marginBottom: "30px",
    [breakpoints.tablet]: {
      marginLeft: "37%",
    },
    [breakpoints.desktop]: {
      marginLeft: "42%",
    },
  }),
  control: (styles) => ({
    ...styles,
    width: "180px",
    height: "35px",
    padding: "10px 20px",
    fontSize: "16px",
    color: "#000000",
    backgroundColor: "#e0aa3e",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  }),
  valueContainer: (styles) => ({ ...styles, padding: "0", margin: "0" }),
  indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
  dropdownIndicator: (styles, state) => ({
    ...styles,
    padding: "0",
    transition: "transform 250ms cubic-bezier(0.4, 0, 0.2, 1)",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    color: "#000000",
  }),
  singleValue: (styles) => ({
    ...styles,
    margin: "0",
    color: "#000000",
    textTransform: "uppercase",
    fontWeight: "700",
  }),
  input: (styles) => ({ ...styles, padding: "0", margin: "0" }),
  menu: (styles) => ({
    ...styles,
    top: "90%",
    width: "180px",
    height: "157px",
    borderRadius: "8px",
    background:
      "linear-gradient(94deg, rgba(249,242,149,1) 6%, rgba(224,170,62,1) 32%, rgba(247,239,138,1) 67%, rgba(184,138,68,1) 93%)",
    overflow: "hidden",
  }),
  menuList: (styles) => ({
    ...styles,
    width: "180px",
    height: "157px",
  }),
  option: (styles, state) => ({
    ...styles,
    width: "100%",
    fontSize: "18px",
    cursor: "pointer",
    color: state.isSelected ? "#006400" : "#000000",
    fontWeight: "700",
    backgroundColor: state.isSelected ? "#f7ef8a" : null,
    transition:
      "color 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)",
    ":hover": {
      color: "#006400",
      backgroundColor: "#f7ef8a",
    },
  }),
};
