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
import Communication from './pages/Communication';
import Keranjang from './Components/Keranjang';
import BasicJavascript from './pages/BasicJavascript';
import CallApiWithVanilla from './pages/CallApiWithVanilla';
import CallApiWithAxios from './pages/CallApiWithAxios';

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
        {/* <StateDinamis/> */}
        {/* <Communication /> */}
        {/* <BasicJavascript /> */}
        {/* <CallApiWithVanilla /> */}
        <CallApiWithAxios/> 
      </ScrollView>
    </View>
  );
};

export default App;
