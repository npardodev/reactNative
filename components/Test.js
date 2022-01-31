import { Button, Card, Paragraph, Title } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

import { Provider as PaperProvider } from "react-native-paper";
import React from "react";
import {theme} from "./../config/Theme.js";

export const Test = () => {
    return (
        <PaperProvider theme={theme}>
          <TopBar />
            <h1>Hola nico</h1>
          <MainScreen />
        </PaperProvider>
      );
}

export const MyComponent = () => (
    <Card>
      <Card.Title title="Card Title" subtitle="Card Subtitle" />
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );

