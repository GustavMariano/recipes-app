import React from "react";
import { Text, TouchableOpacity, View, ImageBackground, Image } from "react-native";
import { styles } from "./styles";
import { PizzaHome, Logo } from "../../assets/image";

export default function Welcome(props) {
    const {navigation} = props;

    return (
        <View style={styles.container}>
        <ImageBackground source={PizzaHome} style={styles.backgroundImage}>
        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={Logo} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cadastroButton} onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.cadastroText}>Registro</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
    );
}
