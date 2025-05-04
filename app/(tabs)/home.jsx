import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import backGroundPics from '../../constants/backGroundPics';
import { ImageBackground } from 'react-native';
import logoPic from '../../constants/logoPic';
import { Image } from 'react-native-web';

const home =()=>{
    return(
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.textStyle}>Welcome to</Text>
                <Text style={styles.textHomeTitle}>Viado AirLines</Text>
            </View>

            <ImageBackground source={backGroundPics.destinationBackground} style={styles.container2}>
                <View>
                  <Image 
                    source={logoPic.airlineLogo}
                    style={{
                      width:250,
                      height:250,
                      borderRadius:'50%',
                      marginTop:20,
                      marginBottom:10,
                      borderStyle:'solid',
                      borderColor:'white',
                      borderWidth:3
                    }}
                  />
                </View>

                <View style={styles.textDescContainer}>
                    <Text style={styles.textStyle}>Here in <Text style={styles.textDescTitle}>Viado Airlines
                    </Text> we want you to enjoy travelling through many destinations in a affordable way!</Text>
                </View>
                
            </ImageBackground>
        </View>
    );
}

export default home

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
    },

  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
    flex: 6,
    resizeMode:'cover',
    width:'100%',
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems:'center'
  },

  logoContainer:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },

  textDescContainer: {
    display:'flex',
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    marginLeft:50,
    marginRight:50,
    marginTop:10,
    marginBottom:30,
    backgroundColor:'rgba(0, 0, 0, 0.8)',
    borderRadius:10
  },

  textStyle:{
    color:'white',
    fontFamily: 'Arial',
    fontSize: 30,
     textAlign:'center'
  },

  textHomeTitle:{
    color:'white',
    fontFamily: 'Arial',
    fontSize: 40,
    fontWeight:'bold'
  },
  
  textDescTitle: {
    fontWeight: 'bold'
  }
});
