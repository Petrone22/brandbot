import { Check } from "lucide-react";

const CheckedCard = () => {
  return (
    <td className="px-6 text-center">
      <span className="mx-auto">
        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
          <Check color="black" size={13} />
        </div>
      </span>
    </td>
  );
};

export default CheckedCard;
