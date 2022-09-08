import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { selectedItems, baskettotal } from '../Redux/features/basketSlice';
import Currency from 'react-currency-formatter';
import { useNavigation } from '@react-navigation/native';
const Backeticon = () => {
    const items = useSelector(selectedItems)
    const total = useSelector(baskettotal)
    const navigation = useNavigation()
    if (items.length == 0) return
    return (
        <View className="absolute bottom-10 w-full z-10">
            <TouchableOpacity className="bg-[#00ccbb] mx-5 rounded-lg flex-row items-center p-4 justify-between"
                onPress={() => { navigation.navigate("busket") }}
            >
                <Text className="p-2 bg-[#18b1a4] rounded-md" >{items.length}</Text>
                <Text className="text-lg font-bold text-center">View basket</Text>
                <Text className="text-white font-extrabold text-xl">
                    <Currency quantity={total} />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Backeticon