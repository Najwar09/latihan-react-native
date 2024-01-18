import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import gambar from './gambar.jpeg';
import SampleComponent from './SampleComponent';
import StylingComponent from './StylingComponent';
import FlexBox from './FlexBox';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent/> */}
        {/* <StylingComponent/> */}
        <FlexBox/>
      </ScrollView>
    </View>
  );
};





export default App;


