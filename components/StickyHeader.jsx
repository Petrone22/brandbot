import React from "react";

const RowHeader = ({ title, icon }) => {
  return (
    <tr className="divide-white/10" style={{ borderTop: "none" }}>
      <th
        className="border-b border-white/10 text-md sticky top-[62px] z-10 py-3 pl-6 text-left font-semibold bg-background"
        scope="colgroup"
      >
        <div className="flex items-center gap-4">
          <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-emerald-700 ">
            {icon}
          </div>
          <h1>{title}</h1>
        </div>
      </th>
      <td className="border-b-2 border-white/10 px-6 py-5 Starter"></td>
      <td className="border-b-2 border-white/10 px-6 py-5 Entrepreneur"></td>
      <td className="border-b-2 border-white/10 px-6 py-5 Pro"></td>
    </tr>
  );
};

export default RowHeader;
