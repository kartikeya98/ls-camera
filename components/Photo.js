import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ViewPhoto from './viewphoto'



export default class Photo extends React.Component {
  state = {
    image: null,
    viewPhoto: false,

  };
  _mounted = false;

  componentDidMount() {
    this._mounted = true;
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  

  renderPhoto = () => {
    <View style={styles.container}>

<View style={styles.navbar}>
          <TouchableOpacity style={styles.button} onPress={this.toggleViwPhoto}>
            <MaterialIcons name="arrow-back" size={25} color="white" />
          </TouchableOpacity>
        </View>
     </View>

  }

  
  render() {
    console.log('view',this.state.viewPhoto)
    const { uri } = this.props;
    

      return (
   
        <TouchableOpacity
        key={this.props.key}
        style={styles.pictureWrapper}
        onPress={}
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