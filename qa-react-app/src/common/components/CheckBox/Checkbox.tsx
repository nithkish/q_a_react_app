import React, { useRef } from "react";

export interface CheckboxProps{
  label:string;
  name:string;
  onChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox({ label, name, onChange }:CheckboxProps) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="input-container">
      <div data-testid="checkbox-div" className="custom-checkbox" onClick={() => (null !== ref.current)?ref.current.click():""}>
        <input data-testid="checkbox" ref={ref} name={name} type="checkbox" onChange={onChange} />
        <span></span>
        <label>{label}</label>
      </div>
    </div>
  );
}

export default Checkbox;
