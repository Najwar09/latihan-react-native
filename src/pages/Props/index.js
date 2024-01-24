import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import gambar from '../../assets/image/gambar.jpeg';

const Story = props => {
  console.log(props.judul);
  return (
    <View style={{marginRight: 30}}>
      <Image
        source={gambar}
        style={{width: 80, height: 80, borderRadius: 80}}
      />
      <Text style={{textAlign:'center'}}>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <Story judul="Makassar" />
          <Story judul="Takalar" />
          <Story judul="Bulukumba" />
          <Story judul="Gowa" />
          <Story judul="Bone" />
          <Story judul="Makassar" />
          <Story judul="Takalar" />
          <Story judul="Bulukumba" />
          <Story judul="Gowa" />
          <Story judul="Bone" />
          <Story judul="Makassar" />
          <Story judul="Takalar" />
          <Story judul="Bulukumba" />
          <Story judul="Gowa" />
          <Story judul="Bone" />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});
