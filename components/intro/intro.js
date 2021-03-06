import { ActivityIndicator, Colors } from 'react-native-paper';
import { Button, Card, Paragraph, Title } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { introStyles } from './introStyles.js';

const styles = introStyles;

export const Intro = ()=> {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Iniciando ! </Title>
      <ActivityIndicator animating={true} color={Colors.blue800} />
        <StatusBar style="auto" />
    </View>
  );
}