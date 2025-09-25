// app/(tabs)/settings.tsx
import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue
} from "react-native-reanimated";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [notifications, setNotifications] = useState(false);
  const [sounds, setSounds] = useState(false);

  // Animación de escala
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const texts = {
    es: {
      title: "⚙️ Ajustes",
      darkMode: "Modo oscuro",
      lightMode: "Modo claro",
      notifications: "Notificaciones",
      sounds: "Sonidos",
      language: "Idioma",
    },
    en: {
      title: "⚙️ Settings",
      darkMode: "Dark Mode",
      lightMode: "Light Mode",
      notifications: "Notifications",
      sounds: "Sounds",
      language: "Language",
    },
  };

  const t = texts[language];

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Text style={styles.title}>{t.title}</Text>

      {/* Dark Mode */}
      <View style={styles.row}>
        <Text style={styles.label}>{darkMode ? t.darkMode : t.lightMode}</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      {/* Notifications */}
      <View style={styles.row}>
        <Text style={styles.label}>{t.notifications}</Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>

      {/* Sounds */}
      <View style={styles.row}>
        <Text style={styles.label}>{t.sounds}</Text>
        <Switch value={sounds} onValueChange={setSounds} />
      </View>

      {/* Language */}
      <View style={styles.row}>
        <Text style={styles.label}>{t.language}</Text>
        <Switch
          value={language === "en"}
          onValueChange={(val) => setLanguage(val ? "en" : "es")}
        />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#0f172a" },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  label: { color: "white", fontSize: 16 },
});
