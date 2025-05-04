
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button, Image } from 'react-native-web';
import destinationsPictures from '../../constants/destinationsPictures';
import { useNavigation } from 'expo-router';
import { ImageBackground } from 'react-native';
import backGroundPics from '../../constants/backGroundPics';




const destinations =()=>{
  const navigation = useNavigation();


    return(
        

        <View style={styles.mainContainer}>
                   <View style={styles.container}>
                       <Text style={styles.textStyle}>Select</Text>
                       <Text style={styles.textHomeTitle}>Destinations</Text>
                   </View>
       
                   <View style={styles.container2} >
                        <View style={styles.container2Inner}>
                            <ImageBackground source={backGroundPics.destinationBackground} style={styles.destinationContainer}>

                              {/*This Block is for Japan*/}
                                <View style={styles.destinationContainerEach}>
                                    <View style={styles.countryPicContainer}>
                                        <Image 
                                          source={destinationsPictures.Japan} 
                                          style={{
                                            width:250,
                                            height:200,
                                            borderRadius:10,
                                          }} 
                                        />
                                    </View>

                                    <View style={styles.countryDescContainer}>
                                        <Text style={styles.destinationTextTitle}>Japan</Text>
                                        <Text style={styles.destinationTextDesc}>Japan is a breathtaking blend of ancient tradition and futuristic innovation, where serene temples, cherry blossoms, and timeless culture meet neon-lit cities and cutting-edge technology. It's a land of warm hospitality, exquisite cuisine, and endless discovery at every turn</Text>
                                    </View>

                                    <View style={styles.countryBookContainer}>
                                      <Button title='Book Now' onPress={()=>navigation.navigate('bookingScreenJapan')}/>
                                    </View>
                                </View>
                                
                                 {/*This Block is for South Korea*/}
                                 <View style={styles.destinationContainerEach}>
                                    <View style={styles.countryPicContainer}>
                                        <Image 
                                          source={destinationsPictures.SouthKorea} 
                                          style={{
                                            width:250,
                                            height:200,
                                            borderRadius:10,
                                          }} 
                                        />
                                    </View>

                                    <View style={styles.countryDescContainer}>
                                        <Text style={styles.destinationTextTitle}>South Korea</Text>
                                        <Text style={styles.destinationTextDesc}>South Korea welcomes you with a perfect blend of ultra-modern technology and deep-rooted tradition, visible from the sleek efficiency of its airports to the graceful warmth of its culture. The air buzzes with the energy of K-culture, while serene hanbok displays and gentle greetings hint at the country's timeless soul.</Text>
                                    </View>

                                    <View style={styles.countryBookContainer}>
                                      <Button title='Book Now' onPress={()=>navigation.navigate('bookingScreenSouthKorea')}/>
                                    </View>
                                </View>
                                
                                 {/*This Block is for China*/}
                                 <View style={styles.destinationContainerEach}>
                                    <View style={styles.countryPicContainer}>
                                        <Image 
                                          source={destinationsPictures.China} 
                                          style={{
                                            width:250,
                                            height:200,
                                            borderRadius:10,
                                          }} 
                                        />
                                    </View>

                                    <View style={styles.countryDescContainer}>
                                        <Text style={styles.destinationTextTitle}>China</Text>
                                        <Text style={styles.destinationTextDesc}>China unfolds an incredible journey from the ancient wonders of the Great Wall and the Forbidden City to the modern marvels of Shanghai’s skyline and high-speed trains. With its diverse landscapes, vibrant cities, and rich cultural heritage, China offers an experience that spans millennia of history and cutting-edge innovation.</Text>
                                    </View>

                                    <View style={styles.countryBookContainer}>
                                      <Button title='Book Now' onPress={()=>navigation.navigate('bookingScreenChina')}/>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                   </View>
               </View>
    );
}

export default destinations

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
    display:'flex',
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems:'center',
  },

  container2Inner: {
    display:'flex',
    flex: 1,
    backgroundColor:'grey',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems:'center',
    resizeMode:'cover'
  },

  destinationContainer: {
    display:'flex',
    flex: 3,
    flexDirection:'row',
    resizeMode:'cover',
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent: 'space-between',
  },

  destinationContainerEach: {
    display:'flex',
    flex: 1,
    flexDirection:'column',
    backgroundColor:'rgba(0, 0, 0, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems:'center',
    width: 300,
    height: 450,
    marginRight: 70,
    marginLeft: 70,
    borderRadius:10
    
  },

  countryPicContainer:{
    flex:3,
    justifyContent:'center',
    alignItems:'center',
  },

  countryDescContainer:{
    flex:2,
    alignItems:'center',
    marginLeft:10,
    marginRight:10,
  },

  countryBookContainer:{
    flex:1,
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center'
  },

  destinationDescriptions: {
    display:'flex',
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems:'center',
  },

  textDescContainer: {
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    marginLeft:50,
  },

  textStyle:{
    color:'white',
    fontFamily: 'Arial',
    fontSize: 30,
  },

  destinationTextDesc:{
    color:'white',
    fontFamily: 'Arial',
    fontSize: 12,
    textAlign:'center'

  },

  destinationTextTitle:{
    color:'white',
    fontFamily: 'Arial',
    fontSize: 40,
    fontWeight:'bold',
    marginBottom: 10,
  },

  textHomeTitle:{
    color:'white',
    fontFamily: 'Arial',
    fontSize: 40,
    fontWeight:'bold'
  },
  
  textDescTitle: {
    fontWeight: 'bold'
  },

  destinationPic:{
    width:100,
  }
});
