import React from "react";

export const renderTruncatedText = (value, maxLength = 10) => {
  const str = String(value || "");
  return str.length > maxLength ? (
    <span title={str}>{str.slice(0, maxLength)}...</span>
  ) : (
    <span>{str}</span>
  );
};
