import {StoryFn} from "@storybook/react";
import React from "react";
import {BrowserRouter} from "react-router-dom";

export const RouteDecorator = () => (StoryComponent: StoryFn) => (
    <BrowserRouter>
        <StoryComponent/>
    </BrowserRouter>
);
