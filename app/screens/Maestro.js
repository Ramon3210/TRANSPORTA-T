import React from "react";
import { View, Text } from "react-native";

let map= google.maps.Map;

export default function Maestro() {
  return (
    <View>
      <Text>Localización ...</Text>

    map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });

    </View>
  );
}
