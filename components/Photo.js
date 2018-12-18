import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import ViewPhoto from './viewphoto'




export default class Photo extends React.Component {
  state = {
    image: null,
    viewPhoto: false,
    selected: false

  };
  _mounted = false;

  componentDidMount() {
    this._mounted = true;
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  toggleSelection = () => {
   
      console.log("ur2",this.props.uri)
    this.setState(
      { selected: !this.state.selected },
      () => this.props.onSelectionToggle(this.props.uri,this.state.selected)
    );
  }

  
   

  
  render() {
    
    const { uri } = this.props;
   
    console.log('uri-image',uri)

      return (
   
        <TouchableOpacity
        key={this.props.key}
        style={styles.pictureWrapper}
        onPress={this.toggleSelection}
        activeOpacity={1}
      >
        <Image
          style={styles.picture}
          source={{ uri }}
        />
      </TouchableOpacity>
      
        );
    }
    
   
  };


const styles = StyleSheet.create({
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

});