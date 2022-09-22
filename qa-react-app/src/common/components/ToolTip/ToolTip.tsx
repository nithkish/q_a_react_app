import React from "react";
import PropTypes from "prop-types";

export interface ToolTipProps {
  label: string;
  text: string;
}

/**
 * Re-usable Functional react component for Tool Tip
 * @description used where a header with tool tip is required
 * label acts as the header label and text ,the content of tooltip
 * @param {*} { label, text }
 * @return {*} JSX 
 */

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

ToolTip.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ToolTip;
