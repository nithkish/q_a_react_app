import React from "react";
import { CheckboxProps } from "../CheckBox/Checkbox";
import PropTypes from "prop-types";

export interface CommonProps extends CheckboxProps {
  value: string;
}

/**
 * Re-usable Functional react component for Form Input
 * @description used where a text input is needed in a form
 * @param {*} { label, name, onChange, value }
 * @return {*} JSX 
 */

function FormInput({ label, name, onChange, value }: CommonProps) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        data-testid="form-input"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
