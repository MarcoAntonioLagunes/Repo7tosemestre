// app/_layout.tsx
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#0f172a" }, // Fondo del header
        headerTintColor: "white", // Texto e iconos en blanco
        headerTitleStyle: { fontWeight: "bold" }, // Título en negritas
        tabBarStyle: { backgroundColor: "#0b1220" },
        tabBarActiveTintColor: "#22d3ee",
      }}
    >
      <Tabs.Screen
        name="(tabs)/index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="lock-closed" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(tabs)/explore"
        options={{
          title: "Explorar",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(tabs)/settings"
        options={{
          title: "Ajustes",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(tabs)/about"
        options={{
          title: "Acerca de",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
