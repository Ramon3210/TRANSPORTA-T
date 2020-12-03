import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Alumnos from "../screens/Alumno";
import Grupos from "../screens/Grupo";
import Maestros from "../screens/Maestro";
import Materias from "../screens/Materia";
import Promedios from "../screens/Promedio";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Unidades"
          component={Alumnos}
          options={{ title: "Unidades" }}
        />
        <Tab.Screen
          name="Transportadores"
          component={Grupos}
          options={{ title: "Transportadores" }}
        />
        <Tab.Screen
          name="localización"
          component={Maestros}
          options={{ title: "Localización" }}
        />
        <Tab.Screen
          name="fletes"
          component={Materias}
          options={{ title: "Fletes" }}
        />
        <Tab.Screen
          name="pagos"
          component={Promedios}
          options={{ title: "Pagos" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
