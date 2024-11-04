import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Animated} from 'react-native';

const MainScreen = () => {
  const slideAnim = useRef(new Animated.Value(100)).current; // Start off-screen to the right
  const navigation = useNavigation();

  useEffect(() => {
    // Start the animation when the component mounts
    Animated.timing(slideAnim, {
      toValue: 0, // Final position (visible)
      duration: 1000, // Duration of the animation
      useNativeDriver: true, // Use native driver for better performance
    }).start();
    // Navigate to LoginScreen after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000); // Change the delay as needed

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [slideAnim, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Animated.Text
          style={[styles.largeText, {transform: [{translateX: slideAnim}]}]}>
          H
        </Animated.Text>
        <Animated.View style={{transform: [{translateX: slideAnim}]}}>
          <View style={styles.ouseContainer}>
            <Text style={styles.smallText}>ouse</Text>
            <Text style={styles.subtitleText}>Relocation - Redefined</Text>
          </View>
        </Animated.View>
        <Text style={styles.numberText}>91</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row', // Arrange elements in a row
    alignItems: 'center', // Center vertically
    justifyContent: 'center', // Center horizontally within the SafeAreaView
    paddingHorizontal: 10, // Optional: add horizontal padding
  },
  largeText: {
    fontSize: 64,
    fontWeight: '700',
    color: 'black',
    fontFamily: 'Britannic',
  },
  ouseContainer: {
    position: 'relative',
    flexDirection: 'column',
    marginLeft: -4,
    marginTop: -24,
  },
  smallText: {
    fontSize: 64,
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: -4,
    fontFamily: 'Britannic', // Use your custom font here
  },
  subtitleText: {
    width: 300,
    position: 'absolute',
    top: 71,
    fontSize: 12,
    color: 'black',
    fontWeight: '700',
    marginLeft: 5,
    marginTop: -4, // Adjust spacing between "ouse" and "Relocation - Redefined"
    fontFamily: 'Britannic', // Use your custom font here
  },
  numberText: {
    fontSize: 64,
    fontWeight: '700',
    color: '#00903B',
    marginLeft: -1, // Add spacing between "ouse" and "91"
    fontFamily: 'Britannic-regular', // Use your custom font here
  },
});

export default MainScreen;
