import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
   inputBox: {
      backgroundColor: '#e7e7e7',
      margin: 10,
      padding: 10,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   inputText: {
      fontSize: 20,
      fontWeight: '600',
      color: '#434343',
   },
   timeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 100,
      padding: 10,
      backgroundColor: '#fff',
      borderRadius: 50,

   },

   row:{
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderColor: '#b3b3b3',
   },
   iconContainer:{
      backgroundColor: '#b3b3b3',
      padding: 10,
      borderRadius: 25,
   },
   destinationText:{
      marginLeft: 10,
      fontWeight: '600',
      fontSize: 16,
      color: 'black',
   },

});

export default styles;