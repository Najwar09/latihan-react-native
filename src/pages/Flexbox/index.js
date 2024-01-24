import React, {Component, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';


// Class Component
// export class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('ini==>constructor');

//     this.state = {
//       pelanggan: 129,
//     };
//   }

//   componentDidMount() {
//     console.log('ini==>componentDidMount');
//     setTimeout(() => {
//       this.setState({
//         pelanggan: 500,
//       });
//     }, 2000);
//   }

//   componentDidUpdate() {
//     console.log('ini==>componentDidUpdate');
//   }

//   componentWillUnmount() {
//     console.log('ini==>componentWillUnmount');
//   }

//   render() {
//     console.log('ini==>render');
//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: 'gray',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}>
//           <View style={{backgroundColor: 'purple', width: 50, height: 50}} />
//           <View style={{backgroundColor: 'gold', width: 50, height: 50}} />
//           <View style={{backgroundColor: 'aqua', width: 50, height: 50}} />
//           <View style={{backgroundColor: 'pink', width: 50, height: 50}} />
//           <View style={{backgroundColor: 'orange', width: 50, height: 50}} />
//         </View>

//         <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//           <Text>Beranda</Text>
//           <Text>Video</Text>
//           <Text>Playlist</Text>
//           <Text>Komunitas</Text>
//           <Text>Channel</Text>
//           <Text>Tentang</Text>
//         </View>

//         <View style={{flexDirection: 'row', alignItems: 'center'}}>
//           <Image
//             source={{
//               uri: 'https://yt3.googleusercontent.com/yRJGGIYRZxJPrKIatPBpWVXcFhaE6Fac55B4ZVpQ-ipMFP3Tv5GswpaUwu1lIdJDGgapEzT7PA=s176-c-k-c0x00ffffff-no-rj',
//             }}
//             style={{
//               width: 100,
//               height: 100,
//               backgroundColor: 'red',
//               borderRadius: 50,
//             }}
//           />
//           <View style={{marginLeft: 10}}>
//             <Text style={{fontWeight: 'bold', fontSize: 15}}>
//               Dipanegara Computer Club
//             </Text>
//             <Text>{this.state.pelanggan} rb subscriber</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }


// Functional Component
const FlexBox = () => {

  const[pelanggan,setPelanggan] = useState(200);


  useEffect(() => {
    console.log("ComponentDidMount");
    setTimeout(() => {
      setPelanggan(999);
    }, 2000);
    
    return () => {
      console.log("componentDidUpdate");
    }
  },[pelanggan]);

  // useEffect(() => {
  //   console.log("ComponentDidUpdate");
  //   setTimeout(() => {
  //     setPelanggan(999);
  //   }, 2000);
  // },[pelanggan]);

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
        <View style={{marginLeft: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 15}}>
            Dipanegara Computer Club
          </Text>
          <Text>{pelanggan} rb subscriber</Text>
        </View>
      </View>
    </View>
  );
};
export default FlexBox;
