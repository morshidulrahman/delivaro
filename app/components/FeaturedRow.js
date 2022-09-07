import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import ResturandCard from './ResturandCard'
import Senitycliet from '../../sanity'
import { useEffect } from 'react';
import { useState } from 'react';

const FeaturedRow = ({ id, title, desc }) => {
    const [restaurant, setrestuarant] = useState([])

    useEffect(() => {
        Senitycliet
            .fetch(
                `
        *[_type == "featured" && _id == $id]{
          ...,
          restaurants[]->{
            ...,
            dishes[]->,
            type->{
              name
            }
          },
        }[0]
        `,
                { id }
            )
            .then((data) => {
                setrestuarant(data.restaurants);
            });
    }, [id]);

    return (
        <View>
            <View className="mt-3 flex justify-between px-4 flex-row">
                <Text className="text-lg font-bold capitalize">
                    {title}
                </Text>
                <AntDesign name="arrowright" size={25} color="#00CCBB" />
            </View>
            <Text className="text-sm text-gray-400 px-4">{desc}</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="pt-4 px-4"
            >
                {/* resturand card */}
                {
                    restaurant.map(item => (
                        <ResturandCard
                            key={item._id}
                            id={item._id}
                            image={item.image}
                            title={item.name}
                            genre={item?.type.name}
                            rating={item.rating}
                            address={item.address}
                            short_desc={item.short_description}
                            dishes={item.dishes}
                            log={item.long}
                            lat={item.lat}
                        />
                    ))
                }

            </ScrollView>
        </View>
    )
}

export default FeaturedRow