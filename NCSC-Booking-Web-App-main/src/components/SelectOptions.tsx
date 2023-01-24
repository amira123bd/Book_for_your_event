import React, { useState } from "react";

interface SelectOptionsProps {
  values: any[];
  currentValue: any;
  setGlobalState: any;
}

const SelectOptions: React.FC<SelectOptionsProps> = ({
  currentValue,
  values,
  setGlobalState,
}) => {
  const onClick = (value: any) => {
    if (value !== currentValue) setGlobalState(value);
  };

  return (
    <div className="flex flex-row w-[300px] justify-between">
      {values.map((v) => (
        <Option
          selected={currentValue === v}
          onClick={() => onClick(v)}
          label={v}
          key={v}
        />
      ))}
    </div>
  );
};

interface OptionProps {
  selected: boolean;
  onClick: (v: any) => void;
  label:string
}
const Option: React.FC<OptionProps> = ({ selected, onClick,label }) => {
  const selectedStyle = "bg-brand rounded-full h-16 w-16  ";
  const unselectedStyle =
    "h-16 w-16 bg-white rounded-full border-[1px] border-black border-solid  ";
  return (
    <div className="flex flex-col items-center">
      <p className="font-bold text-2xl">{label}</p>
    <button
      className={selected ? selectedStyle : unselectedStyle}
      onClick={onClick}
    />
</div>
  );
};
export default SelectOptions;
