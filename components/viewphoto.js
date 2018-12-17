import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default class ViewPhoto extends React.Component {
    render() {
        return (
            <View style={styles.container}>

            <View style={styles.navbar}>
                      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
                        <MaterialIcons name="arrow-back" size={25} color="white" />
                      </TouchableOpacity>
                    </View>
                 </View>
        )
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
  button: {
    padding: 20,
  },

});