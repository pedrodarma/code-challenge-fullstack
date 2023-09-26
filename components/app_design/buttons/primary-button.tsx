type Props = {
  text: string;
  isDisabled?: boolean;
  onTap?: () => void;
};

export function PrimaryButton({ text, isDisabled = false, onTap }: Props) {
  return (
    <div className="relative w-full">
      <div
        className={`bg-gray-900 text-white text-center font-bold uppercase text-sm px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 w-full ease-linear transition-all duration-150 
          ${isDisabled ? " cursor-wait opacity-40 " : " cursor-pointer "}`}
        onClick={e => {
          if (onTap !== undefined) {
            e.preventDefault();
            onTap();
          }
        }}>
        {isDisabled && (
          <i className="fas fa-circle-notch animate-spin text-white mx-auto text-1xl mr-2"></i>
        )}
        {text}
      </div>
    </div>
  );
}
