import React from "react";
import {action} from "@storybook/addon-actions";

export default{
    title : "Test"
};

export const test = () =>(
    <textarea onClick={action("clicked")}>Aisco test textarea in storybook</textarea>
);
