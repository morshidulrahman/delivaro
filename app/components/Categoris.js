import { View, Text, ScrollView } from 'react-native'
import Categoriscard from './Categoriscard'
import client from '../../sanity'
import { useEffect } from 'react'
import { useState } from 'react'
const Categoris = () => {
    const [item, setitem] = useState([])
    useEffect(() => {
        client.fetch(
            `
            *[_type == "category"]
            `
        ).then(data => {
            setitem(data)
        })
    }, [])

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="px-4 py-2"
        >
            {
                item.map(item => (
                    <Categoriscard title={item.type} image={item.image} key={item._id} />
                ))
            }



        </ScrollView>
    )
}

export default Categoris