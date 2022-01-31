import React, {useCallback} from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
} from "react-native";

import { Formik } from 'formik';
import * as Yup from 'yup';
import FormInput from '../../../components/FormInput';
import CustomButton from '../../../components/CustomButton';
import PhoneInput from "react-native-phone-number-input";

import { useNavigation } from "@react-navigation/native";
import api from "../../../services/api";

const validationSchema = Yup.object({
  name: Yup.string().required("O nome é obrigatório"),
  email: Yup.string().email("Digite um e-mail válido").required("E-mail obrigatório"),
  password: Yup.string().required("Senha obrigatória"),
  phone: Yup.number().min(8).required('Digite um numero válido')
})

const SignUpScreen = () => {
  const navigation = useNavigation();
  const userInfo = {
    type: 'rider',
    country: "Brazil",
    accept_terms: true,
    name: '',
    email: '',
    password: '',
    phone: '',
  }

  const hadleSignUp = useCallback(
    async (userInfo) =>{
      try {

        await api.post('register', userInfo);


        console.log('deu certo');
        
        navigation.navigate('SignIn');
      }catch(err) {
        console.log(err)
        console.log('deu ruim')

      }
    })

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Cadastro</Text>
      <Formik
        initialValues={userInfo}
        validationSchema={validationSchema}
        onSubmit={hadleSignUp}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
          console.log(values)
          const { name, email, password, phone } = values
          return (
            <>
              <FormInput
                style={styles.input}
                label={"Nome completo"}
                error={touched.name && errors.name}
                onBlur={handleBlur('name')}
                type="text"
                value={name}
                placeholder={"Nome Completo"}
                onChangeText={handleChange('name')}
                placeholderTextColor={'#000'}
              />

              <FormInput
                style={styles.input}
                label={"Email"}
                error={touched.email && errors.email}
                value={email}
                onBlur={handleBlur('email')}
                placeholder={"Email"}
                onChangeText={handleChange('email')}
                placeholderTextColor={'#000'}

              />
              <FormInput
                style={styles.input}
                label={"Password"}
                error={touched.password && errors.password}
                onBlur={handleBlur('password')}
                value={password}
                secureTextEntry
                placeholder={"Senha"}
                onChangeText={handleChange('password')}
                placeholderTextColor={'#000'}

              />
              <PhoneInput
                containerStyle={styles.input_phone}
                placeholder={"Telefone"}
                textInputProps={styles.input_phone_cp}
                textInputStyle={styles.input_phone_cp}
                codeTextStyle={styles.input_phone_cp}

                label='Telefone'
                defaultCode="BR"
                value={phone}
                onChangeFormattedText={handleChange('phone')}

              />

              <Text style={styles.termos}>Ao continuar, confirmo que li e concordo com os
                <Text style={styles.link} onPress={() => { Linking.openURL('https://mobbi.app.br/termo_de_uso') }}> {''} Termos e condições</Text> e {''}
                <Text style={styles.link} onPress={() => { Linking.openURL('https://mobbi.app.br/termo_de_uso') }}>Politica de Privacidade</Text>.</Text>
              <CustomButton onPress={handleSubmit} text="Continuar" />
            </>)
        }}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginLeft: 5,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 10,
    color: '#000',
  },
  input_phone: {
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 7,
    color: '#000',
  },
  input_phone_cp: {
    color: '#000',
    placeholderTextColor: '#000',
  },
  termos: {
    marginTop: 12,
    marginBottom: 15,
    color: '#000',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline'
  },
});


export default SignUpScreen;
