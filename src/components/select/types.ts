import {
  GroupBase,
  MultiValue,
  ActionMeta,
  SingleValue,
  OptionProps,
  SelectComponentsConfig,
} from "react-select";

export interface OptionType extends Record<string, any> {
  value: any;
  label: string;
}

export type CustomOptionProps = OptionProps<
  OptionType,
  boolean,
  GroupBase<OptionType>
>;

export type SelectValue =
  | OptionType
  | MultiValue<OptionType>
  | SingleValue<OptionType>;

export interface SelectProps {
  label?: string;
  error?: boolean;
  isMulti?: boolean;
  value?: SelectValue;
  isDisabled?: boolean;
  placeholder?: string;
  options: OptionType[];
  allowCreate?: boolean;
  isSearchable?: boolean;
  customLabel?: JSX.Element;
  onChange: (value: SelectValue, actionMeta: ActionMeta<OptionType>) => void;
  components?: SelectComponentsConfig<
    OptionType,
    boolean,
    GroupBase<OptionType>
  >;
}
