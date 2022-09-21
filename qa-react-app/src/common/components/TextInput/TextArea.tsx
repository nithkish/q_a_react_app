import React from "react";

export interface TextAreaProps {
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

function TextArea({ label, name, onChange, value }: TextAreaProps) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <textarea data-testid="text-area" name={name} onChange={onChange} value={value}></textarea>
    </div>
  );
}

export default TextArea;
