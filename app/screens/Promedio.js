import React from "react";
import { View, Text } from "react-native";
import QRCode from 'react-native-qrcode-svg';

export default function Promedio() {
  return (
    <View>
      <Text>Pagos ...</Text>
      <QRCode
      value="[{ name: 'TRANSPORTA-T'},{ email: 'ragafe2020@gmail.com' }]"
    />
    </View>
  );
}
