import React from "react";
import { View, Text } from "react-native";

export default function Grupo() {
  return (
    <View>
      <Text>Transportadores ...</Text>

      <form>
      <br></br><br></br>       
        <label>
          Número de teléfono:
            <input type="text" name="telefono" />
            <br></br><br></br>
          Nombre(s):
            <input type="text" name="nombres" />
            <br></br><br></br>
          Apellidos:
            <input type="text" name="apellidos" />
            <br></br><br></br>
          Correo electrónico:
            <input type="text" name="email" />
            <br></br><br></br>
          Domicilio:
            <input type="text" name="domicilio" />
            <br></br><br></br>
          Lugar de residencia:
            <input type="text" name="residencia" />
            <br></br><br></br>
          Número de licencia:
            <input type="text" name="num" />
            <br></br><br></br>
          Tipo de residencia:
            <input type="text" name="tip" />
        </label>
        <br></br><br></br>
            <input type="submit" value="Guardar" /> 
      </form>

    </View>
  );
}
