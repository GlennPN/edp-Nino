import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-web';
import tw from 'twrnc';
import { Tabs } from 'expo-router';
import icons from '../constants/index/icons';
import React from 'react';


const TabIcon = ({icon,color,name,focused}) => {
    return(
        <View>
            <Image
                source={icon}
                resizeMode='contain'
                tintColor={color}
                style={tw `w-6 h-6`}
            />
        </View>
    );
}

const _layout=()=>{
    return(
        <>
            <Tabs>
                <Tabs.Screen 
                    name='home'
                    options={{
                        title:'Home',
                        headerShown: false,
                        tabBarActiveBackgroundColor: 'white',
                        tabBarActiveTintColor: 'black',
                        tabBarInactiveBackgroundColor : 'black',
                        tabBarInactiveTintColor : 'white',
                        tabBarIcon: ({color, focused}) => (
                            <TabIcon 
                                name='Home'
                                icon = {icons.home}
                                color={color}
                                focused={focused}
                            />
                        )
                    }}
                />

                <Tabs.Screen 
                    name='destinations'
                    options={{
                        title:'Destinations',
                        headerShown: false,
                        tabBarActiveBackgroundColor: 'white',
                        tabBarActiveTintColor: 'black',
                        tabBarInactiveBackgroundColor : 'black',
                        tabBarInactiveTintColor : 'white',
                        tabBarIcon: ({color, focused}) => (
                            <TabIcon 
                                name='Destinations'
                                icon = {icons.destinations}
                                color={color}
                                focused={focused}
                            />
                        )
                    }}
                />

                <Tabs.Screen 
                    name='profile'
                    options={{
                        title:'Profile',
                        headerShown: false,
                        tabBarActiveBackgroundColor: 'white',
                        tabBarActiveTintColor: 'black',
                        tabBarInactiveBackgroundColor : 'black',
                        tabBarInactiveTintColor : 'white',
                        tabBarIcon: ({color, focused}) => (
                            <TabIcon 
                                name='Profile'
                                icon = {icons.profile}
                                color={color}
                                focused={focused}
                            />
                        )
                    }}
                />
            </Tabs>
        </>
    );
}

export default _layout;