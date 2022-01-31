import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from './styles.js';
import UberTypeRow from '../UberTypeRow';

import typesData from '../../assets/data/types';

const UberTypes = ({typeState}) => {
  const [selectedType, setSelectedType] = typeState;

  const confirm = () => {
    console.warn('confirm');
  };

  return (
    <View>
      {typesData.map((type) => (
        <UberTypeRow type={type} key={type.id} isSelected={type.type === selectedType} onPress={() => setSelectedType(type.type)}/>
      ))}

      <Pressable onPress={confirm} style={{
        backgroundColor: 'black',
        padding: 12,
        margin: 10,
        alignItems: 'center',
        borderRadius: 10
      }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Confirmar
        </Text>
      </Pressable>
    </View>
  );
};

export default UberTypes;