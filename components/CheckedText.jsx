const CheckedText = ({ title }) => {
  return (
    <td className="px-6 text-center">
      <span className="mx-auto text-[13px] text-white/95 flex items-center gap-3">
        {title}
      </span>
    </td>
  );
};

export default CheckedText;
