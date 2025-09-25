import React from "react";
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function About() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>ℹ️ Acerca de la App</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          Esta aplicación fue diseñada para ayudarte a generar contraseñas seguras de manera sencilla 
          y rápida. Incluye opciones para personalizar longitud, uso de mayúsculas, números y símbolos.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎯 Objetivo</Text>
        <Text style={styles.cardText}>
          Promover el uso de contraseñas robustas para mejorar la seguridad digital en la vida diaria, 
          protegiendo tus cuentas frente a ataques comunes como fuerza bruta o robo de credenciales.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📖 Buenas prácticas</Text>
        <Text style={styles.cardText}>
          • Usa contraseñas de al menos 12 caracteres. {"\n"}
          • Combina letras, números y símbolos. {"\n"}
          • No reutilices la misma contraseña en varios servicios. {"\n"}
          • Considera activar la autenticación de dos factores (2FA).
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🔗 Recursos recomendados</Text>
        <TouchableOpacity onPress={() => Linking.openURL("https://owasp.org")}>
          <Text style={styles.link}>➡️ OWASP: Mejores prácticas de seguridad</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://haveibeenpwned.com/")}>
          <Text style={styles.link}>➡️ Have I Been Pwned: Verifica filtraciones</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>Versión 1.0 • Proyecto educativo</Text>
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
  link: { color: "#22d3ee", fontSize: 15, marginTop: 6, textDecorationLine: "underline" },
  footer: { color: "#94a3b8", fontSize: 12, marginTop: 20, textAlign: "center" },
});
