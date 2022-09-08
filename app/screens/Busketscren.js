import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import SafeAreaWrapper from '../configs/SafeAreaWrapper'
import { selectRestaurant } from "../Redux/features/restaurantSlice"
import { useDispatch, useSelector } from 'react-redux'
import { removebusket, selectedItems, baskettotal } from '../Redux/features/basketSlice'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { AntDesign, Zocial } from '@expo/vector-icons';
import { urlFor } from '../../sanity'
import Currency from 'react-currency-formatter';
const Busketscren = () => {
    const items = useSelector(selectedItems)
    const restaurants = useSelector(selectRestaurant)
    const dispatch = useDispatch()
    const baskettoals = useSelector(baskettotal)
    const navigation = useNavigation()
    const [goupitemsbasket, setgroupitemsbasket] = useState(false)

    useEffect(() => {
        const groupitems = items.reduce((result, item) => {
            (result[item.id] = result[item.id] || []).push(item)
            return result
        }, {})
        setgroupitemsbasket(groupitems)
    }, [items])
    return (
        <SafeAreaWrapper>
            <View className="bg-white flex-1">
                <View className="bg-gray-100 flex-1">
                    <View className="bg-white border-b p-4 border-b-[#00ccbb]">
                        <Text className="text-lg font-bold text-center">Basket</Text>
                        <Text className="text-center text-gray-400">{restaurants.title}</Text>
                        <TouchableOpacity className="absolute top-6 right-5" onPress={() => {
                            navigation.goBack()
                        }}>
                            <AntDesign name="closecircle" size={32} color="#00ccbb" className="p-2 rounded-full" />
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row bg-white my-5 py-3 px-4 space-x-3 items-center">
                        <Image
                            className="h-10 w-10 rounded-full p-2 bg-gray-200"
                            source={require("../assets/delivery.png")}
                        />
                        <Text className="text-bold flex-1 text-base text-gray-500">Delivery in 45-50 min</Text>
                        <TouchableOpacity>
                            <Text className="text-[#00ccbb] capitalize text-lg">change</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView className=" bg-white divide-y divide-gray-200 h-[600px]">
                        {Object.entries(goupitemsbasket).map(([key, item]) => (
                            <View key={key}>
                                <View className="flex-row space-x-4 items-center px-4 py-4">
                                    <Text className="text-[#00ccbb] text-lg">{item.length}x</Text>
                                    <Image source={{
                                        uri: urlFor(item[0]?.image).url()
                                    }}
                                        className="h-14 w-14 rounded-full"
                                    />
                                    <Text className="flex-1 font-bold text-gray-500 text-base">{item[0].dish}</Text>
                                    <TouchableOpacity onPress={() => {
                                        dispatch(removebusket({ id: key }))
                                    }}>
                                        <Text className="text-[#00ccbb] capitalize text-base">remove</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </ScrollView>

                    <View className="my-5 bg-white px-4 py-5">
                        <View className="flex-row justify-between mb-4">
                            <Text className="text-gray-400 text-base">Subtotal</Text>
                            <Text className="text-gray-400 text-base">
                                <Currency quantity={baskettoals} currency="GBP" />
                            </Text>
                        </View>

                        <View className="flex-row justify-between mb-4">
                            <Text className="text-gray-400 text-base">Delivery Fee</Text>
                            <Text className="text-gray-400 text-base">
                                <Currency quantity={5.9} currency="GBP" />
                            </Text>
                        </View>

                        <View className="flex-row justify-between mb-4">
                            <Text className="text-gray-500 text-base font-bold">Total</Text>
                            <Text className="text-gray-500 text-base font-bold">
                                <Currency quantity={baskettoals + 5.9} currency="GBP" />
                            </Text>
                        </View>
                        <TouchableOpacity className="bg-[#00ccbb] mx-5 rounded-lg p-4"
                            onPress={() => { navigation.navigate("busket") }}
                        >
                            <Text className="text-lg font-bold text-center capitalize text-white ">place order</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaWrapper>
    )
}

export default Busketscren