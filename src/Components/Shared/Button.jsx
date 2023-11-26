/* eslint-disable react/prop-types */
const Button = ({
  home,
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
            relative
            disabled:opacity-70
            disabled:cursor-not-allowed
            rounded-lg
            hover:opacity-80
            transition
            px-4
            w-full
            ${
              outline
                ? "bg-white border-black text-black"
                : "bg-green-500 border-green-500 text-white"
            }
            ${
              small
                ? "text-sm py-1 font-light border-[1px]"
                : "text-md py-3 font-semibold border-2"
            }
            ${home ? "flex items-center" : ""}
          `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
                absolute
                left-4
                top-3
              "
        />
      )}
      {home}
      {label}
    </button>
  );
};

export default Button;
