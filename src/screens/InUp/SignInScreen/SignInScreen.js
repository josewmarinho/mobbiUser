import React, { useEffect, useCallback, useState } from "react";
import {
  Alert,
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../../components/CustomButton";
import Logo from '../../../assets/images/frist-page-mobbi.png';
import { useFormik } from 'formik';
import api from '../../../services/api';

import { useAuth } from '../../../hooks/auth';
import { useStore } from '../../../hooks/store';

//import SocialSignInButtons from "../../components/SocialSignInButtons";

const SignInScreen = () => {
  const [state, setState] = useState(false);
  const [, setAuth] = useAuth();
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: async values => {
      try {

        const { data } = await api.post('login', values)
        console.log(values)

        setAuth(data)

        navigation.navigate("HomeScreen");

      } catch (error) {
        setState('Login ou senha invalidos')
        console.log(error)
      }
    },
  })




  /*  useEffect(() => {
     register("username");
     register("password");
   }, [register]); */

  const { height } = useWindowDimensions();

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignUpPress = () => {
    navigation.navigate("SingUp");
  };

  /* const hadleSignIn = useCallback(
    async(data) =>{
      try {
        await api.post("login", {
          email,
          password,
        });
        navigation.navigate("HomeScreen");
      } catch(err){
        console.log(err)
        return
      } 
    }
  ) */


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="cover"
        />
        <View style={styles.buttonsrest}>
          {state && <Text>{state}</Text>}
          <TextInput
            style={styles.input}
            label={"Email"}
            placeholder={"Email"}
            placeholderTextColor={'#000'}

            value={formik.values.email}
            onChangeText={formik.handleChange('email')}
          />

          <TextInput
            style={styles.input}
            secureTextEntry
            label={"Senha"}
            placeholder={"Senha"}
            placeholderTextColor={'#000'}
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
          />

          <CustomButton onPress={formik.handleSubmit} text="Continuar" />

          <CustomButton
            text="Esqueceu a senha?"
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
          />

          {/*  <SocialSignInButtons /> */}

          <CustomButton
            text="Não tem conta? Crie uma"
            onPress={onSignUpPress}
            type="TERTIARY"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 15,
  },
  buttonsrest: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    height: 45,
    marginTop: 10,
    padding: 1,
    fontSize: 16,
    color: '#000',
    fontFamily: 'Montserrat-Medium',
  },
});
export default SignInScreen;
