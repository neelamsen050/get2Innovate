import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Linking,
  Dimensions,
  Platform
 } from 'react-native';
 import {LinearGradient} from 'expo-linear-gradient';
 const heightY = Dimensions.get("window").height;
 import Svg, { SvgUri } from 'react-native-svg'; 
 import Logo from '../../assets/Vector1111-kjm.svg';

 function LoginScreen (props){
  return (
    <View>
      <View
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          maxWidth: 100,
          position: 'relative',
          boxSizing: 'border-box',
          alignItems: 'flex-start',
          flexShrink: 0,
          borderColor: 'transparent',
          borderRadius: 0,
        }}
      >
        <View
          style={{
            top: 0,
            left: 0,
            width: 375,
            height: 812,
            display: 'flex',
            overflow: 'hidden',
            position: 'absolute',
            boxSizing: 'border-box',
            alignItems: 'flex-start',
            flexShrink: 0,
            borderColor: 'transparent',
            marginRight: 0,
            borderRadius: 0,
            marginBottom: 0,
            backgroundColor: 'rgba(253, 253, 253, 1)',
          }}
        >
          <View
            style={{
              top: 329,
              left: 0,
              width: 375,
              height: 483,
              display: 'flex',
              padding: 0,
              position: 'absolute',
              alignSelf: 'auto',
              boxSizing: 'border-box',
              alignItems: 'flex-start',
              flexShrink: 1,
              borderColor: 'transparent',
              borderWidth: 0,
              marginRight: 0,
              borderRadius: 0,
              marginBottom: 0,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              backgroundColor: 'rgba(253, 253, 253, 1)',
            }}
          >
            <View
              style={{
                top: 279,
                left: 45,
                width: 285,
                height: 101,
                display: 'flex',
                padding: 0,
                position: 'absolute',
                alignSelf: 'auto',
                boxSizing: 'border-box',
                alignItems: 'flex-start',
                flexShrink: 1,
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 0,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                backgroundColor: 'transparent',
              }}
            >
              <Text
                style={{
                  top: 79,
                  left: 51,
                  paddingTop:5,
                  color: 'rgba(24, 24, 24, 1)',
                  height: 'auto',
                  fontSize: 12,
                  position: 'absolute',
                  alignSelf: 'auto',
                  fontStyle: 'Regular',
                  textAlign: 'left',
                  fontWeight: '400',
                  lineHeight: 10,
                  fontStretch: 'normal',
                  textDecoration: 'none',
                }}
              >
                <Text
                  style={{
                    color: 'rgba(24, 24, 24, 1)',
                    fontWeight: '400',
                  }}
                >
                  Don’t have an account?
                </Text>
                <Text style={{
                  color:'skyblue'
                }}
                onPress={()=>props.navigation.navigate('Register')}
                > Register</Text>
              </Text>
              <TouchableOpacity style={styles.button} onPress={()=> props.navigation.navigate('Drawer')}>
                <LinearGradient
                    colors={['#85DCFF', '#85DCFF', '#85DCFF']}
                    style={styles.linearGradient}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </LinearGradient>
            </TouchableOpacity>
            </View>
            <View
              style={{
                top: 152,
                left: 16,
                width: 343,
                height: 81,
                display: 'flex',
                padding: 0,
                position: 'absolute',
                alignSelf: 'auto',
                boxSizing: 'border-box',
                alignItems: 'flex-start',
                flexShrink: 1,
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 0,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                backgroundColor: 'transparent',
              }}
            >
              <View
                style={{
                  top: 20,
                  left: 311,
                  width: 24,
                  height: 24,
                  display: 'flex',
                  padding: 0,
                  position: 'absolute',
                  alignSelf: 'auto',
                  boxSizing: 'border-box',
                  alignItems: 'flex-start',
                  flexShrink: 1,
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 0,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  backgroundColor: 'transparent',
                }}
              >
              </View>
              <Text
                style={{
                  left: 8,
                  color: 'rgba(24, 24, 24, 1)',
                  height: 'auto',
                  position: 'absolute',
                  alignSelf: 'auto',
                  textAlign: 'left',
                  lineHeight: 20,
                }}
              >
                <Text>Password</Text>
              </Text>
              <TextInput
                style={styles.passwordInput}
                value={'**********'}
              />
              <Text
                style={{
                  top: 59,
                  right:15,
                  color: 'skyblue',
                  height: 'auto',
                  position: 'absolute',
                  alignSelf: 'auto',
                  textAlign: 'left',
                  lineHeight: 22,
                  opacity:5
                }}
                
              >
                <Text>Forgot password?</Text>
              </Text>
            </View>
            <View
              style={{
                top: 45,
                left: 16,
                width: 343,
                height: 92,
                display: 'flex',
                padding: 0,
                position: 'absolute',
                alignSelf: 'auto',
                boxSizing: 'border-box',
                alignItems: 'flex-start',
                flexShrink: 1,
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 0,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                backgroundColor: 'transparent',
              }}
            >
              <Text
                style={{
                  top: 38,
                  left: 8,
                  color: 'rgba(24, 24, 24, 1)',
                  height: 'auto',
                  position: 'absolute',
                  alignSelf: 'auto',
                  textAlign: 'left',
                  lineHeight: 20,
                }}
              >
                <Text>Username/Email</Text>
              </Text>
              <TextInput
                style={styles.input}
                value={'christina.angela123'}
              />
              <Text
                style={{
                  left: 8,
                  color: 'rgba(24, 24, 24, 1)',
                  height: 'auto',
                  position: 'absolute',
                  alignSelf: 'auto',
                  textAlign: 'left',
                  fontWeight:'500',
                  lineHeight: 28,
                }}
              >
                <Text>Login</Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              top: 106,
              left: 95,
              width: 186,
              height: 188,
              display: 'flex',
              padding: 0,
              position: 'absolute',
              alignSelf: 'auto',
              boxSizing: 'border-box',
              alignItems: 'flex-start',
              flexShrink: 1,
              borderColor: 'transparent',
              borderWidth: 0,
              marginRight: 0,
              borderRadius: 0,
              marginBottom: 0,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              backgroundColor: 'transparent',
            }}
          >
            <Text
              style={{
                top: 120,
                color: 'rgba(24, 24, 24, 1)',
                height: 'auto',
                fontSize: 24,
                position: 'absolute',
                alignSelf: 'auto',
                fontStyle: 'Regular',
                textAlign: 'center',
                fontWeight: '400',
                lineHeight: 34,
                fontStretch: 'normal',
                textDecoration: 'none',
              }}
            >
              <Text>
                <Text>Welcome Back, {'\n'}</Text>
                
                <Text>Angela Christina</Text>
              </Text>
            </Text>
            <View
              style={{
                top: 0,
                left: 9,
                width: 144,
                height: 48,
                display: 'flex',
                padding: 0,
                position: 'absolute',
                alignSelf: 'auto',
                boxSizing: 'border-box',
                alignItems: 'flex-start',
                flexShrink: 1,
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 0,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                backgroundColor: 'transparent',
              }}
            >
              <View
                style={{
                  top: 1,
                  left: 0,
                  width: 55.38132858276367,
                  height: 45.28570556640625,
                  display: 'flex',
                  padding: 0,
                  position: 'absolute',
                  alignSelf: 'auto',
                  boxSizing: 'border-box',
                  alignItems: 'flex-start',
                  flexShrink: 1,
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 0,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  backgroundColor: 'transparent',
                }}
              >
                <Logo height="50" width="100"  style={{
                    top: 0,
                    left: 0,
                    opacity: 5,
                    position: 'absolute',
                    boxSizing: 'border-box',
                  }} />
              </View>
              <Text
                style={{
                  left: 73,
                  color: 'rgba(0, 0, 0, 1)',
                  height: 'auto',
                  fontSize: 24,
                  position: 'absolute',
                  alignSelf: 'auto',
                  fontStyle: 'Regular',
                  textAlign: 'left',
                  fontWeight: '600',
                  lineHeight: 24,
                  fontStretch: 'normal',
                  textDecoration: 'none',
                  margin:4
                }}
              >
                <Text>
                  <Text>EDUCA{'\n'}</Text>
                  <Text>  
                    APP</Text>
                </Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              top: 0,
              left: 0,
              width: 375,
              height: 44,
              display: 'flex',
              position: 'absolute',
              boxSizing: 'border-box',
              alignItems: 'flex-start',
              flexShrink: 0,
              borderColor: 'transparent',
              marginRight: 0,
              borderRadius: 0,
              marginBottom: 0,
            }}
          >
            <View
              style={{
                top: 7,
                left: 21,
                width: 54,
                height: 21,
                display: 'flex',
                position: 'absolute',
                boxSizing: 'border-box',
                alignItems: 'flex-start',
                flexShrink: 0,
                borderColor: 'transparent',
                marginRight: 0,
                borderRadius: 0,
                marginBottom: 0,
              }}
            >
              <Text
                style={{
                  top: 6,
                  color: 'var(--dl-color-label_light-primary)',
                  height: 'auto',
                  position: 'absolute',
                  alignSelf: 'auto',
                  textAlign: 'center',
                  lineHeight: 20,
                  marginRight: 0,
                  marginBottom: 0,
                }}
              >
                <Text>9:41</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  button: {
    width: '93%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
},
linearGradient: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    // margin: 12,
},
buttonText: {
    fontSize: heightY * 0.020, /* font size is 16 */
    color: '#fafbfd',
    textTransform: 'uppercase',
    fontWeight: "bold"
},
input:{
  height: 40,
  margin: 0,
  borderBottomWidth: 1,
  padding: 2,
  top: 63,
  left: 8,
  color: 'rgba(24, 24, 24, 1)',
  height: 'auto',
  position: 'absolute',
  alignSelf: 'auto',
  textAlign: 'left',
  lineHeight: 24,
},
passwordInput:{
  height: 40,
  margin: 0,
  borderBottomWidth: 1,
  padding: 2,
  top: 25,
  left: 8,
  color: 'rgba(24, 24, 24, 1)',
  height: 'auto',
  position: 'absolute',
  alignSelf: 'auto',
  textAlign: 'left',
  lineHeight: 24,
}
});

export default LoginScreen;

