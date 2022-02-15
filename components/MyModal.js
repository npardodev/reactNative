import * as React from 'react';

import { Button, Modal, Portal, Provider, Text } from 'react-native-paper';

import {useState} from 'react';

export const MyModal = () => {
  const [visible, setVisible] = useState(false);
  const [itemSelected, setItemSelected] =useState('');

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Esta seguro que desea agregar a la lista?</Text>
          
        </Modal>
      </Portal>
      <Button style={{marginTop: 30}} onPress={showModal}>
        Show
      </Button>
    </Provider>
  );
};



export const MyModalAceptControll = (props) => {
  const {actionYes, actionNo} = props;
  
  return (
    <View>
      <Button style={{marginTop: 30}} onPress={showModal}>
        Si
      </Button>
      <Button style={{marginTop: 30}} onPress={showModal}>
        No
      </Button>
    </View>
    
  );
};