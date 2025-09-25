import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Explore() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🔍 Blog de Ciberseguridad</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🔑 La importancia de las contraseñas seguras</Text>
        <Text style={styles.cardText}>
          Una contraseña débil puede ser adivinada en segundos. Los atacantes utilizan programas
          llamados “fuerza bruta” que prueban millones de combinaciones hasta encontrar la correcta.
          Por eso es fundamental usar contraseñas largas y complejas.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🛡️ Autenticación en dos pasos (2FA)</Text>
        <Text style={styles.cardText}>
          La 2FA añade una segunda capa de seguridad. Aunque alguien robe tu contraseña,
          necesitaría también un código enviado a tu teléfono o aplicación de autenticación.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>⚡ Datos curiosos</Text>
        <Text style={styles.cardText}>
          • La contraseña más usada en el mundo sigue siendo "123456". {"\n"}
          • Un hacker puede descifrar una contraseña de 6 caracteres en menos de 5 minutos. {"\n"}
          • Con 12 caracteres combinados (mayúsculas, minúsculas, números y símbolos) ¡puede
          tardar millones de años!
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📌 Consejos prácticos</Text>
        <Text style={styles.cardText}>
          ✔️ No reutilices contraseñas en varias cuentas. {"\n"}
          ✔️ Usa un gestor de contraseñas para recordarlas. {"\n"}
          ✔️ Cámbialas periódicamente en servicios críticos como bancos o correos.
        </Text>
      </View>

      <Text style={styles.footer}>Fuente: OWASP, Cybersecurity Ventures, NordPass Report 2024.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f172a", padding: 16 },
  title: { color: "white", fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  card: {
    backgroundColor: "#1e293b",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  cardTitle: { color: "#38bdf8", fontSize: 18, fontWeight: "600", marginBottom: 8 },
  cardText: { color: "#e5e7eb", fontSize: 15, lineHeight: 22 },
  footer: { color: "#94a3b8", fontSize: 12, marginTop: 20, textAlign: "center" },
});
