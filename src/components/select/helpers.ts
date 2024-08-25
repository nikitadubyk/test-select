import {
  OptionProps,
  ControlProps,
  PlaceholderProps,
  CSSObjectWithLabel,
  DropdownIndicatorProps,
} from "react-select";

import { OptionType } from "./types";

const red = "#E8433D";
const black = "#000000";
const white = "#FFFFFF";
const purple = "#800080";
const greyAction = "#DCDCDC";
const textColor = "#130817E5";
const greyDisable = "#8F8F8F";

const getBorderColor = (
  state: ControlProps<OptionType>,
  error?: boolean
): string => {
  if (error) return red;
  if (state.isFocused) return "#6E328C";
  if (state.isDisabled) return "#E6E6E6";
  return "#CCC";
};

const getBoxShadow = (
  state: ControlProps<OptionType>,
  error?: boolean
): string => {
  if (error) return red;
  if (state.isFocused) return `0 0 0 1px ${purple}`;
  return "unset";
};

export const getSelectStyles = (error?: boolean) => ({
  control: (
    css: CSSObjectWithLabel,
    state: ControlProps<OptionType>
  ): CSSObjectWithLabel => ({
    ...css,
    background: white,
    boxShadow: getBoxShadow(state, error),
    borderColor: getBorderColor(state, error),
    "&:hover": {
      borderColor: error ? red : purple,
    },
  }),
  option: (
    css: CSSObjectWithLabel,
    state: OptionProps<OptionType>
  ): CSSObjectWithLabel => ({
    ...css,
    color: black,
    backgroundColor: state.isSelected ? greyAction : white,
    "&:hover": {
      backgroundColor: greyAction,
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
    color: state.isDisabled ? greyDisable : textColor,
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
