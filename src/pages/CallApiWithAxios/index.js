import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CallApiWithAxios = () => {
    
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

    //   menampilkan data
    const getDATA = async () => {
        try {
            const res = await axios.get('https://reqres.in/api/users/3')
            setDataUser(res.data.data)
            console.log(res.data.data)
        } catch (error) {
            alert(error.message)
        }
    }

    //   menyimpan data
    const postData = async () => {
        const dataForApi = {
            name: 'morpheus',
            job: 'leader',
        };

        try {
            const res = await axios.post('https://reqres.in/api/users', dataForApi)
            setJob(res.data)
        } catch (error) {
            alert(error.message)
        }
    };
    return (
        <View style={{ padding: 20 }}>
            <Text style={{ textAlign: 'center' }}>Call Api With Axios</Text>
            <Button title="GET Data" onPress={getDATA} />
            {dataUser.avatar && (
                <Image
                    source={{ uri: dataUser.avatar }}
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                />
            )}
            <Text>{dataUser.email}</Text>
            <Text>{dataUser.first_name}</Text>
            <Text>{dataUser.last_name}</Text>
            <Text>Response GET Data</Text>
            <View style={{ height: 2, backgroundColor: 'white', marginVertical: 20 }} />
            <Button title="POST Data" onPress={postData} />
            <Text>Response POST Data</Text>
            <Text>{datajob.name}</Text>
            <Text>{datajob.job}</Text>
        </View>
    );
};

export default CallApiWithAxios;

const styles = StyleSheet.create({});
