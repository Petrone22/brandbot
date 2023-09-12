import { Check } from "lucide-react";
const Row = ({ header, td1, td2, td3 }) => {
  return (
    <>
      <tr className="divide-white/10">
        {header}
        {td1}
        {td2}
        {td3}
      </tr>
    </>
  );
};

export default Row;
