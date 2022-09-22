import React, { useRef } from "react";
import PropTypes from "prop-types";

export interface CheckboxProps {
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Re-usable Functional react component for Check Box
 * @description used where a generic checkbox with label is needed
 * @param {*} { label(checkbox label), name(name of input checkbox element), onChange(callback function to handle on click) }
 * @return {*} JSX
 */
function Checkbox({ label, name, onChange }: CheckboxProps) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="input-container">
      <div
        data-testid="checkbox-div"
        className="custom-checkbox"
        onClick={() => (null !== ref.current ? ref.current.click() : "")}
      >
        <input
          data-testid="checkbox"
          ref={ref}
          name={name}
          type="checkbox"
          onChange={onChange}
        />
        <span></span>
        <label>{label}</label>
      </div>
    </div>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
