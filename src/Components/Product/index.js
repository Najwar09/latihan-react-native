import {StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import React from 'react';
import gambar from '../../assets/image/gambar.jpeg';

const Product = (props) => {
  return (
    <View>
      <Text>Product</Text>
      <View>
        {/* <Text style={styles.text}>Styling component</Text>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'aqua',
            borderWidth: 2,
            borderColor: 'gold',
            marginTop: 20,
            marginLeft: 20,
          }}
        /> */}
        <View
          style={{
            padding: 12,
            borderWidth: 1,
            borderColor: 'yellow',
            backgroundColor: '#f2f2f2',
            width: 212,
            borderRadius: 8,
          }}>
          <Image
            source={gambar}
            style={{width: 188, height: 107, borderRadius: 8}}
          />
          <Text
            style={{
              color: 'black',
              marginTop: 16,
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            Milad DCC
          </Text>
          <Text
            style={{
              color: '#f2994a',
              marginTop: 14,
              fontSize: 12,
              fontWeight: 'bold',
            }}>
            1999-2024
          </Text>
          <Text
            style={{
              color: 'black',
              marginTop: 12,
              fontSize: 12,
              fontWeight: '300',
            }}>
            Bira-Bulukumba
          </Text>
          <TouchableOpacity onPress={props.tekan}>
            <View
              style={{
                backgroundColor: '#6fcf97',
                paddingVertical: 6,
                borderRadius: 25,
                marginTop: 20,
              }}>
              <Text
                style={{fontSize: 14, fontWeight: '600', textAlign: 'center'}}>
                Join
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
