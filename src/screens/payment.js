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
import Visa from '../../assets/payment/logosvisa1140-6fg7.svg';
import MasterCard from '../../assets/payment/logosmastercard1140-2z5o.svg';
import CheckBoxLogo from  '../../assets/payment/Vector1142-6myf.svg';
import Applepay from '../../assets/payment/logosapplepay1141-qqh4.svg';
import Pay from  '../../assets/payment/Vector1143-8np.svg';
import Pal from  '../../assets/payment/Vector1143-rhp2.svg';
import ClipBoardList from '../../assets/payment/mdiclipboardlist1143-k3u.svg';
import Wallet from '../../assets/payment/bxbxswallet1144-tnk.svg';
import Icroundpayments from '../../assets/payment/icroundpayments1144-hd69.svg';
import DisableRadioBtn from '../../assets/payment/evaradiobuttonoffoutline1139-v8s.svg'
function PaymentScreen() {
  return (
    <View>
      <View
        style={{
          backgroundColor: 'rgba(253, 253, 253, 1)',
          width: '100%',
          maxWidth: 375,
          height: 812,
          display: 'flex',
          alignItems: 'flex-start',
          flexShrink: 0,
          boxSizing: 'border-box',
          borderRadius: 0,
          borderColor: 'transparent',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <View
          style={{
            backgroundColor: 'rgba(253, 253, 253, 1)',
            width: 375,
            height: 214,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            padding: 0,
            marginRight: 0,
            marginBottom: 0,
            flexShrink: 1,
            alignSelf: 'auto',
            boxSizing: 'border-box',
            borderRadius: 0,
            borderWidth: 0,
            borderColor: 'transparent',
            position: 'absolute',
            top: 564,
            left: 0,
          }}
        >
          <View
            style={{
              backgroundColor: 'transparent',
              width: 84,
              height: 47,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              padding: 0,
              flexShrink: 1,
              alignSelf: 'auto',
              boxSizing: 'border-box',
              borderRadius: 0,
              borderWidth: 0,
              borderColor: 'transparent',

              position: 'absolute',
              top: 30,
              left: 16,
            }}
          >
            <Text
              style={{
                color: 'rgba(24, 24, 24, 1)',
                height: 'auto',
                textAlign: 'left',
                lineHeight: 22,
                alignSelf: 'auto',
                position: 'absolute',
              }}
            >
              <Text>Purchase Date</Text>
            </Text>
            <Text
              style={{
                color: 'rgba(24, 24, 24, 1)',
                height: 'auto',
                textAlign: 'left',
                lineHeight: 20,
                alignSelf: 'auto',
                position: 'absolute',
                top: 27,
              }}
            >
              <Text>01/09/2020</Text>
            </Text>
          </View>
          <Text
            style={{
              color: 'rgba(24, 24, 24, 1)',
              height: 'auto',
              textAlign: 'left',
              lineHeight: 22,
              alignSelf: 'auto',
              position: 'absolute',
              top: 152,
              left: 16,
            }}
          >
            <Text>Total Price</Text>
          </Text>
          <Text
            style={{
              color: 'rgba(24, 24, 24, 1)',
              height: 'auto',
              textAlign: 'left',
              lineHeight: 28,
              alignSelf: 'auto',
              position: 'absolute',
              top: 149,
              left: 149,
            }}
          >
            <Text>$120</Text>
          </Text>
          <View
            style={{
              backgroundColor: 'transparent',
              width: 30,
              height: 47,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              padding: 0,
              flexShrink: 1,
              alignSelf: 'auto',
              boxSizing: 'border-box',
              borderRadius: 0,
              borderWidth: 0,
              borderColor: 'transparent',

              position: 'absolute',
              top: 30,
              left: 145,
            }}
          >
            <Text
              style={{
                color: 'rgba(24, 24, 24, 1)',
                height: 'auto',
                textAlign: 'left',
                lineHeight: 22,
                alignSelf: 'auto',
                position: 'absolute',
              }}
            >
              <Text>Price</Text>
            </Text>
            <Text
              style={{
                color: 'rgba(24, 24, 24, 1)',
                height: 'auto',
                textAlign: 'left',
                lineHeight: 20,
                alignSelf: 'auto',
                position: 'absolute',
                top: 27,
              }}
            >
              <Text>$240</Text>
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'transparent',
              width: 62,
              height: 47,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              padding: 0,
              flexShrink: 1,
              alignSelf: 'auto',
              boxSizing: 'border-box',
              borderRadius: 0,
              borderWidth: 0,
              borderColor: 'transparent',

              position: 'absolute',
              top: 30,
              left: 220,
            }}
          >
            <Text
              style={{
                color: 'rgba(24, 24, 24, 1)',
                height: 'auto',
                textAlign: 'left',
                lineHeight: 22,
                alignSelf: 'auto',
                position: 'absolute',
              }}
            >
              <Text>Discount</Text>
            </Text>
            <Text
              style={{
                color: 'rgba(24, 24, 24, 1)',
                height: 'auto',
                textAlign: 'left',
                lineHeight: 20,
                alignSelf: 'auto',
                position: 'absolute',
                top: 27,
              }}
            >
              <Text>-$120</Text>
            </Text>
            <Text
              style={{
                color: 'var(--dl-color-default-blue)',
                height: 'auto',
                textAlign: 'left',
                lineHeight: 20,
                alignSelf: 'auto',
                position: 'absolute',
                top: 27,
                left: 34,
              }}
            >
              <Text>(50%)</Text>
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(81, 195, 254, 1)',
              width: 136,
              height: 42,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              padding: 0,
              flexShrink: 1,
              alignSelf: 'auto',
              boxSizing: 'border-box',
              borderRadius: 0,
              borderWidth: 0,
              borderColor: 'transparent',

              position: 'absolute',
              top: 142,
              left: 218,
            }}
          >
            <Text
              style={{
                color: 'rgba(253, 253, 253, 1)',
                height: 'auto',
                textAlign: 'center',
                lineHeight: 22,
                alignSelf: 'auto',
                position: 'absolute',
                top: 10,
                left: 40,
              }}
            >
              <Text>Checkout</Text>
            </Text>
          </View>
          {/* <Image
            source={require('../playground_assets/line91139-booy.svg')}
            alt="Line91139"
            style={{
              width: 375,
              height: 0,
              boxSizing: 'border-box',
              position: 'absolute',
              top: 112,
              left: 0,
            }}
          ></Image>
          <Image
            source={require('../playground_assets/line101139-szs.svg')}
            alt="Line101139"
            style={{
              width: 62,
              height: 0,
              boxSizing: 'border-box',
              position: 'absolute',
              top: 165,
              left: 82,
            }}
          ></Image> */}
        </View>
        <View
          style={{
            backgroundColor: 'transparent',
            width: 343,
            height: 228,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            padding: 0,
            marginRight: 0,
            marginBottom: 0,
            flexShrink: 1,
            alignSelf: 'auto',
            boxSizing: 'border-box',
            borderRadius: 0,
            borderWidth: 0,
            borderColor: 'transparent',
            position: 'absolute',
            top: 140,
            left: 16,
          }}
        >
          <Text
            style={{
              color: 'rgba(24, 24, 24, 1)',
              height: 'auto',
              textAlign: 'left',
              lineHeight: 24,
              alignSelf: 'auto',
              position: 'absolute',
            }}
          >
            <Text>Payment Method</Text>
          </Text>
          <View
            style={{
              backgroundColor: 'rgba(253, 253, 253, 1)',
              width: 343,
              height: 53,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              padding: 0,
              flexShrink: 1,
              alignSelf: 'auto',
              boxSizing: 'border-box',
              borderRadius: 0,
              borderWidth: 0,
              borderColor: 'transparent',

              position: 'absolute',
              top: 39,
              left: 0,
            }}
          >
            <View
              style={{
                backgroundColor: 'transparent',
                width: 24,
                height: 24,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 0,
                flexShrink: 1,
                alignSelf: 'auto',
                boxSizing: 'border-box',
                borderRadius: 0,
                borderWidth: 0,
                borderColor: 'transparent',
  
                position: 'absolute',
                top: 15,
                left: 15,
              }}
            >
                  <DisableRadioBtn height='24' width='24' style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}/>
            </View>
            <Text
              style={{
                color: 'rgba(79, 79, 79, 1)',
                height: 'auto',
                textAlign: 'left',
                lineHeight: 22,
                alignSelf: 'auto',
                position: 'absolute',
                top: 16,
                left: 49,
              }}
            >
              <Text>Credit Card</Text>
            </Text>
            <View
              style={{
                backgroundColor: 'transparent',
                width: 30,
                height: 24,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 0,
                flexShrink: 1,
                alignSelf: 'auto',
                boxSizing: 'border-box',
                borderRadius: 0,
                borderWidth: 0,
                borderColor: 'transparent',
  
                position: 'absolute',
                top: 15,
                left: 298,
              }}
            >
              <MasterCard height='24' width='30' style={{
                  boxSizing: 'border-box',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}/>
              {/* <Image
                source={require('../playground_assets/logosmastercard1140-20u.svg')}
                alt="logosmastercard1140"
                style={{
                  width: 30,
                  height: 24,
                  boxSizing: 'border-box',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              ></Image> */}
            </View>
            <View
              style={{
                backgroundColor: 'transparent',
                width: 74,
                height: 24,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 0,
                flexShrink: 1,
                alignSelf: 'auto',
                boxSizing: 'border-box',
                borderRadius: 0,
                borderWidth: 0,
                borderColor: 'transparent',
  
                position: 'absolute',
                top: 15,
                left: 209,
              }}
            >
              <Visa height='24' width='74' style={{
                  boxSizing: 'border-box',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}/>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(253, 253, 253, 1)',
              width: 343,
              height: 53,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              padding: 0,
              flexShrink: 1,
              alignSelf: 'auto',
              boxSizing: 'border-box',
              borderRadius: 0,
              borderWidth: 0,
              borderColor: 'transparent',

              position: 'absolute',
              top: 175,
              left: 0,
            }}
          >
            <View
              style={{
                backgroundColor: 'transparent',
                width: 24,
                height: 24,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 0,
                flexShrink: 1,
                alignSelf: 'auto',
                boxSizing: 'border-box',
                borderRadius: 0,
                borderWidth: 0,
                borderColor: 'transparent',
  
                position: 'absolute',
                top: 15,
                left: 15,
              }}
            >
              <DisableRadioBtn height='24' width='24' style={{
                boxSizing: 'border-box',
                position: 'absolute',
                top: 0,
                left: 0,
              }}/>
            </View>
            <Text
              style={{
                color: 'rgba(79, 79, 79, 1)',
                height: 'auto',
                textAlign: 'left',
                lineHeight: 22,
                alignSelf: 'auto',
                position: 'absolute',
                top: 16,
                left: 49,
              }}
            >
              <Text>Apple Pay</Text>
            </Text>
            <View
              style={{
                backgroundColor: 'transparent',
                width: 58,
                height: 24,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 0,
                flexShrink: 1,
                alignSelf: 'auto',
                boxSizing: 'border-box',
                borderRadius: 0,
                borderWidth: 0,
                borderColor: 'transparent',
  
                position: 'absolute',
                top: 15,
                left: 270,
              }}
            >
              {/* <Image
                source={require('../playground_assets/logosapplepay1141-k3g.svg')}
                alt="logosapplepay1141"
                style={{
                  width: 58,
                  height: 24,
                  boxSizing: 'border-box',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              ></Image> */}
                <Applepay height='24' width='58' style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}/>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(253, 253, 253, 1)',
              width: 343,
              height: 53,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              padding: 0,
              flexShrink: 1,
              alignSelf: 'auto',
              boxSizing: 'border-box',
              borderRadius: 0,
              borderWidth: 0,
              borderColor: 'transparent',
              position: 'absolute',
              top: 107,
              left: 0,
            }}
          >
            <View
              style={{
                backgroundColor: 'transparent',
                width: 24,
                height: 24,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 0,
                flexShrink: 1,
                alignSelf: 'auto',
                boxSizing: 'border-box',
                borderRadius: 0,
                borderWidth: 0,
                borderColor: 'transparent',
  
                position: 'absolute',
                top: 15,
                left: 15,
              }}
            >
              <TouchableOpacity
                style={{
                  width: 24,
                  height: 24,
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexShrink: 0,
                  boxSizing: 'border-box',
                  borderRadius: 0,
                  borderColor: 'transparent',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  overflow: 'hidden',
                }}
              >
                <Text>
                  <View
                    style={{
                      backgroundColor: 'transparent',
                      width: 20.000003814697266,
                      height: 20.0000057220459,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      padding: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      flexShrink: 1,
                      alignSelf: 'auto',
                      boxSizing: 'border-box',
                      borderRadius: 0,
                      borderWidth: 0,
                      borderColor: 'transparent',
        
                      position: 'absolute',
                      top: 2,
                      left: 1.9999955892562866,
                    }}
                  >
                  <CheckBoxLogo height='20' width='20' style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}/>

                  </View>
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: 'var(--dl-color-default-blue)',
                height: 'auto',
                textAlign: 'left',
                lineHeight: 22,
                alignSelf: 'auto',
                position: 'absolute',
                top: 16,
                left: 49,
              }}
            >
              <Text>PayPal</Text>
            </Text>
            <View
              style={{
                backgroundColor: 'transparent',
                width: 64,
                height: 24,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 0,
                flexShrink: 1,
                alignSelf: 'auto',
                boxSizing: 'border-box',
                borderRadius: 0,
                borderWidth: 0,
                borderColor: 'transparent',
                position: 'absolute',
                top: 15,
                left: 264,
              }}
            >
              <View
                style={{
                  width: 64,
                  height: 24,
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexShrink: 0,
                  boxSizing: 'border-box',
                  borderRadius: 0,
                  borderColor: 'transparent',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  overflow: 'hidden',
                }}
              >
                <View
                  style={{
                    backgroundColor: 'transparent',
                    width: 63.73893737792969,
                    height: 17.03999900817871,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    padding: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    flexShrink: 1,
                    alignSelf: 'auto',
                    boxSizing: 'border-box',
                    borderRadius: 0,
                    borderWidth: 0,
                    borderColor: 'transparent',
      
                    position: 'absolute',
                    top: 4.907645225524902,
                    left: 0.06452924013137817,
                  }}
                >
                  <Pay height='17' width='36' style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}/>
                <Pal height='14' width='28' style={{
					            boxSizing: 'border-box',
                      position: 'absolute',
                      top: 0,
                      left: 35.36197280883789,
                  }}/>

                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'rgba(253, 253, 253, 1)',
            width: 375,
            height: 81,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            padding: 0,
            marginRight: 0,
            marginBottom: 0,
            flexShrink: 1,
            alignSelf: 'auto',
            boxSizing: 'border-box',
            borderRadius: 0,
            borderWidth: 0,
            borderColor: 'transparent',
            position: 'absolute',
            top: 44,
            left:0,
          }}
        >
          <View
            style={{
              backgroundColor: 'transparent',
              width: 41,
              height: 51,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              padding: 0,
              flexShrink: 1,
              alignSelf: 'auto',
              boxSizing: 'border-box',
              borderRadius: 0,
              borderWidth: 0,
              borderColor: 'transparent',

              position: 'absolute',
              top: 15,
              left: 34,
            }}
          >
            <View
              style={{
                backgroundColor: 'transparent',
                width: 24,
                height: 24,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 0,
                flexShrink: 1,
                alignSelf: 'auto',
                boxSizing: 'border-box',
                borderRadius: 0,
                borderWidth: 0,
                borderColor: 'transparent',
  
                position: 'absolute',
                top: 0,
                left: 9,
              }}
            >
              <ClipBoardList height='17' width='36' style={{
                  boxSizing: 'border-box',
                  position: 'absolute',
                  top: 0,
                  left: 0,
              }}/>
            </View>
            <Text
              style={{
                color: 'var(--dl-color-default-blue)',
                height: 'auto',
                textAlign: 'center',
                lineHeight: 22,
                alignSelf: 'auto',
                position: 'absolute',
                top: 29,
              }}
            >
              <Text>Review</Text>
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'transparent',
              width: 97,
              height: 51,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              padding: 0,
              flexShrink: 1,
              alignSelf: 'auto',
              boxSizing: 'border-box',
              borderRadius: 0,
              borderWidth: 0,
              borderColor: 'transparent',

              position: 'absolute',
              top: 15,
              left: 135,
            }}
          >
            <Text
              style={{
                color: 'var(--dl-color-default-blue)',
                height: 'auto',
                textAlign: 'center',
                lineHeight: 22,
                alignSelf: 'auto',
                position: 'absolute',
                top: 29,
              }}
            >
              <Text>Payment Method</Text>
            </Text>
            <View
              style={{
                backgroundColor: 'transparent',
                width: 24,
                height: 24,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 0,
                flexShrink: 1,
                alignSelf: 'auto',
                boxSizing: 'border-box',
                borderRadius: 0,
                borderWidth: 0,
                borderColor: 'transparent',
  
                position: 'absolute',
                top: 0,
                left: 36,
              }}
            >
                  <Wallet height='24' width='24' style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}/>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'transparent',
              width: 50,
              height: 51,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              padding: 0,
              flexShrink: 1,
              alignSelf: 'auto',
              boxSizing: 'border-box',
              borderRadius: 0,
              borderWidth: 0,
              borderColor: 'transparent',

              position: 'absolute',
              top: 15,
              left: 292,
            }}
          >
            <View
              style={{
                backgroundColor: 'transparent',
                width: 24,
                height: 24,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 0,
                flexShrink: 1,
                alignSelf: 'auto',
                boxSizing: 'border-box',
                borderRadius: 0,
                borderWidth: 0,
                borderColor: 'transparent',
  
                position: 'absolute',
                top: 0,
                left: 13,
              }}
            >
              <Icroundpayments height='24' width='24' style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}/>
            </View>
            <Text
              style={{
                color: 'rgba(189, 189, 189, 1)',
                height: 'auto',
                textAlign: 'center',
                lineHeight: 22,
                alignSelf: 'auto',
                position: 'absolute',
                top: 29,
              }}
            >
              <Text>Payment</Text>
            </Text>
          </View>
          {/* <Image
            source={require('../playground_assets/line71144-1v3g.svg')}
            alt="Line71144"
            style={{
              width: 91,
              height: 0,
              boxSizing: 'border-box',
              position: 'absolute',
              top: 27,
              left: 75,
            }}
          ></Image>
          <Image
            source={require('../playground_assets/line81145-euth.svg')}
            alt="Line81145"
            style={{
              width: 94,
              height: 0,
              boxSizing: 'border-box',
              position: 'absolute',
              top: 27,
              left: 200,
            }}
          ></Image> */}
        </View>
        <View
          style={{
            width: 375,
            height: 34,
            display: 'flex',
            alignItems: 'flex-start',
            marginRight: 0,
            marginBottom: 0,
            flexShrink: 0,
            boxSizing: 'border-box',
            borderRadius: 0,
            borderColor: 'transparent',
            position: 'absolute',
            top: 778,
            left: 0,
          }}
        >
          {/* <Image
            source={require('../playground_assets/rectangle301145-pj7m-200h.png')}
            alt="Rectangle301145"
            style={{
              width: 375,
              height: 34,
              marginRight: 0,
              marginBottom: 0,
              boxSizing: 'border-box',
              borderColor: 'transparent',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          ></Image>
          <Image
            source={require('../playground_assets/homeindicator1145-2ipd5-200h.png')}
            alt="HomeIndicator1145"
            style={{
              width: 134,
              height: 5,
              marginRight: 0,
              marginBottom: 0,
              boxSizing: 'border-box',
              borderRadius: 100,
              borderColor: 'rgba(150, 150, 150, 1)',
              position: 'absolute',
              top: 21,
              left: 121,
            }}
          ></Image> */}
        </View>
        <View
          style={{
            width: 375,
            height: 44,
            display: 'flex',
            alignItems: 'flex-start',
            marginRight: 0,
            marginBottom: 0,
            flexShrink: 0,
            boxSizing: 'border-box',
            borderRadius: 0,
            borderColor: 'transparent',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          {/* <Image
            source={require('../playground_assets/rectangle291145-9f1j-200h.png')}
            alt="Rectangle291145"
            style={{
              width: 375,
              height: 44,
              marginRight: 0,
              marginBottom: 0,
              boxSizing: 'border-box',
              borderColor: 'transparent',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          ></Image> */}
          <View
            style={{
              backgroundColor: 'transparent',
              width: 24.32803726196289,
              height: 11.333333015441895,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              padding: 0,
              marginRight: 0,
              marginBottom: 0,
              flexShrink: 1,
              alignSelf: 'auto',
              boxSizing: 'border-box',
              borderRadius: 0,
              borderWidth: 0,
              borderColor: 'transparent',

              position: 'absolute',
              top: 17.33333396911621,
              left: 336.33331298828125,
            }}
          >
            {/* <Image
              source={require('../playground_assets/border1145-u4vf-200h.png')}
              alt="Border1145"
              style={{
                width: 22,
                height: 11,
                boxSizing: 'border-box',
                borderRadius: 2.6666667461395264,
                borderWidth: 1,
                borderColor: 'rgba(24, 24, 24, 1)',
                borderStyle: 'solid',
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: 0.35',
              }}
            ></Image>
            <Image
              source={require('../playground_assets/cap1145-nry.svg')}
              alt="Cap1145"
              style={{
                width: 1,
                height: 4,
                boxSizing: 'border-box',
                position: 'absolute',
                top: 3.6666667461395264,
                left: 23,
                opacity: 0.40',
              }}
            ></Image>
            <Image
              source={require('../playground_assets/capacity1145-kxn-200h.png')}
              alt="Capacity1145"
              style={{
                width: 18,
                height: 7,
                boxSizing: 'border-box',
                borderRadius: 1.3333333730697632,
                borderColor: 'transparent',
                position: 'absolute',
                top: 1.9999998807907104,
                left: 2,
              }}
            ></Image> */}
          </View>
          {/* <Image
            source={require('../playground_assets/wifi1146-605u.svg')}
            alt="Wifi1146"
            style={{
              width: 15,
              height: 11,
              marginRight: 0,
              marginBottom: 0,
              boxSizing: 'border-box',
              position: 'absolute',
              top: 17.330673217773438,
              left: 316,
            }}
          ></Image>
          <Image
            source={require('../playground_assets/cellularconnection1146-dz9f.svg')}
            alt="CellularConnection1146"
            style={{
              width: 17,
              height: 11,
              marginRight: 0,
              marginBottom: 0,
              boxSizing: 'border-box',
              position: 'absolute',
              top: 17.666667938232422,
              left: 294,
            }}
          ></Image> */}
          <View
            style={{
              width: 54,
              height: 21,
              display: 'flex',
              alignItems: 'flex-start',
              marginRight: 0,
              marginBottom: 0,
              flexShrink: 0,
              boxSizing: 'border-box',
              borderRadius: 0,
              borderColor: 'transparent',
              position: 'absolute',
              top: 7,
              left: 21,
            }}
          >
            <Text
              style={{
                color: 'var(--dl-color-label_light-primary)',
                height: 'auto',
                textAlign: 'center',
                lineHeight: 20,
                marginRight: 0,
                marginBottom: 0,
                alignSelf: 'auto',
                position: 'absolute',
                top: 6,
              }}
            >
              <Text>9:41</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default PaymentScreen;

