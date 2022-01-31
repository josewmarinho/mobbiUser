import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native'


const FormInput = (props) => {
   const { placeholder, error } = props;

   return (
      <>
         <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
         </View>
         <TextInput {...props} placeholder={placeholder} style={styles.input} />
      </>
   )
}

const styles = StyleSheet.create({
   input: {
     backgroundColor: "white",
     width: "100%",
     borderColor: "#e8e8e8",
     borderWidth: 1,
     borderRadius: 5,
     paddingHorizontal: 10,
     marginVertical: 7,
     height: 50,
     fontSize: 16,
   }
 });

export default FormInput;