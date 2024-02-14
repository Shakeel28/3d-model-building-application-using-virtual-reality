import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import Card from '../../../Compnonets/userhome/Card';
import UserHomeData from '../../../Compnonets/userhome/UserHomeData';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../Main/Main';

type MainProps = StackNavigationProp<RootStackParamList, 'Home'>;
 function Home() {
  const navigation = useNavigation<MainProps>();
  const handleLogout = async () => {
    try {
      await auth().signOut();
      navigation.navigate('UserLogin');
    } catch (error) {
      Alert.alert('Logout Failed', 'An error occurred while trying to log out. Please try again later.');
    }
  };
  return (

    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.heading}>Welcome</Text>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <Card />
    </ScrollView>
  );
}




const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(0, 188, 212, 1)',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between', // Align items horizontally
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  logoutButton: {
    marginRight: 20, // Add some spacing between the welcome message and the button
    padding: 10,
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Home;
