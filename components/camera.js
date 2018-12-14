import { Constants, Camera, FileSystem, Permissions, } from 'expo';
import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Slider,
  Platform
} from 'react-native';
import GalleryScreen from './GalleryScreen';


import { 
  Ionicons,
  MaterialIcons,
  Foundation,
  MaterialCommunityIcons,
  Octicons
} from '@expo/vector-icons';

const landmarkSize = 2;

const flashModeOrder = {
  off: 'on',
  on: 'auto',
  auto: 'torch',
  torch: 'off',
};

const flashIcons = {
  off: 'flash-off',
  on: 'flash-on',
  auto: 'flash-auto',
  torch: 'highlight'
};

export default class CameraScreen extends React.Component {
    state = {
      flash: 'off',
      permissionsGranted: false,
      RollPermission: false
    }

    async componentDidMount() {

        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ permissionsGranted: status === 'granted' });

        // const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        // this.setState({RollPermission: status === 'granted'})

        
    
        // // FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos').catch(e => {
        // //   console.log(e, 'Directory exists');
        // });
      }

      toggleFacing = () => this.setState({ type: this.state.type === 'back' ? 'front' : 'back' });

      toggleFlash = () => this.setState({ flash: flashModeOrder[this.state.flash] });

      handleMountError = ({ message }) => console.error(message);


      renderNoPermissions = () => 
      <View style={styles.noPermissions}>
        <Text style={{ color: 'white' }}>
          Camera permissions not granted - cannot open camera preview.
        </Text>
      </View>
  
    renderTopBar = () => {
      <View
        style={styles.topBar}>
        <TouchableOpacity style={styles.toggleButton} onPress={this.toggleFacing}>
          <Ionicons name="ios-reverse-camera" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.toggleButton} onPress={this.toggleFlash}>
          <MaterialIcons name={flashIcons[this.state.flash]} size={32} color="white" />
        </TouchableOpacity>
        </View>

    }

    renderCamera = () =>
    (
      <View style={{ flex: 1 }}>
        <Camera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.camera}
          type={this.state.type}
          flashMode={this.state.flash}
          >
           <View
        style={styles.topBar}>
        <TouchableOpacity style={styles.toggleButton} onPress={this.toggleFacing}>
          <Ionicons name="ios-reverse-camera" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.toggleButton} onPress={this.toggleFlash}>
          <MaterialIcons name={flashIcons[this.state.flash]} size={32} color="white" />
        </TouchableOpacity>
        </View>



        </Camera>
      
      </View>
    );
    render() {
        const cameraScreenContent = this.state.permissionsGranted
          ? this.renderCamera()
          : this.renderNoPermissions();
    //    const content = this.state.showGallery ? this.renderGallery() : cameraScreenContent;
        return <View style={styles.container}>{cameraScreenContent}</View>;
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    camera: {
      flex: 1,
     // justifyContent: 'space-between',
      backgroundColor: 'transparent',
      flexDirection: 'row'
    },
    topBar: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingTop: Constants.statusBarHeight / 2,
    },

    toggleButton: {
        flex: 0.25,
        height: 40,
        marginHorizontal: 2,
        marginBottom: 10,
        marginTop: 20,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },

      noPermissions: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        padding: 10,
      },
    })

