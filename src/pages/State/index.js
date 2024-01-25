import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import React, {Component, useEffect, useState} from 'react';

// dengan function component
const Counter = () => {
  const [tambah, setTambah] = useState(0);
  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 50}}>{tambah}</Text>
      <Button title="tambah" onPress={() => setTambah(tambah + 1)} />
      <Button
        title="kurang"
        onPress={() => setTambah(tambah - 1)}
        style={{marginTop: 30}}
      />
    </View>
  );
};

// dengan class component
class CounterClass extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <View>
        <Text style={{textAlign: 'center', fontSize: 50}}>
          {this.state.number}
        </Text>
        <Button title="tambah" onPress={() => this.setState({number: this.state.number + 1})}/>
        {/* <Button
        title="kurang"
        onPress={() => setTambah(tambah - 1)}
        style={{marginTop: 30}}
      /> */}
      </View>
    );
  }
}

const StateDinamis = () => {
  return (
    <View style={{padding: 10}}>
      <Text style={{textAlign: 'center'}}>Component Dinamis dengan State</Text>
      <Counter />
      <CounterClass/>
    </View>
  );
};

export default StateDinamis;

const styles = StyleSheet.create({});
