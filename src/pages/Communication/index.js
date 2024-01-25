import { StyleSheet, Text, View ,Image} from 'react-native'
import React, { useState } from 'react'
import Keranjang from '../../Components/Keranjang'
import Product from '../../Components/Product'
import Fox from '../../assets/image/fox.svg'

const Communication = () => {
    const [jumlah,setJumlah] = useState(0);
  return (
    <View style={{padding: 20,backgroundColor: 'white',}}>
      <Text style={{textAlign:'center'}}>Materi Komunikasi Antar Komponent</Text>
      <Keranjang jumlah={jumlah}/>
      <Product tekan={() => setJumlah(jumlah+1)}/>
      {/* <Image source={Fox} style={{width: 100,height: 100}}/> */}
      {/* <Fox style={{width: 50,height: 50,}}/> */}
    </View>
  )
}

export default Communication

const styles = StyleSheet.create({})