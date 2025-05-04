import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import backGroundPics from '../../constants/backGroundPics';
import { ImageBackground } from 'react-native';
import { Image } from 'react-native-web';
import profilePicture from '../../constants/profilePicture';
import { Button } from 'react-native-web';
import logoPic from '../../constants/logoPic';

const profile =()=>{
    return(
        <View style={styles.mainContainer}>
          <View style={styles.container}>
             <Text style={styles.textStyle}>Your</Text>
             <Text style={styles.textHomeTitle}>Profile</Text>
          </View>
        
           <ImageBackground source={backGroundPics.destinationBackground} style={styles.container2}>
              <View style={styles.logoContainer}>
                <Image 
                  source={profilePicture.myProfile}
                  style={{
                    width:250,
                    height:250,
                    borderRadius:'50%',
                    marginTop:20,
                    marginBottom:10,
                    borderStyle:'solid',
                    borderColor:'black',
                    borderWidth:3
                  }}
                />
              </View>
        
               <View style={styles.textDescContainer}>
                  <View style={styles.detailsContainer}>
                    <View style={styles.logoBusinessContainer}>
                      <Image 
                                          source={logoPic.airlineLogo}
                                          style={{
                                            width:80,
                                            height:80,
                                            borderRadius:'50%',
                                            marginTop:5,
                                            marginBottom:20,
                                            borderStyle:'solid',
                                            borderColor:'white',
                                            borderWidth:1
                                          }}
                      />
                    </View>
                   
                    <View style={styles.detailsTitleContainer}>
                      <Text style={styles.titleStyle}>DETAILS</Text>
                    </View>

                    <View style={styles.detailsDescContainer}>
                      <Text style={styles.descStyle}><Text style={styles.descInfoStyle}>First Name:  </Text>John Melvin</Text>
                      <Text style={styles.descStyle}><Text style={styles.descInfoStyle}>Middle Name:  </Text>Gapasin</Text>
                      <Text style={styles.descStyle}><Text style={styles.descInfoStyle}>Last Name:  </Text>Viado</Text>
                      <Text style={styles.descStyle}><Text style={styles.descInfoStyle}>Gender:  </Text>Male</Text>
                      <Text style={styles.descStyle}><Text style={styles.descInfoStyle}>Email:  </Text>viadonjg.421.stud@cdd.edu.ph</Text>
                      <Text style={styles.descStyle}><Text style={styles.descInfoStyle}>Contact Number:  </Text>09501932537</Text>
                      <Text style={styles.descStyle}><Text style={styles.descInfoStyle}>Address:  </Text>478 Malabago, Mangaldan, Pangasinan</Text>
                      <Text style={styles.descStyle}><Text style={styles.descInfoStyle}>Passport Number:  </Text>P1234567</Text>

                    </View>
                  </View>

                  <View style={styles.settingsContainer}>
                    <View style={styles.settingsTitleContainer}>
                      <Text style={styles.titleStyle}>SETTINGS</Text>
                    </View>

                    <View style={styles.settingsDescContainer}>
                     <Text style={styles.descInfoStyle}>Select Theme:</Text>
                      <View style={styles.themeButtons}>
                          <Button 
                          title='Dark Mode' 
                          onPress={()=> alert("Theme has changed to Dark Mode")}
                          />

                          <Button 
                          title='Light Mode' 
                          onPress={()=> alert("Theme has changed to Light Mode")}
                          />
                      </View>

                      <Text style={styles.descInfoStyle}>Flight Preferences:</Text>
                      <View style={styles.preferenceContainer}>
                        <Text style={styles.descInfoStyle}>Seat Preferences:<Text style={styles.descStyle}>(Window, Aisle, Extra Legroom)</Text></Text>
                        <Text style={styles.descInfoStyle}>Meal Preferences:<Text style={styles.descStyle}>(Vegetarian, Vegan, Kosher, etc.)</Text></Text>
                        <Text style={styles.descInfoStyle}>Class Preferences:<Text style={styles.descStyle}>(Economy, Business, First Class)</Text></Text>
                        <Text style={styles.descInfoStyle}>Airport Preferences:<Text style={styles.descStyle}>(Nearby airports, preferred hubs)</Text></Text>

                          <View style={styles.preferenceButton}>
                            <Button 
                            title='Change Preference' 
                            onPress={()=> alert("Change Preference Page is not Available")}
                            />
                          </View>
                          
                      </View>
                    </View>
                  </View>
               </View>
                        
            </ImageBackground>
        </View>
    );
}

export default profile

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
alignItems:'center',
flexDirection:'row'
},

logoContainer:{
flex:1,
justifyContent:'center',
alignContent:'center',
alignItems:'center'
},

textDescContainer: {
display:'flex',
flex:3,
justifyContent:'center',
flexDirection:'row',
alignContent:'center',
alignItems:'center',
marginLeft:50,
marginRight:50,
width:500,
height:450,
backgroundColor:'rgba(0, 0, 0, 0.8)',
borderRadius:10
},

detailsContainer:{
  flex:1,
  flexDirection:'column'
},

settingsContainer:{
  flex:1,
  flexDirection:'column'
},

logoBusinessContainer:{
  flex:1,
  alignContent:'center',
  alignItems:'center'
},

detailsTitleContainer:{
  flex:1,
  justifyContent:'flex-start',
  alignItems:'flex-start',
  alignContent: 'flex-start',
},

detailsDescContainer:{
  flex:9
},

settingsTitleContainer:{
  flex:1,
  justifyContent:'flex-start',
  alignItems:'flex-start',
  alignContent: 'flex-start',
},

settingsDescContainer:{
  flex:9
},

titleStyle:{
  fontSize:25,
  color:'white',
  fontFamily:'arial',
  fontWeight:'bold',
  marginLeft:20,
  marginBottom: 20
},

descStyle:{
  fontSize:15,
  color:'white',
  fontFamily:'arial',
  fontWeight:'200',
  marginLeft:5,
  marginBottom:10
},

descInfoStyle:{
  fontSize:18,
  color:'white',
  fontFamily:'arial',
  fontWeight:'bold',
  marginLeft:20,
  marginBottom:10
},

themeButtons:{
  flexDirection:'row',
  justifyContent:'space-between',
  marginLeft:100,
  marginRight:100,
  marginBottom:20
},

preferenceContainer:{
  flexDirection:'column',
  justifyContent:'flex-start',
  marginLeft:20,
  marginRight:10,
  marginBottom:10
},

preferenceButton:{
  flexDirection:'row',
  justifyContent:'center',
  alignContent:'center',
  alignItems:'center',
  marginLeft:100,
  marginRight:100,
  marginBottom:20
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

});
