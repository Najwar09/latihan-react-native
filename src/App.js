import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/Flexbox';
import Position from './pages/Position';

const App = () => {
  return (
    <View>
      <ScrollView>
        <Text>SampleComponent</Text>
        <SampleComponent/>
        <Text>StylingComponent</Text>
        <StylingComponent/>
        <Text>FlexBox</Text>
        <FlexBox/>
        <Text>Position</Text>
        <Position/>
      </ScrollView>
    </View>
  );
};

export default App;
