import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import gambar from './gambar.jpeg';

const App = () => {
  return (
    <View>
      <StylingComponent />
    </View>
  );
};

const StylingComponent = () => {
  return (
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
        <TouchableOpacity>
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
  );
};

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: '50%', backgroundColor: 'red'}} />
      <Text>Najwar</Text>
      <Last />
      <TextInput style={{borderWidth: 1}} />
      <Foto />
      <BoxGreen />
    </View>
  );
};

const Last = () => {
  return (
    <View>
      <Text>ramadhan</Text>
    </View>
  );
};

const Foto = () => {
  return (
    <Image
      source={{
        uri: 'https://awsimages.detik.net.id/community/media/visual/2023/09/23/sosok-pembuat-patung-bung-karno-di-banyuasin_43.jpeg?w=600&q=90',
      }}
      style={{width: 100, height: 100}}
    />
  );
};

export class BoxGreen extends Component {
  render() {
    return (
      <View>
        <Text>ini adalah komponen yang terbuat dari class komponent</Text>
        <Image
          source={{
            uri: 'https://awsimages.detik.net.id/community/media/visual/2023/09/23/sosok-pembuat-patung-bung-karno-di-banyuasin_43.jpeg?w=600&q=90',
          }}
          style={{width: 100, height: 100, borderRadius: 100}}
        />
        <Text>INI ADALAH CLASS KOMPONEN BOS</Text>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange',
    marginLeft: 20,
    marginTop: 40,
  },
});
