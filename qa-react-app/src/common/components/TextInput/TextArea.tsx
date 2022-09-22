import React from "react";
import PropTypes from "prop-types";

export interface TextAreaProps {
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

/**
 * Re-usable Functional react component for Text Area
 * @description used where a text area is needed in a form
 * @param {*} { label, name, onChange, value }
 * @return {*} JSX 
 */

function TextArea({ label, name, onChange, value }: TextAreaProps) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <textarea data-testid="text-area" name={name} onChange={onChange} value={value}></textarea>
    </div>
  );
}

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};


export default TextArea;
