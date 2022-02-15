import * as React from 'react';

import {StyleSheet, View} from 'react-native';

import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import {useState} from 'react';

export const AddItem = (props) => {
  const {onChange, onAddItem, value} = props;

  const [text, setText] = useState(value);

  return (
    <View>
      <TextInput
        label="Item de una lista"
        value={text}
        onChangeText={onChange}
      />
      <Button icon="camera" mode="contained" onPress={onAddItem}>
        Press me</Button>
    </View>

  );
};

export default MyComponent;