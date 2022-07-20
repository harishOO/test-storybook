import { Meta, Story } from '@storybook/angular';

import { action } from '@storybook/addon-actions';

import { HeadingComponent } from './heading.component';

export default {
  component: HeadingComponent,
  title: 'Report Heading',
  excludeStories: /.*Data$/,
} as Meta;

const Template: Story = args => ({
  props: {
    ...args
  },
});

export const Headers = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Headers.args = {
  heading: 'Customize Your Report',
};

export const Sub = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Sub.args = {
    Sub: 'Select the components to include and/or exclude in your report',
};

