
import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import {   MediaLibrary } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';
import Photo from './Photo';
import ViewPhoto from './viewphoto';


export default class GalleryScreen extends React.Component {
  state = {
    images: [],
    photos: [],
    viewPhoto: false,
    photo: undefined,
    
  };
    
  componentDidMount = async () => {
   
    let album = await MediaLibrary.getAlbumAsync('lsCamera')
    let options = {album: album.id}
    let photos = await MediaLibrary.getAssetsAsync(options)
    
    this.setState({ photos: photos.assets });
    

  };
  toggleView = () => this.setState({ viewPhoto: !this.state.viewPhoto });


    renderGallery = () => (
      <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
          <MaterialIcons name="arrow-back" size={25} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView contentComponentStyle={{ flex: 1 }}>
        <View style={styles.pictures}>
          {this.state.photos.map( (photo) => this.renderPhoto(photo))}
        </View>
      </ScrollView>
    </View>
    )

    toggleSelection = (uri) => {
   

      console.log("ur2",uri)


    this.setState(
      { viewPhoto: !this.state.viewPhoto,photo: uri },
    );

  
    
   
  }

  renderViewPhoto = (uri) => {

    console.log('uri',uri)

    return <ViewPhoto uri={uri} onPress={this.toggleView.bind(this)} 
     />
    
  };

  renderPhoto = photo => {
      const uri = photo.uri;
      console.log('uri-image',uri)

      

      return (
    <TouchableOpacity
    key={photo.fileName}
    style={styles.pictureWrapper}
    onPress={() => this.toggleSelection(photo.uri)}
    activeOpacity={1}
  >
    <Image
      style={styles.picture}
      source={ {uri} }
    />
  </TouchableOpacity>
  
      )
  }
  

  render() {
    console.log('photo',this.state.photo)
    const content = this.state.viewPhoto ? this.renderViewPhoto(this.state.photo) : this.renderGallery()
    return <View style={styles.container}>{content}</View>;
     
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  picture: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
   },
   pictureWrapper: {
    width: 110,
    height: 110,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 5,
  },
  button: {
    padding: 20,
  },
  whiteText: {
    color: 'white',
  }
});