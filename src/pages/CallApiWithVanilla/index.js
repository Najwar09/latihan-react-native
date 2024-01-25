import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const CallApiWithVanilla = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const [datajob, setJob] = useState({
    name: '',
    job: '',
  });

  useEffect(() => {
    // Call Api Method GET
    // fetch('https://reqres.in/api/users/2')
    //   .then(response => response.json())
    //   .then(json => console.log(json));
    //   Call Api Method POST
    // const data = {
    //     name: "morpheus",
    //     job: "leader"
    // }
    // // console.log('sebelum',data);
    // // console.log('sesudah',JSON.stringify(data))
    // fetch('https://reqres.in/api/users',{
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // })
    // .then(response => response.json())
    // .then(json => console.log('post response: ', json))
  }, []);

  const getData = () => {
    fetch('https://reqres.in/api/users/2')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json.data);
      });
  };

  const postData = () => {
    const data = {
      name: 'morpheus',
      job: 'leader',
    };

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(json => {
        console.log('post response: ', json)
        setJob(json)
    });
  };
  return (
    <View style={{padding: 20}}>
      <Text style={{textAlign: 'center'}}>CallApiWithVanilla</Text>
      <Button title="GET Data" onPress={getData} />
      <Image
        source={{uri: dataUser.avatar}}
        style={{width: 100, height: 100, borderRadius: 50}}
      />
      <Text>{dataUser.email}</Text>
      <Text>{dataUser.first_name}</Text>
      <Text>{dataUser.last_name}</Text>
      <Text>Response GET Data</Text>
      <View style={{height: 2, backgroundColor: 'white', marginVertical: 20}} />
      <Button title="POST Data" onPress={postData}/>
      <Text>Response POST Data</Text>
      <Text>{datajob.name}</Text>
      <Text>{datajob.job}</Text>
    </View>
  );
};

export default CallApiWithVanilla;

const styles = StyleSheet.create({});
