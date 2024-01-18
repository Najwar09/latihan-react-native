import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export class FlexBox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'gray',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: 'purple', width: 50, height: 50}} />
          <View style={{backgroundColor: 'gold', width: 50, height: 50}} />
          <View style={{backgroundColor: 'aqua', width: 50, height: 50}} />
          <View style={{backgroundColor: 'pink', width: 50, height: 50}} />
          <View style={{backgroundColor: 'orange', width: 50, height: 50}} />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{
              uri: 'https://yt3.googleusercontent.com/yRJGGIYRZxJPrKIatPBpWVXcFhaE6Fac55B4ZVpQ-ipMFP3Tv5GswpaUwu1lIdJDGgapEzT7PA=s176-c-k-c0x00ffffff-no-rj',
            }}
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'red',
              borderRadius: 50,
            }}
          />
          <View style={{marginLeft: 10,}}>
            <Text style={{fontWeight: 'bold',fontSize: 15,}}>Dipanegara Computer Club</Text>
            <Text>5,81 rb subscriber</Text>
          </View>

        </View>
      </View>
    );
  }
}

export default FlexBox;
