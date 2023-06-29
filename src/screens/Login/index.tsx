import React, { useState } from "react";
import { Text, TouchableOpacity, View, TextInput, Image, KeyboardAvoidingView } from "react-native";
import { styles } from "./styles";
import { ImagemLogin } from "../../assets/image";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login(props) {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://0193-170-80-70-210.sa.ngrok.io/login",
        {
          email: email,
          password: password,
        }
      );

      if (response.status === 200) {
        const { id, name } = response.data.user;
        await AsyncStorage.setItem("userId", id.toString());
        await AsyncStorage.setItem("userName", name.toString());
        navigation.navigate("Home");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("Email ou senha inválidos!");
      } else {
        alert("Erro ao fazer login. Por favor, tente novamente mais tarde.");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={ImagemLogin} />

      <KeyboardAvoidingView contentContainerStyle={styles.inputContainer} behavior="position" enabled>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#c1c2c4"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#c1c2c4"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </KeyboardAvoidingView>

      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginText}>Logar</Text>
      </TouchableOpacity>
    </View>
  );
}
