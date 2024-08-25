import type { Preview } from "@storybook/react";

import { GlobalStyles } from "../src/styles";

const storyDecorator = (story) => (
  <>
    <GlobalStyles />
    {story()}
  </>
);

export const decorators = [storyDecorator];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
