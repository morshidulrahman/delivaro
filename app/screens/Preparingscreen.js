import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import SafeAreaWrapper from '../configs/SafeAreaWrapper'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const Preparingscreen = () => {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("delivery")
        }, 3000)
    })
    return (
        <SafeAreaWrapper className="flex-1 items-center justify-center bg-[#00ccbb]">
            <Animatable.Image
                source={require("../../assets/delivery.gif")}
                className="h-96 w-96 rounded-sm z-10"
            />
            <Animatable.Text className="text-white text-lg font-bold mt-10 mb-5" >
                waitng for resturant to accept your order
            </Animatable.Text>
        </SafeAreaWrapper>
    )
}

export default Preparingscreen