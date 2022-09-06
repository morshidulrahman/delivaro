import { View, Text, TouchableOpacity, Image } from 'react-native'
import { urlFor } from '../../sanity'


const Categoriscard = ({ title, image }) => {

    return (
        <TouchableOpacity className="relative mr-2">
            <Image
                className="w-24 h-24 rounded "
                source={{
                    uri: urlFor(image).url()
                }}
            />
            <Text className="text-white absolute bottom-0 left-0 bg-[#00CCBB] w-full text-center py-1">{title}</Text>
        </TouchableOpacity>
    )
}

export default Categoriscard