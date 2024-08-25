import {
  OptionProps,
  ControlProps,
  PlaceholderProps,
  CSSObjectWithLabel,
  DropdownIndicatorProps,
} from "react-select";

import { OptionType } from "./types";

const red = "#f6b4b1";
const grey = "#E7E6E8";
const black = "#2B212E";
const white = "#FFFFFF";
const purple = "#B99DC8";
const redShadow = "#FCE8E8";
const greyAction = "#DCDCDC";
const textColor = "#130817E5";
const purpleShadow = "#EEE6F1";
const greyDisableText = "#A19CA2";

const getBorderColor = (
  state: ControlProps<OptionType>,
  error?: boolean
): string => {
  if (error) return red;
  if (state.isFocused) return purple;
  if (state.isDisabled) return grey;
  return grey;
};

const getBoxShadow = (
  state: ControlProps<OptionType>,
  error?: boolean
): string => {
  let template = "0px 0px 0px 3px";
  if (error) return (template += ` ${redShadow}`);
  if (state.isFocused) return (template += ` ${purpleShadow}`);
  return "unset";
};

export const getSelectStyles = (error?: boolean) => ({
  control: (
    css: CSSObjectWithLabel,
    state: ControlProps<OptionType>
  ): CSSObjectWithLabel => {
    const iconColor = { color: state.isDisabled ? greyDisableText : black };
    return {
      ...css,
      background: white,
      cursor: "pointer",
      boxShadow: getBoxShadow(state, error),
      borderColor: getBorderColor(state, error),
      "&:hover": {
        borderColor: error ? red : purple,
        boxShadow: `0px 0px 0px 3px ${purpleShadow}`,
      },
      ".lucide-search": {
        path: iconColor,
        circle: iconColor,
      },
    };
  },
  option: (
    css: CSSObjectWithLabel,
    state: OptionProps<OptionType>
  ): CSSObjectWithLabel => ({
    ...css,
    color: black,
    cursor: "pointer",
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
    color: state.isDisabled ? greyDisableText : textColor,
  }),
  indicatorSeparator: (css: CSSObjectWithLabel) => ({
    ...css,
    display: "none",
  }),
  dropdownIndicator: (
    css: CSSObjectWithLabel,
    state: DropdownIndicatorProps<OptionType>
  ) => ({
    ...css,
    svg: {
      transform: `rotate(${state.selectProps.menuIsOpen ? "180deg" : 0})`,
    },
  }),
});
