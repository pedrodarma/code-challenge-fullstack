import React, { KeyboardEvent } from "react";

type CallbackOnChange = (value: string) => void;
type CallbackOnSubmit = (value: string) => void;
type Props = {
  defaultValue: string;
  onChange: CallbackOnChange;
  onSubmit: CallbackOnSubmit;
  isDisabled?: boolean;
};

export function NameTextField({ defaultValue, isDisabled = false, onChange, onSubmit }: Props) {

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (defaultValue) {
        onSubmit(defaultValue);
      }
    }
  };

  return (
    <div className="relative w-full mb-3">
      <label className="block uppercase text-slate-600 text-xs font-bold mb-2">
        Name
      </label>
      <input
        type="text"
        disabled={isDisabled}
        autoFocus
        defaultValue={defaultValue}
        className={`${isDisabled ? "text-slate-400" : "text-slate-600"
        } border-0 px-3 py-3 placeholder-slate-300 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150`}
        placeholder={"Name"}
        onChange={e => {
          onChange(e.target.value);
        }}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
}
