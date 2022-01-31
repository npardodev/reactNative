import { DefaultTheme, configureFonts } from "react-native-paper";

import React from "react";
import customFonts from "./Fonts";

export const theme = {
    ...DefaultTheme,
    fonts: configureFonts(customFonts),
    roundness: 30,
    colors: {
        ...DefaultTheme.colors,
        primary: "#4169E1",
        accent: "#f1c40f",
    },
};