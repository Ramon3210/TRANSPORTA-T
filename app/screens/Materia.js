import React from "react";
import { View, Text } from "react-native";

export default function Materia() {
  return (
    <View>
      <Text>Fletes ...</Text>
      <form>
      <br></br><br></br>       
        <label>
          Tipo de tarjeta:
            <input type="text" name="tarjeta" />
            <br></br><br></br>
          Número de tarjeta:
            <input type="text" name="numero" />
            <br></br><br></br>
          Nombre en la tarjeta:
            <input type="text" name="nombre" />
            <br></br><br></br>
          Fecha de vencimiento:
            <input type="text" name="vencimiento" />
            <br></br><br></br>
          CVV:
            <input type="text" name="CVV" />
            <br></br><br></br>
          Fecha del viaje:
            <input type="text" name="fecha" />
            <br></br><br></br>
          Viaje o flete:
            <input type="text" name="tipo" />
            <br></br><br></br>
          Descripción:
            <input type="text" name="descripcion" />
        </label>
        <br></br><br></br>
            <input type="submit" value="Liquidar" /> 
      </form>
    </View>
  );
}
