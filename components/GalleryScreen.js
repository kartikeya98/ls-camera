
import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import {   MediaLibrary } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';
import Photo from './Photo';


export default class GalleryScreen extends React.Component {
  state = {
    images: {},
    photos: [],
    
  };
    
  componentDidMount = async () => {
   
    let album = await MediaLibrary.getAlbumAsync('lsCamera')
    let options = {album: album.id}
    let photos = await MediaLibrary.getAssetsAsync(options)
  

    this.setState({ photos: photos.assets });
  };
  renderPhoto = photo => 
  
    <Photo
      key={photo.fileName}
      uri={photo.uri}
      
    />;

  render() {
      return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
            <MaterialIcons name="arrow-back" size={25} color="white" />
          </TouchableOpacity>
        </View>
        <ScrollView contentComponentStyle={{ flex: 1 }}>
          <View style={styles.pictures}>
            {this.state.photos.map( (photo) => this.renderPhoto(photo,key = photo.fileName))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  pictures: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  button: {
    padding: 20,
  },
  whiteText: {
    color: 'white',
  }
});