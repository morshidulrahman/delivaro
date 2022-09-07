import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { urlFor } from '../../sanity';
import { useNavigation } from '@react-navigation/native';

const ResturandCard = ({ id, image, title, short_desc, rating, address, dishes, log, lat, genre }) => {

    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("Restaurant", {
                    id, image, title, short_desc, rating, address, dishes, log, lat, genre
                })
            }}
            className="bg-white mr-3 rounded-sm">
            <Image
                source={{ uri: urlFor(image).url() }}
                className="w-64 h-36"
            />
            <View className="px-3 pb-2">
                <Text className="text-lg font-bold">
                    {title}
                </Text>
                <View className="flex-row items-center space-x-2 mt-2">
                    <AntDesign name="star" size={18} color="green" style={{ opacity: 0.4 }} />
                    <Text className="text-gray-300 text-sm">
                        <Text className="text-green-400 text-sm">{rating}</Text>. {genre}
                    </Text>
                </View>
                <View className="flex-row items-center space-x-1 mt-2">
                    <EvilIcons name="location" size={22} style={{ opacity: 0.4 }} />
                    <Text className="text-gray-500 text-sm">{address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ResturandCard