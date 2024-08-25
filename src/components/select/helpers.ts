import {
  OptionProps,
  ControlProps,
  PlaceholderProps,
  CSSObjectWithLabel,
  DropdownIndicatorProps,
} from "react-select";

import { OptionType } from "./types";

const getBorderColor = (
  state: ControlProps<OptionType>,
  error?: boolean
): string => {
  if (error) return "#E8433D";
  if (state.isFocused) return "#6E328C";
  if (state.isDisabled) return "#E6E6E6";
  return "#CCC";
};

const getBoxShadow = (
  state: ControlProps<OptionType>,
  error?: boolean
): string => {
  if (error) return "#E8433D";
  if (state.isFocused) return "0 0 0 1px #800080";
  return "unset";
};

export const getSelectStyles = (error?: boolean) => ({
  control: (
    css: CSSObjectWithLabel,
    state: ControlProps<OptionType>
  ): CSSObjectWithLabel => ({
    ...css,
    background: "#fff",
    boxShadow: getBoxShadow(state, error),
    borderColor: getBorderColor(state, error),
    "&:hover": {
      borderColor: error ? "#E8433D" : "#800080",
    },
  }),
  option: (
    css: CSSObjectWithLabel,
    state: OptionProps<OptionType>
  ): CSSObjectWithLabel => ({
    ...css,
    color: "#000",
    backgroundColor: state.isSelected ? "#DCDCDC" : "#FFF",
    "&:hover": {
      backgroundColor: "#DCDCDC",
    },
  }),
  placeholder: (
    css: CSSObjectWithLabel,
    state: PlaceholderProps<OptionType>
  ) => ({
    ...css,
    fontWeight: 500,
    fontSize: "15px",
    lineHeight: "22px",
    color: state.isDisabled ? "#8F8F8F" : "#130817E5",
  }),
  indicatorSeparator: (css: CSSObjectWithLabel) => ({
    ...css,
    display: "none",
  }),
  dropdownIndicator: (
    css: CSSObjectWithLabel,
    state: DropdownIndicatorProps<OptionType>
  ) => {
    const { menuIsOpen } = state.selectProps;

    return {
      ...css,
      svg: {
        transform: `rotate(${menuIsOpen ? "180deg" : 0})`,
      },
    };
  },
});
