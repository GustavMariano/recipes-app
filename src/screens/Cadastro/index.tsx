import React, { useState } from "react";
import { Text, TouchableOpacity, View, TextInput, Image, KeyboardAvoidingView } from "react-native";
import { styles } from "./styles";
import { ImagemCadastro } from "../../assets/image";
import axios from "axios";

export default function Cadastro(props) {
  const { navigation } = props;
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const cadastrarUsuario = async () => {
    if (!validarEmail(email)) {
      alert("Email inválido");
      return;
    }

    if (password.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres");
      return;
    }

    try {
      const response = await axios.post("https://2dc7-170-80-70-253.sa.ngrok.io/register", {
        name: nome,
        email: email,
        password: password,
      });
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
      alert("Erro ao cadastrar usuário");
    }
  };

  const validarEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={ImagemCadastro} />

      <KeyboardAvoidingView contentContainerStyle={styles.inputContainer} behavior="position" enabled>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#c1c2c4"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#c1c2c4"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#c1c2c4"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </KeyboardAvoidingView >

      <TouchableOpacity onPress={cadastrarUsuario} style={styles.cadastroButtom}>
        <Text style={styles.cadastroText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
