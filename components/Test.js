import { Button, Card, Paragraph, Title } from 'react-native-paper';
import { StyleSheet, Text, TopBar, View } from 'react-native';

import { Provider as PaperProvider } from "react-native-paper";
import React from "react";
import {theme} from "./../config/Theme.js";

export const Test = () => {
    return (
        <PaperProvider theme={theme}>
          <TopBar />
            <h1>Hola Nico, es una prueba</h1>
          <MainScreen />
        </PaperProvider>
      );
}
