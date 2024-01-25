import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BasicJavascript = () => {
    const mobil = {
        nama:'mario',
        jenis:'kawasaki',
        berat:439,
        turunan:{
            pertama:'grandmax',
            kedua:'alphard',
        }
    }

    const angka = [1,2,3,4,5,6,7,8,9,10];
  return (
    <View style={{padding: 20,}}>
      <Text style={{textAlign:'center'}}>{mobil.berat}</Text>
      {angka.map((index) => (
        <Text>{index}</Text>
      ))}
      
    </View>
  )
}

export default BasicJavascript

const styles = StyleSheet.create({})