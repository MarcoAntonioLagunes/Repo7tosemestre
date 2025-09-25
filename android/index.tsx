import * as Clipboard from "expo-clipboard";
import React, { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [length, setLength] = useState<number>(12);
  const [useLower, setUseLower] = useState<boolean>(true);
  const [useUpper, setUseUpper] = useState<boolean>(true);
  const [useNumbers, setUseNumbers] = useState<boolean>(true);
  const [useSymbols, setUseSymbols] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);

  const generatePassword = () => {
    let chars = "";
    if (useLower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (useUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useNumbers) chars += "0123456789";
    if (useSymbols) chars += "!@#$%^&*()_+-={}[]|:;<>,.?/~";

    if (chars.length === 0) {
      Alert.alert("Error", "Selecciona al menos un tipo de carácter");
      return;
    }

    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
    setHistory([result, ...history]); // guarda en historial
  };

  const copyToClipboard = async () => {
    if (!password) {
      Alert.alert("Primero genera una contraseña");
      return;
    }
    await Clipboard.setStringAsync(password);
    Alert.alert("Copiado", "La contraseña se copió al portapapeles");
  };

  const clearHistory = () => {
    setHistory([]);
    Alert.alert("Historial borrado");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔐 Generador de Contraseñas</Text>

      <Text selectable style={styles.password}>
        {password || "Toca 'Generar'"}
      </Text>

      <View style={styles.row}>
        <Text style={styles.label}>Longitud: {length}</Text>
        <View style={styles.lengthControls}>
          <TouchableOpacity
            onPress={() => setLength(Math.max(6, length - 1))}
            style={styles.btn}
          >
            <Text style={styles.btnText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setLength(Math.min(32, length + 1))}
            style={styles.btn}
          >
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Option label="Minúsculas (a-z)" value={useLower} onValueChange={setUseLower} />
      <Option label="Mayúsculas (A-Z)" value={useUpper} onValueChange={setUseUpper} />
      <Option label="Números (0-9)" value={useNumbers} onValueChange={setUseNumbers} />
      <Option label="Símbolos (!@#$...)" value={useSymbols} onValueChange={setUseSymbols} />

      <View style={styles.actions}>
        <Button title="Generar" onPress={generatePassword} />
        <View style={{ height: 10 }} />
        <Button title="Copiar" onPress={copyToClipboard} />
        <View style={{ height: 10 }} />
        <Button title="Borrar Historial" color="red" onPress={clearHistory} />
      </View>

      {/* Historial */}
      <Text style={styles.historyTitle}>Historial</Text>
      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.historyItem}>{item}</Text>
        )}
      />
    </View>
  );
}

function Option({
  label,
  value,
  onValueChange,
}: {
  label: string;
  value: boolean;
  onValueChange: (val: boolean) => void;
}) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 20,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  password: {
    color: "#22c55e",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    backgroundColor: "#1f2937",
    padding: 10,
    borderRadius: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  label: { color: "white", fontSize: 16 },
  lengthControls: { flexDirection: "row", gap: 10 },
  btn: {
    backgroundColor: "#1f2937",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: { color: "white", fontSize: 18, fontWeight: "bold" },
  actions: { marginTop: 20 },
  historyTitle: {
    color: "white",
    fontSize: 18,
    marginTop: 20,
    fontWeight: "bold",
  },
  historyItem: { color: "#e5e7eb", fontSize: 16, marginTop: 5 },
});
