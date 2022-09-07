import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../../sanity'
import { AntDesign } from '@expo/vector-icons';
import Currency from 'react-currency-formatter';
import { useState } from 'react';

const Dishrow = ({ dish, image, short_description, price }) => {
    const [ispressed, setpressed] = useState(false)
    return (
        <TouchableOpacity className="bg-white border border-gray-200 p-4"
            onPress={() => (
                setpressed(!ispressed)
            )}
        >
            <View>
                <Text className="text-lg font-bold mb-1">
                    {dish}
                </Text>
                <View className="flex-row items-center">
                    <View className="flex-1 pr-2">
                        <Text className="text-gray-400 capitalize">
                            {short_description}
                        </Text>
                        <Text className="mt-1 text-gray-300">
                            <Currency quantity={price} currency="GBP" />
                        </Text>
                    </View>
                    <Image source={{
                        uri: urlFor(image).url()
                    }}
                        className="h-20 w-20 rounded-md p-4 bg-gray-100"
                    />
                </View>
                {
                    ispressed && (
                        <View className="flex-row items-center space-x-2 mt-2">
                            <TouchableOpacity>
                                <AntDesign name="pluscircle" size={24} color="#00CCBB" />
                            </TouchableOpacity>
                            <Text className="text-lg">0</Text>
                            <TouchableOpacity>
                                <AntDesign name="minuscircle" size={24} color="#00CCBB" />
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>
        </TouchableOpacity>
    )
}

export default Dishrow