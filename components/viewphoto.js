import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import {MediaLibrary} from 'expo'
import { 
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';

import GalleryScreen from './GalleryScreen'



export default class ViewPhoto extends React.Component {

  state = {
    photoDelete: false
  }

  deletePhoto = async () => {
   await MediaLibrary.deleteAssetsAsync(this.props.photo)

   this.setState({photoDelete: !this.state.photoDelete})

   this.renderGallery()

  }
  ComponentWillUnmount() {
    this.state.photoDelete = false
  }

  renderGallery() {
    return <GalleryScreen  />;
  }  
 

    render() {
    const uri = this.props.uri
        return (           
          
          <View style={styles.container}>
          <View style={styles.navbar}>
          <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
            <MaterialIcons name="arrow-back" size={25} color="white" />
          </TouchableOpacity>
        </View>

            <Image
              style={styles.picture}
              source={{uri}}
              />

<View
      style={styles.bottomBar}>
      <TouchableOpacity 
    
      style={styles.bottomButton} >
        <Ionicons name='ios-share' size={30} color="white"/>
      </TouchableOpacity>
      <View style={{ flex: 0.4 }}>
        <TouchableOpacity
       
          style={{ alignSelf: 'center' ,paddingTop: 10}}
        >
          <Ionicons name="ios-information-circle-outline" size={30} color="white" />
        </TouchableOpacity>
      </View> 
      <TouchableOpacity style={styles.bottomButton}
      onPress={this.deletePhoto}
      >
        <View>
          <Ionicons name="ios-trash" size={30} color="white" />
        </View>
      </TouchableOpacity>
    </View>

                 </View>
        )
    }
} 


const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'black',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  button: {
    padding: 20,
  },
  picture: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
   },
   bottomBar: {
    backgroundColor: 'transparent',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    flex: 0.12,
    flexDirection: 'row',
    
  },
  bottomButton: {
    flex: 0.3, 
    height: 58, 
    justifyContent: 'center',
    alignItems: 'center',
  },

});