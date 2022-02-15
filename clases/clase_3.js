import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

export const TestComponent = () => {
    return (
      <ScrollView>
        <View style={styles.myview}>
          <View>
            <Button onPress={()=> {}} title="Agregar"/>
          </View>
          <StatusBar style="auto"/>
        </View>
      </ScrollView>

    );
}

const styles = StyleSheet.create({

  myview:{
      /*
      padding:'30',
      borderBottomColor: 'black',
      borderBottomWidth: '1',
       */
  }
 
});