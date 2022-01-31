import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import SelectObjectScreen from './SelectObjectScreen';
import QrscreenContainer from './Qrscreen/QrscreenContainer';

const Stack = createNativeStackNavigator();

const ScreenNavigationContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SelectObjects"  screenOptions={{headerShown:false}}>
                <Stack.Screen name="SelectObjects" component={SelectObjectScreen} />
                <Stack.Screen name="QRScreen" component={QrscreenContainer} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ScreenNavigationContainer;
