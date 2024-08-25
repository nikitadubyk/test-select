import { useMemo } from "react";
import CreatableSelect from "react-select/creatable";
import ReactSelect, {
  ControlProps,
  components as defaultComponents,
} from "react-select";

import * as Styles from "./styles";
import { getSelectStyles } from "./helpers";
import { SelectProps, OptionType } from "./types";

export const Control = ({ children, ...props }: ControlProps<OptionType>) => (
  <defaultComponents.Control {...props}>
    {props.selectProps.isSearchable && <Styles.IconSearch />}
    {children}
  </defaultComponents.Control>
);

export const Select = ({
  value,
  error,
  label,
  options,
  isMulti,
  onChange,
  components,
  isDisabled,
  customLabel,
  allowCreate,
  isSearchable,
  placeholder = "Select an option...",
}: SelectProps) => {
  const SelectComponent = allowCreate ? CreatableSelect : ReactSelect;

  const styles = useMemo(() => getSelectStyles(error), [error]);

  return (
    <Styles.Container>
      {customLabel}
      {label && !customLabel && <Styles.Label>{label}</Styles.Label>}
      <SelectComponent
        isClearable
        value={value}
        styles={styles}
        options={options}
        isMulti={isMulti}
        onChange={onChange}
        isDisabled={isDisabled}
        placeholder={placeholder}
        isSearchable={isSearchable}
        components={{
          Control,
          ...components,
        }}
      />
    </Styles.Container>
  );
};
