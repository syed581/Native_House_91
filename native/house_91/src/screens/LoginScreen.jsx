import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [selectedCode, setSelectedCode] = useState('+91');
  const [isAgreed, setIsAgreed] = useState(false);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: '🇺🇸 +1', value: '+1'},
    {label: '🇨🇦 +1', value: '+1'},
    {label: '🇬🇧 +44', value: '+44'},
    {label: '🇮🇳 +91', value: '+91'},
    // Add more country codes as needed
  ]);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar barStyle="dark-content" backgroundColor="#E8E8E8" />
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.textContainer}>
              <Text style={styles.loginText}>Login/Sign up</Text>
              <Text style={styles.subText}>
                Your key to unlocking real estate opportunities
              </Text>
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/login-icon.png')}
                style={styles.image}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{width: '100%', paddingHorizontal: 30, marginTop: 30}}>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              fontFamily: 'Britannic-Bold',
            }}>
            Enter phone number to continue
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 20, alignItems: 'center'}}>
            <DropDownPicker
              open={open}
              value={selectedCode}
              items={items}
              setOpen={setOpen}
              setValue={setSelectedCode}
              containerStyle={{width: 98}} // Smaller width for the dropdown
              style={[
                styles.dropdown,
                {
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: 8,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                },
              ]}
              dropDownContainerStyle={styles.dropdownContainer}
            />
            <TextInput
              style={styles.phoneInput}
              keyboardType="phone-pad"
              placeholder="Your phone number"
              placeholderTextColor="#A9A9A9"
            />
          </View>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              onPress={() => setIsAgreed(!isAgreed)}
              style={styles.checkbox}>
              <FontAwesome
                name={isAgreed ? 'check-square-o' : 'square-o'}
                size={25}
                color={isAgreed ? '#128807' : '#D9D9D9'}
              />
            </TouchableOpacity>
            <Text style={styles.checkboxLabel}>
              By clicking you agree to{' '}
              <Text style={{color: '#128807', fontSize: 12, fontWeight: 400}}>
                Terms and Conditions
              </Text>
            </Text>
          </View>
          <Pressable
            style={({pressed}) => [
              styles.button,
              {backgroundColor: pressed ? '#0A6E05' : '#128807'},
            ]}
            onPress={() => navigation.navigate('Main')}>
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
          <Text
            style={{
              textAlign: 'center',
              color: '#6B6B6B',
              marginTop: 20,
              fontWeight: 'bold',
            }}>
            Or
          </Text>
          <Pressable
            style={({pressed}) => [
              styles.button,
              {backgroundColor: pressed ? '#2A4EEC' : '#3A5EFF'},
            ]}>
            <Text style={styles.buttonText}>Continue With Email Id</Text>
          </Pressable>
          <Text style={styles.privacyText}>
            By continuing, you agree to our Terms & Conditions For any
            issue/query please email hello@house91.in
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 196,
    width: '100%',
    backgroundColor: '#E8E8E8',
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  textContainer: {
    width: '65%',
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'start',
  },
  subText: {
    fontSize: 13,
    color: '#6B6B6B',
    textAlign: 'start',
    marginTop: 5,
    lineHeight: 19.5,
  },
  imageContainer: {
    width: '30%',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  phoneInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 1, // Hide the left border to connect with the dropdown
    paddingHorizontal: 15, // Increase horizontal padding
    height: 50,
    marginLeft: -1, // Prevent double border issue
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  dropdown: {
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRightWidth: 1, // Hide the right border to connect with the input
    borderRadius: 0,
  },
  dropdownContainer: {
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    // borderWidth: 1,
    // borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    color: '#000',
  },
  button: {
    marginTop: 25,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  privacyText: {
    marginTop: 15,
    color: '#A9A9A9', // Change to your preferred text color
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 500,
    lineHeight: 15,
  },
});
