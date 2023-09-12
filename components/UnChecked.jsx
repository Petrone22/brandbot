import { Check } from "lucide-react";
import { Minus } from "lucide-react";
const CheckedCard = () => {
  return (
    <td className="px-6 text-center">
      <span className="mx-auto">
        <div className="w-5 h-5 bg-card rounded-full flex items-center justify-center">
          <Minus color="gray" size={13} />
        </div>
      </span>
    </td>
  );
};

export default CheckedCard;
