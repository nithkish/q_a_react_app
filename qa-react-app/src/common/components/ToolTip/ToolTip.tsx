import React from "react";

export interface ToolTipProps {
  label: string;
  text: string;
}

function ToolTip({ label, text }: ToolTipProps) {
  return (
    <h3>
      {label}
      <span className="tooltip">
        <img
          src={`${process.env.PUBLIC_URL}assets/images/info-24.png`}
          alt=""
        />
        <span data-testid="tool-tip-text" className="tooltip-content">{text}</span>
      </span>
    </h3>
  );
}

export default ToolTip;
