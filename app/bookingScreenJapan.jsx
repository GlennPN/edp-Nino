import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';
import destinationsPictures from '../constants/destinationsPictures';
import { Image } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import backGroundPics from '../constants/backGroundPics';
import destinationsFlags from '../constants/destinationsFlags';




const bookingScreenJapan =()=>{
    const navigation = useNavigation();

  


    return(
        <View style={styles.maincontainer}>
           

            <View style={styles.container}>
                <View style={styles.goBackContainer}>
                  <Link style={styles.linkStyle} href='../(tabs)/destinations'>Go Back</Link>
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.textStyle}>Confirm</Text>
                    <Text style={styles.textHomeTitle}>Booking</Text>
                </View>
            </View>

            <ImageBackground source={backGroundPics.japanBackground} style={styles.container2}>
                <View style={styles.countryPicContainer}>
                    <Image 
                        source={destinationsPictures.Japan} 
                        style = {{
                          width:700,
                          height:400,
                          borderRadius:10,
                          borderStyle:'solid',
                          borderColor:'tomato',
                          borderWidth:2
                        }}
                    
                    />
                </View>
                
                <View style={styles.countryDescBookContainer}>
                  <View style={styles.countryDescContainer}>
                      <View style={styles.countryTitleFlagContainer}>
                        <View style = {styles.countryNameContainer}>
                          <Text style={styles.destinationTextTitle}>Japan</Text>
                        </View>
                        
                        <View style = {styles.countryFlagContainer}>
                          <Image 
                            source={destinationsFlags.japanFlag}
                            style={{
                              width:80,
                              height:50

                            }}
                          />
                        </View>
                      </View>
                      <Text style={styles.destinationTextDesc}>Japan is a breathtaking blend of ancient tradition and futuristic innovation, where serene temples, cherry blossoms, and timeless culture meet neon-lit cities and cutting-edge technology. It's a land of warm hospitality, exquisite cuisine, and endless discovery at every turn.</Text>
                  </View>
                  
                  <View style={styles.countryBookContainer}>
                      <Button 
                      title='Confirm Booking' 
                      onPress={()=> alert("Book Confirmed! Thank you for choosing Viado Airlines!")}
                      color='tomato'
                      />
                  </View>
                  </View>

            </ImageBackground>
        </View>
    );
}

export default bookingScreenJapan

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row'
  },

  goBackContainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleContainer:{
    flex: 9,
    alignItems:'center',
    justifyContent:'flex-start',
  },

  container2: {
    flex: 6,
    resizeMode:'cover',
    width:'100%',
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  countryPicContainer:{
    flex:7,
    justifyContent:'center',
    alignItems:'center'
  },

  countryDescBookContainer:{
    flex:4,
    alignItems:'center',
    justifyContent:'center',
    alignContent: 'center',
    marginLeft:10,
    marginRight:10,
    flexDirection: 'column',
    backgroundColor:'rgba(0, 0, 0, 0.8)',
    borderRadius:10
  },


  countryDescContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
    marginTop:20
  },

  countryTitleFlagContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
  },

  countryNameContainer:{
    flex:3,
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
  },

  countryFlagContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
  },


  countryBookContainer:{
    flex:1,
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center',
    marginTop: 10,
    marginBottom:30
  },

  textHomeTitle:{
    color:'white',
    fontFamily: 'Arial',
    fontSize: 40,
    fontWeight:'bold'
  },

  textStyle:{
    color:'white',
    fontFamily: 'Arial',
    fontSize: 30,
  },

  destinationTextDesc:{
    color:'white',
    fontFamily: 'Arial',
    fontSize: 20,
    textAlign:'center'
    
  },

  destinationTextTitle:{
    color:'white',
    fontFamily: 'Arial',
    fontSize: 40,
    fontWeight:'bold',
    marginBottom: 30,
    marginTop:25,
    marginRight:20
  },

  linkStyle:{
    paddingLeft:10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor: 'white',
    color:'black',
    fontFamily: 'Roboto',
    fontSize:20,
    fontWeight:'200',
    borderRadius:2
  },

  buttonStyle:{
    backgroundColor:'white',
    color:'white',
  }
  
});
