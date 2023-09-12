import React from "react";

const RowHeader = ({ title }) => {
  return (
    <th
      className="text-white/95 flex items-center px-6 py-5 text-left text-[13px] font-normal"
      scope="row"
    >
      <span>{title}</span>
    </th>
  );
};

export default RowHeader;
