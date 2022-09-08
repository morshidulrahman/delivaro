import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import SafeAreaWrapper from '../configs/SafeAreaWrapper'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
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
                animation="slideInDown"
                source={require("../../assets/delivery.gif")}
                className="h-96 w-96 rounded-sm z-10"
            />
            <Animatable.Text animation="zoomInUp"
                className="text-white text-lg font-bold mt-10 mb-20" >
                waitng for resturant to accept your order
            </Animatable.Text>

            <Progress.Circle size={90} indeterminate={true} color="white" />

        </SafeAreaWrapper>
    )
}

export default Preparingscreen