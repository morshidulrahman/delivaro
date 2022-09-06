import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, Image, ScrollView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SafeAreaWrapper from "../configs/SafeAreaWrapper"
import { Entypo, FontAwesome5, EvilIcons, Feather } from '@expo/vector-icons';
import Categoris from "../components/Categoris";
import FeaturedRow from "../components/FeaturedRow";
import client from '../../sanity'

const HomeScreen = () => {
  const navigation = useNavigation();
  const [categoriss, setcategoris] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {

    client
      .fetch(
        `
        *[_type == "featured"]{
          ...,
          restaurants[]->{
            ...,
            dishes[]->
          }
        }
      `
      ).then(data => {
        setcategoris(data)
      })
  }, [])

  return (
    <SafeAreaWrapper>
      {/* Header section */}
      <View className="bg-white pt-5">
        <View className="flex-row px-4 items-center space-x-3">
          <Image
            source={require("../assets/delivery.png")}
            className="w-8 h-8 rounded-full p-2 bg-gray-300"
          />
          <View className="flex-1">
            <Text className="text-xs text-gray-400 font-bold">Delivery Now !</Text>
            <Text className="text-xl font-bold ">
              current loaction
              <Entypo name="chevron-down" size={20} color="#00CCBB" />
            </Text>
          </View>
          <FontAwesome5 name="user" size={30} color="#00CCBB" />
        </View>
        {/* search section */}
        <View className="flex-row items-center mt-3 space-x-2 mb-3 px-4">
          <View className="flex-1 bg-gray-300 rounded-md p-3 space-x-1 flex-row items-center">
            <EvilIcons name="search" size={20} color="#00CCBB" />
            <TextInput
              className="outline-none border-none"
              placeholder="Resturants cuisines"
              keyboardType="default"
            />
          </View>
          <Feather name="grid" size={30} color="#00CCBB" />
        </View>
      </View>
      {/* scroll area view */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 160 }}
      >
        {/* categoris */}
        <Categoris />

        {/* featured row */}
        {
          categoriss.map((item) => (
            <FeaturedRow
              id={item._id}
              key={item._id}
              title={item.name}
              desc={item.short_description}
            />
          ))
        }
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;
