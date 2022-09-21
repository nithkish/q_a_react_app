import React from "react";
import { CheckboxProps } from "../CheckBox/Checkbox";

export interface CommonProps extends CheckboxProps {
  value: string;
}

function FormInput({ label, name, onChange, value }: CommonProps) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input data-testid="form-input" type="text" name={name} value={value} onChange={onChange} />
    </div>
  );
}

export default FormInput;
