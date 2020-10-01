/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';


import {NativeModules} from 'react-native';
const {ToastModule, Torch} = NativeModules;

const App = () => {
  const showToast = () => {
    ToastModule.showToast('This is a native toast!!');
  }

  const getTorchStatus = () => {
    Torch.getTorchStatus(res => {
      console.log(res)
    })
  }

  const turnOn = () => {
    Torch.turnOn()
  }

  const turnOff = () => {
    Torch.turnOff()
  }
  
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <TouchableOpacity onPress={showToast}> 
      <Text>ToucheME</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={getTorchStatus}> 
      <Text>Torch</Text>
      </TouchableOpacity>      
      <TouchableOpacity onPress={turnOn}> 
      <Text>On</Text>
      </TouchableOpacity>      
      <TouchableOpacity onPress={turnOff}> 
      <Text>Off</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
