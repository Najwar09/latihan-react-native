import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {Component} from 'react';

const SampleComponent = () => {
  return (
    <View style={{backgroundColor: 'yellow',}}>
      <View style={{width: 50, height: 900, backgroundColor: 'red'}} />
      <Text>Najwar</Text>
      <Last />
      <TextInput style={{borderWidth: 1}} />
      <Foto />
      {/* <BoxGreen /> */}
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

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange',
    marginLeft: 20,
    marginTop: 40,
  },
});


export default SampleComponent;
