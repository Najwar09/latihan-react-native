import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/Flexbox';
import Position from './pages/Position';
import PropsDinamis from './pages/Props';
import StateDinamis from './pages/State';

const App = () => {
  const [isShow, setIsShow] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsShow(false);
  //   }, 6000);

  // }, [])

  return (
    <View>
      <ScrollView>
        {/* <Text>SampleComponent</Text>
        <SampleComponent/>
        <Text>StylingComponent</Text>
        <StylingComponent/> */}
        {/* <Text>FlexBox</Text> */}
        {/* {isShow && <FlexBox/>} */}
        {/* <Text>Position</Text>
        <Position/> */}
        {/* <PropsDinamis/> */}
        <StateDinamis/>
      </ScrollView>
    </View>
  );
};

export default App;
