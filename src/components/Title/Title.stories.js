import React from "react";
import { Story, Meta } from "@storybook/addon-docs/blocks";
import Title from "./Title";

export default {
  title: "Title",
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: "Example title",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  children: "Example title",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "Example title",
};
