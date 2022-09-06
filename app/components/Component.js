import { View, Text, ScrollView } from "react-native";
import React from "react";

const Component = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
      }}
    >
      <Text>Component</Text>
    </ScrollView>
  );
};

export default Component;
