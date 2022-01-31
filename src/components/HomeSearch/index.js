import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native'



import styles from './styles';

const HomeSearch = (props) => {
   const navigation = useNavigation();

   const goToSearch = () => {
      navigation.navigate('DestinationSearch')
   }
   return (
      <ScrollView>
         {/* Input Box */}
         <Pressable onPress={goToSearch} style={styles.inputBox}>
            <Text style={styles.inputText}>Para onde?</Text>

            <View style={styles.timeContainer}>
               <AntDesign name={'clockcircle'} size={16} color={'#535353'} />
               <Text>Agora</Text>
               <MaterialIcons name={'keyboard-arrow-down'} size={16} />
            </View>
         </Pressable>

         {/* Previus destination */}
         <View style={styles.row}>
            <View style={styles.iconContainer}>
               <AntDesign name={'clockcircle'} size={16} color={'#fff'} />
            </View>
            <Text style={styles.destinationText}>Recentes</Text>
         </View>


         {/* Home destination */}

         <View style={styles.row}>
            <View style={[styles.iconContainer, { backgroundColor: '#218cff' }]}>
               <Entypo name={'home'} size={16} color={'#fff'} />
            </View>
            <Text style={styles.destinationText}>Casa</Text>
         </View>
      </ScrollView>
   )
}

export default HomeSearch;