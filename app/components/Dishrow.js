import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../../sanity'
import { AntDesign } from '@expo/vector-icons';
import Currency from 'react-currency-formatter';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addtobusket, selectedwithid, removebusket } from '../Redux/features/basketSlice';

const Dishrow = ({ dish, image, short_description, price, id }) => {
    const [ispressed, setpressed] = useState(false)
    const items = useSelector((state) => selectedwithid(state, id))
    const disptach = useDispatch()

    const addtoitemsbutsket = () => {
        disptach(
            addtobusket({
                dish, image, short_description, price, id
            })
        )
    }
    const removeitembustket = () => {
        if (!items.length > 0) return;
        disptach(removebusket({ id }))
    }
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
                        <View className="flex-row items-center space-x-2 mt-2 mb-2">
                            <TouchableOpacity onPress={removeitembustket} disabled={!items.length}>

                                <AntDesign name="minuscircle" size={35} color={items.length > 0 ? "#00ccbb" : "gray"} />
                            </TouchableOpacity>
                            <Text className="text-lg">{items.length}</Text>
                            <TouchableOpacity onPress={addtoitemsbutsket}>
                                <AntDesign name="pluscircle" size={35} color="#00CCBB" />
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>
        </TouchableOpacity>
    )
}

export default Dishrow