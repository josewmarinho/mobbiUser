import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const CustomInput = (props) => {
  const {value, setValue, placeholder, secureTextEntry } = props
   return (
      <View style={styles.container}>
         <TextInput {...props}
            value={value}
            onChangeText={setValue}
            placeholder={placeholder} 
            style={styles.input}
            secureTextEntry={secureTextEntry}
            />
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: 'white',
      width: '100%',

      borderColor: '#e8e8e8',
      borderWidth: 1,
      borderRadius: 5,

      paddingHorizontal: 10,
      marginVertical: 5,
   },
   input: {
      height: 40,
      margin: 1,
      padding: 1,
      color: '#000'
   },
});

export default CustomInput
