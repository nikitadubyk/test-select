import { useState } from "react";
import styled from "styled-components";
import { components } from "react-select";
import type { Meta, StoryObj } from "@storybook/react";

import { Select } from ".";
import { CustomOptionProps, SelectValue } from "./types";

type StoryMeta = Meta<typeof Select>;

const Container = styled.div`
  gap: 40px;
  width: 100%;
  display: grid;
  max-width: 840px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 400px));
`;

const CustomContainer = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
`;

const CustomMultiImage = styled.img`
  width: 16px;
  height: 16px;
  object-fit: cover;
  border-radius: 50%;
`;

const CustomOptionImage = styled.img`
  width: 48px;
  height: 48px;
`;

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
];

const customOptions = [
  {
    subTitle: 559,
    value: "Бефстроганов",
    label: "Бефстроганов",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
  },
  {
    subTitle: 409,
    value: "Сырная",
    label: "Сырная",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
  },
  {
    subTitle: 499,
    value: "Ветчина и сыр",
    label: "Ветчина и сыр",
    imageUrl:
      "https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif",
  },
];

const CustomOption = (props: CustomOptionProps) => (
  <components.Option {...props}>
    <CustomContainer>
      <CustomOptionImage src={props.data.imageUrl} alt="Пицца" />
      <p>{props.data.label}</p>
      <p>{props.data.subTitle}</p>
    </CustomContainer>
  </components.Option>
);

const CustomMultiValue = (props: any) => (
  <components.MultiValue {...props}>
    <CustomContainer>
      <CustomMultiImage src={props.data.imageUrl} alt="Пицца" />
      <p>{props.data.label}</p>
      <p>{props.data.subTitle}</p>
    </CustomContainer>
  </components.MultiValue>
);

const Template: StoryMeta["render"] = (args) => {
  const [selectValue, setSelectValue] = useState<SelectValue>();

  return (
    <Container>
      <Select
        {...args}
        allowCreate
        isSearchable
        options={options}
        value={selectValue}
        label="Single select"
        placeholder="Select an option..."
      />

      <Select
        {...args}
        isMulti
        allowCreate
        isSearchable
        options={options}
        value={selectValue}
        label="Multi select"
        placeholder="Select or create options..."
      />

      <Select
        {...args}
        error
        isSearchable
        options={options}
        value={selectValue}
        label="Select with error"
        placeholder="Select or create options..."
      />

      <Select
        {...args}
        isDisabled
        isSearchable
        label="Disabled"
        options={options}
        value={selectValue}
        placeholder="Select or create options..."
      />

      <Select
        {...args}
        isSearchable
        options={options}
        value={selectValue}
        customLabel={
          <div>
            <h4>New custom label</h4>
            <p>with subtitle</p>
          </div>
        }
      />

      <Select
        {...args}
        isMulti
        isSearchable
        value={selectValue}
        options={customOptions}
        label="With custom option and multi value"
        components={{ Option: CustomOption, MultiValue: CustomMultiValue }}
      />
    </Container>
  );
};

const meta: StoryMeta = {
  render: Template,
  component: Select,
  argTypes: {
    onChange: { action: "Change" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {};
