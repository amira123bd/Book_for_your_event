import React from "react";
import Select, { GroupBase, OptionProps, StylesConfig } from "react-select";

interface AutocompleteProps {
  label: string;
  field: any;
  options: [{ value: any; label: string }];
}
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Autocomplete: React.FC<AutocompleteProps> = ({ label, field }) => {
  const textColor = (
    state: OptionProps<
      {
        value: string;
        label: string;
      },
      false,
      GroupBase<{
        value: string;
        label: string;
      }>
    >
  ) => {
    if (state.isSelected) return "gray";
    return state.isFocused ? "red" : "black";
  };
  const styles:
    | StylesConfig<
        {
          value: string;
          label: string;
        },
        false,
        GroupBase<{
          value: string;
          label: string;
        }>
      >
    | undefined = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px solid black",
      color: textColor(state),
      backgroundColor: state.isFocused ? "black" : "white",
      fontSize: 16,
      padding: 20,
    }),
    container: () => ({
      border: "1px solid black",
      maxWidth: 360,
    }),

    dropdownIndicator: () => ({
      color: "#970000",
    }),
    control: () => ({
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingLeft: 12,
      maxWidth: 360,
      alignItems: "center",
    }),
    placeholder: () => ({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }),
    menu: () => ({
      backgroundColor: "black",
    }),

    input: () => ({
      display: "flex",
      flexDirection: "row",
    }),
    valueContainer: () => ({
      //   backgroundColor:'black',
      display: "flex",
      fontSize: 16,
      height: 50,
      width: "100%",
    }),
    singleValue: () => ({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "10",
    }),
  };
  return (
    <div className="flex flex-col ">
      <label htmlFor="university" className="text-2xl mb-2 shadow-sm">
        {label}
      </label>
      <Select options={options} styles={styles} {...field}  />
    </div>
  );
};
export default Autocomplete;
