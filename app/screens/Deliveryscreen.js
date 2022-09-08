import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import SafeAreaWrapper from '../configs/SafeAreaWrapper'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import { selectRestaurant } from '../Redux/features/restaurantSlice';
import { useSelector } from 'react-redux';
import MapView, { Marker } from "react-native-maps";
const Deliveryscreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    return (

        <SafeAreaWrapper className=" bg-[#00ccbb] flex-1 ">
            <View className="mt-12 px-5 flex-row justify-between">
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Home")
                    }}
                >
                    <AntDesign name="closecircleo" size={30} color="white" />
                </TouchableOpacity>
                <Text className="text-white text-base capitalize ">order info</Text>
            </View>

            <View className='mx-5 rounded-md bg-white shadow-sm mt-10 p-4 z-10'>

                <Text className="text-gray-400 text-base mb-1 pl-3">Entended arival</Text>
                <View className="flex-row justify-between relative mb-2">
                    <Text className="text-3xl font-[900]"> 45-50 Minutes</Text>
                    <Image
                        source={require("../../assets/giphy.webp")}
                        className="h-20 w-20 absolute -top-5 right-0 "

                    />
                </View>
                <View className="pl-3 mb-2">
                    <Progress.Bar progress={0.5} width={200} color="#00ccbb" indeterminate={true} />
                </View>
                <Text className="text-gray-400 text-base pl-3 ">
                    Your order at <Text className="font-bold text-gray-600">{restaurant.title} </Text>is being prepared
                </Text>
            </View>
            <MapView
                initialRegion={{
                    latitude: 28.707529,
                    longitude: 77.208504,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
                className="flex-1 -mt-10 z-0"
                mapType="mutedStandard"
            >
                <Marker
                    coordinate={{
                        latitude: 28.707529,
                        longitude: 77.208504,
                    }}
                    title={restaurant.title}
                    description={restaurant.short_desc}
                    indentifier="origin"
                    pinColor="#00ccbb"
                />
            </MapView>

        </SafeAreaWrapper>

    )
}

export default Deliveryscreen