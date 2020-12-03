import React from "react";
import { View, Text } from "react-native";

export default function Alumno() {
  return (
    <View>
      <Text>Unidades ...</Text>

      <form>
      <br></br><br></br>       
        <label>
          Modelo:
            <input type="text" name="modelo" />
            <br></br><br></br>
          Tonelaje:
            <input type="text" name="tonelaje" />
            <br></br><br></br>
          Kilometraje:
            <input type="text" name="kilometraje" />
            <br></br><br></br>
          Placas:
            <input type="text" name="placas" />
            <br></br><br></br>
          Número de ejes:
            <input type="text" name="ejes" />
            <br></br><br></br>
          Tipo de carga:
            <input type="text" name="carga" />
        </label>
        <br></br><br></br>
            <input type="submit" value="Guardar" /> 
      </form>

    </View>
  );
}
