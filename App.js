import React from 'react';
import {View , StatusBar} from 'react-native'
import CameraScreen from './components/camera';
import { Constants } from 'expo';
export default class App extends React.Component {
 

  
render() {
  
  return (
            <View style={{flex: 1}}>
            <View style={{height:Constants.statusBarHeight}}>
            <StatusBar translucent />
            </View>
          <CameraScreen />
        </View>
      

  )
}

}