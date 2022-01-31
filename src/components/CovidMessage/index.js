import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const CovidMessage = (props) => {
   return (
   <View style={styles.container}>
      <Text style={styles.title}>Cuidados com a transmissão do vírus!</Text>
      <Text style={styles.text}>Nossos motoristas seguem protocolos de higiene e prevenção para sua melhor segurança.</Text>
      <Text style={styles.learnMore}>Ler mais</Text>
   </View>
   )
}

export default CovidMessage;