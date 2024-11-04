import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CrossAir from 'react-native-vector-icons/FontAwesome6';
import Thunder from 'react-native-vector-icons/FontAwesome6';
import HomeRent from 'react-native-vector-icons/MaterialCommunityIcons';
import Zero from 'react-native-vector-icons/MaterialIcons';
import Pg from 'react-native-vector-icons/Entypo';
const HomeImage = require('../../assets/house-image.png');
const HomeKey = require('../../assets/hand-key.png');

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle="light-content" backgroundColor="#128807" />

      {/* Header container */}
      <View style={{height: 280, backgroundColor: '#128807'}}>
        {/* Header Text and Icon */}
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.greetingText}>Hi John, Now searching in</Text>
            <Text style={styles.locationText}>
              Chennai <AntDesign name="down" size={14} color="white" />
            </Text>
          </View>
          <Icon name="bars" size={24} color="white" />
        </View>

        {/* Background Image */}
        <Image
          source={require('../../assets/header.png')}
          style={styles.headerImage}
          resizeMode="contain"
        />

        {/* Search Input Area */}
        <View style={styles.overlayContent}>
          {/* Input Fields and Search/Location Icons */}
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search city, locality, project landmark"
              placeholderTextColor="#888"
            />
            <TouchableOpacity
              style={{
                padding: 8,

                borderRadius: 8,
                marginHorizontal: 4,
              }}>
              <CrossAir name="location-crosshairs" size={22} color="green" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
              <Icon name="search" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Icon name="home" size={16} color="#128807" />
              <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <HomeRent name="home-lock" size={20} color="#128807" />
              <Text style={styles.buttonText}>Rent</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Icon name="building" size={16} color="#128807" />
              <Text style={styles.buttonText}>Commercial</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Pg name="users" size={16} color="#128807" />
              <Text style={styles.buttonText}>PG</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          borderColor: 'white',
          borderWidth: 1,
          marginTop: -5,
          backgroundColor: 'white',
          borderRadius: 6,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'start',
            justifyContent: 'space-between', // Space between text and images
            borderColor: '#128807',
            borderWidth: 2,
            marginTop: 20,
            marginHorizontal: 15,
            borderRadius: 20,
          }}>
          <View
            style={{
              flex: 1,

              padding: 10,
            }}>
            <Text style={{fontSize: 10, fontWeight: 500}}>
              Are you a property Owner?
            </Text>
            <View style={{marginTop: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 0,
                }}>
                <Thunder name="bolt-lightning" size={12} color="green" />
                <Text style={{fontSize: 9, marginLeft: 5, fontWeight: 400}}>
                  Faster & Verified Tenants/Buyers
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 5,
                }}>
                <Zero
                  name="exposure-zero"
                  size={12}
                  color="white"
                  style={{backgroundColor: 'green', borderRadius: 50}}
                />
                {/* Replace with the appropriate icon for Zero */}
                <Text style={{fontSize: 9, marginLeft: 5, fontWeight: 400}}>
                  Zero Waiting Charges
                </Text>
              </View>
              <Pressable
                style={{
                  padding: 8,
                  paddingVertical: 10,
                  backgroundColor: '#128807',
                  color: 'white',
                  borderRadius: 10,
                  marginTop: 6,
                }}>
                <Text style={{fontSize: 10, color: 'white'}}>
                  Post Your Property For Free
                </Text>
              </Pressable>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'start',
              backgroundColor: '#C4FFB966',
              width: '50%',
              borderColor: '#128807',
              borderLeftWidth: 2,
              borderRadius: 19,
              overflow: 'hidden',
            }}>
            <Image
              source={HomeImage}
              style={{width: '100%', height: 120, marginLeft: -20}}
            />
            <Image
              source={HomeKey}
              style={{
                width: 70,
                height: 70,
                marginLeft: -46, // Gap between house image and key image
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 25,
    paddingBottom: 8,
    zIndex: 1, // Keep header text above the image
  },
  greetingText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  locationText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  headerImage: {
    position: 'absolute',
    bottom: -30,
    width: '100%',
    height: 200,
  },

  overlayContent: {
    position: 'absolute',
    top: '30%',
    left: 0,
    right: 0,
    alignItems: 'center',
    transform: [{translateY: -20}],
    paddingHorizontal: 20,
  },
  overlaySubtext: {
    color: 'white',
    fontSize: 14,
    marginTop: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 16,
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
    color: '#000',
    fontSize: 12,
  },
  iconContainer: {
    padding: 8,
    backgroundColor: '#128807',
    borderRadius: 8,
    marginHorizontal: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 13,
    width: '100%', // Set width for the button container
    marginHorizontal: 10, // Optional: Add margin to the left and right
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 6,
    paddingHorizontal: 10,
    elevation: 2, // Add shadow for Android
    shadowColor: '#000', // Add shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonText: {
    marginLeft: 4,
    color: '#128807',
    fontSize: 12, // Set font size for button text
    fontWeight: 600,
  },
});

export default HomeScreen;
