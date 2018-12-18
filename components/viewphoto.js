import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import { 
  Ionicons,
  MaterialIcons,
  Foundation,
  Octicons
} from '@expo/vector-icons';

import GalleryScreen from './GalleryScreen'



export default class ViewPhoto extends React.Component {

  

  renderGallery() {
    return <GalleryScreen  />;
  }  
 
renderMoreOptions = () =>
    (
      <View style={styles.options}>
        <View style={styles.detectors}>
          <TouchableOpacity onPress={this.toggleBarcodeScanning}>
            <MaterialCommunityIcons name="barcode-scan" size={32} color={this.state.barcodeScanning ? "white" : "#858585" } />
          </TouchableOpacity>
        </View>

        <View style={styles.pictureSizeContainer}>
          <Text style={styles.pictureQualityLabel}>Picture quality</Text>
          <View style={styles.pictureSizeChooser}>
            <TouchableOpacity onPress={this.previousPictureSize} style={{ padding: 6 }}>
              <Ionicons name="md-arrow-dropleft" size={14} color="white" />
            </TouchableOpacity>
            <View style={styles.pictureSizeLabel}>
              <Text style={{color: 'white'}}>{this.state.pictureSize}</Text>
            </View>
            <TouchableOpacity onPress={this.nextPictureSize} style={{ padding: 6 }}>
              <Ionicons name="md-arrow-dropright" size={14} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View> 
    );
    render() {
    const {uri} = this.props
     console.log('uri-photo',uri)
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
        //  onPress={this.state.info && this.renderInfo()}
          style={{ alignSelf: 'center' ,paddingTop: 10}}
        >
          <Ionicons name="information-circle-outline" size={30} color="white" />
        </TouchableOpacity>
      </View> 
      <TouchableOpacity style={styles.bottomButton} >
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