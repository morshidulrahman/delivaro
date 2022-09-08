import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import { useEffect } from 'react'
import { urlFor } from '../../sanity'
import SafeAreaWrapper from "../configs/SafeAreaWrapper"
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import Dishrow from '../components/Dishrow'
import Basketicon from "../components/Backeticon"
import { useDispatch } from 'react-redux'
import { setRestaurant } from '../Redux/features/restaurantSlice'

const RestaurantScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const { params: {
        id, image, title, short_desc, rating, address, dishes, log, lat, genre
    }, } = useRoute()

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    useEffect(() => {
        dispatch(setRestaurant({
            id, image, title, short_desc, rating, address, dishes, log, lat, genre
        }))
    }, [dispatch])

    return (
        <>
            <Basketicon />
            <ScrollView>
                <SafeAreaWrapper>
                    <View className="relative">
                        <Image source={{
                            uri: urlFor(image).url()
                        }}
                            className="w-full h-60 p-4"
                            resizeMode='cover'
                        />
                        <TouchableOpacity
                            onPress={() => {
                                navigation.goBack()
                            }}
                            className="p-2 bg-gray-100 rounded-full absolute top-5 left-5">
                            <AntDesign name="arrowleft" size={20} color="#00CCBB" />
                        </TouchableOpacity>
                    </View>
                    <View className='mt-4 px-3'>
                        <Text className="font-bold text-3xl">{title}</Text>
                        <View className="flex-row space-x-2  items-center">
                            <View className="flex-row space-x-1 items-center">
                                <AntDesign name="star" size={19} color="green" style={{ opacity: 0.4 }} />
                                <Text className="text-gray-300 mt-1">
                                    <Text className="text-green-400 text-sm">{rating}</Text>. {genre}
                                </Text>
                            </View>
                            <View className="flex-row space-x-1 items-center">
                                <EvilIcons name="location" size={22} style={{ opacity: 0.4 }} />
                                <Text className="text-gray-400 text-sm">{address}</Text>
                            </View>
                        </View>
                        <Text className="mt-2 text-gray-500 mb-3">{short_desc}</Text>

                        <TouchableOpacity className="flex-row items-center space-x-2 mb-4">
                            <AntDesign name="questioncircleo" size={20} color="" />
                            <Text className="text-base pl-2 font-bold flex-1">Have a food allergy</Text>
                            <AntDesign name="right" size={21} color="#00CCBB" />
                        </TouchableOpacity>
                    </View>

                    <View className="bg-gray-100 pb-32">
                        <Text className="text-xl font-bold pt-4 pb-3 mb-4 px-4">Menu</Text>

                        {/* disehes */}
                        {
                            dishes.map((item) => (
                                <Dishrow
                                    key={item._id}
                                    id={item._id}
                                    dish={item.dish}
                                    short_description={item.short_description}
                                    price={item.price}
                                    image={item.image}
                                />
                            ))
                        }
                    </View>
                </SafeAreaWrapper>
            </ScrollView>
        </>
    )
}

export default RestaurantScreen