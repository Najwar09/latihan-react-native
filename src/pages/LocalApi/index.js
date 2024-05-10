import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'



const Item = (props) => {
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={props.tes}>
                <Image source={{ uri: 'https://i.pravatar.cc/150?u=najwar@pravatar.com' }} style={styles.avatar} />
            </TouchableOpacity>
            <View style={styles.desc}>
                <Text style={styles.descName}>{props.name}</Text>
                <Text style={styles.descEmail}>{props.angkatan}</Text>
                <Text style={styles.descBidang}>{props.bc}</Text>
            </View>
            <TouchableOpacity onPress={props.delete}>
                <Text style={styles.delete}>x</Text>
            </TouchableOpacity>
        </View>
    )
}



const LocalApi = () => {
    const [name, setName] = useState("");
    const [angkatan, setAngkatan] = useState("");
    const [bc, setBc] = useState("");
    const [anggotas, setAnggota] = useState([])
    const [button, setButton] = useState("simpan")
    const [userpilih, setUserPilih] = useState("");

    const createTwoButtonAlert = (anggota) =>
        Alert.alert('Peringatan', 'Serius anda ingin hapus data ini?', [
            {
                text: 'Cancel',
                onPress: () => console.log('cancel',anggota),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => DeleteData(anggota) },
        ]);

    // POST
    const Kirim = () => {
        const data = {
            name,
            angkatan,
            bc,
        }
        if (button === "simpan") {
            axios.post('http://192.168.1.26:3000/anggota', data)


        } else {
            axios.put(`http://192.168.1.26:3000/anggota/${userpilih.id}`, data)
            setButton("simpan")

        }
        setBc("");
        setAngkatan("");
        setName("");
        // GetsData();
    }

    // GET
    const GetsData = () => {
        axios.get('http://192.168.1.26:3000/anggota')
            .then(res => {
                setAnggota(res.data);
            })
    }

    // UPDATE
    const UpdateData = (anggota) => {
        setName(anggota.name);
        setAngkatan(anggota.angkatan);
        setBc(anggota.bc);
        setButton("update");
        setUserPilih(anggota);
    }

    // DELETE
    const DeleteData = (anggota) => {
        axios.delete(`http://192.168.1.26:3000/anggota/${anggota.id}`);


    }

    useEffect(() => {
        GetsData();
    }, [anggotas])

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textTitle}>LocalApi</Text>
                <Text>Masukkan Anggota Dcc</Text>
                <TextInput placeholder='Nama Lengkap' style={styles.input}
                    value={name}
                    onChangeText={(value) => setName(value)} />
                <TextInput placeholder='Angkatan' style={styles.input} value={angkatan} onChangeText={(value) => setAngkatan(value)} />
                <TextInput placeholder='Nama Bc' style={styles.input} value={bc} onChangeText={(value) => setBc(value)} />
                <Button title={button} onPress={Kirim} />
                <View style={styles.line} />
            </View>


            {anggotas.map(anggota => {
                return <Item key={anggota.bc} name={anggota.name} angkatan={anggota.angkatan} bc={anggota.bc} tes={() => UpdateData(anggota)} delete={() =>createTwoButtonAlert(anggota)}/>
            })}
        </ScrollView>

    )
}

export default LocalApi

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    textTitle: {
        textAlign: 'center',
        marginBottom: 20,

    },
    line: {
        height: 2,
        backgroundColor: 'black',
        marginVertical: 20,
    },
    input: {
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 25,
        paddingHorizontal: 18,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 80,
    },
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 20,

    },
    desc: {
        marginLeft: 18,
        flex: 1,
        backgroundColor: 'green'
    },
    descName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    descEmail: {
        fontSize: 16,
    },
    descBidang: {
        fontSize: 12,
        marginTop: 8,
    },
    delete: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    }
})