import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import EntidadesScreen from "../screens/EntidadeScreen";
import ContasReceberScreen from "../screens/ContasReceberScreen";
import ContasPagarScreen from "../screens/ContasPagarScreen";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  const user = {
    nome: "Helo A Melhor",
    foto: "https://i.pinimg.com/736x/03/f8/d6/03f8d68f67f2802c7c6872d7436f5afd.jpg"
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <Image
            source={{ uri: user.foto }}
            style={styles.avatar}
          />

          <Text style={styles.name}>
            {user.nome}
          </Text>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => console.log("Logout")}
        >
          <Ionicons name="log-out-outline" size={22} color="#fff" />

          <Text style={styles.logoutText}>
            Deslogar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ec9ce2ff"
        },
        headerTintColor: "#fff",
        drawerActiveTintColor: "#ec9ce2ff"
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          )
        }}
      />

      <Drawer.Screen
        name="Entidades"
        component={EntidadesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-add" size={size} color={color} />
          )
        }}
  
      />

      <Drawer.Screen
        name="ContasReceber"
        component={ContasReceberScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="wallet-outline" size={size} color={color} />
          )
        }}
      />

      <Drawer.Screen
        name="ContasPagar"
        component={ContasPagarScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="cash-outline" size={size} color={color} />
          )
        }}
      />
    </Drawer.Navigator>
  );
}
 const styles = StyleSheet.create({

  container:{
    flex: 1
  },

  header: {
    padding: 25,
    backgroundColor: "1E88E5",
    alignItems: "center"
  },

avatar: {
 width: 80,
 height: 80,
 borderRadius: 40,
 marginBottom: 10
 },
 name: {
 color: "#000",
 fontSize: 18,
 fontWeight: "bold"
 },
 footer: {
 padding: 15,
 paddingBottom: 35,
 borderTopWidth: 1,
 borderColor: "#eee"
 },
 logoutButton: {
 backgroundColor: "#e535ceff",
 padding: 15,
 borderRadius: 10,
 alignItems: "center",
 flexDirection: "row",
 justifyContent: "center",
 gap: 8
 },
 logoutText: {
 color: "#fff",
 fontSize: 16,
 fontWeight: "bold"
 },
 });