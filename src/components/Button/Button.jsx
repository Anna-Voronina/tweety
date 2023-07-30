import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";

export const Button = ({ label, handleClick, version, disabled = false }) => {
  return (
    <StyledButton
      type="button"
      onClick={handleClick}
      version={version}
      disabled={disabled}
    >
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
  version: PropTypes.string,
};
