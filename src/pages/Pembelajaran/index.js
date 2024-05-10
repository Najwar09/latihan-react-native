import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'



const Item = (props) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.desc}>
                <Text style={styles.descName}>{props.name}</Text>
                <Text style={styles.descEmail}>{props.angkatan}</Text>
                <Text style={styles.descBidang}>{props.bc}</Text>
            </View>
            <Text style={styles.delete}>x</Text>
        </View>
    )
}



const Pembelajaran = () => {
    const [name, setName] = useState("");
    const [angkatan, setAngkatan] = useState("");
    const [bc, setBc] = useState("");
    const [anggotas, setAnggota] = useState([])


    // Get
    const GetsData= () =>{
        axios.get('http://192.168.177.241:3000/anggota')
        .then(res => {
            console.log("respon = ",res.data)
            setAnggota(res.data)
        })  
    } 

    useEffect(()=>{
        GetsData()
    })




    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>LocalApi</Text>
            <Text>Masukkan Anggota Dcc</Text>
            <TextInput placeholder='Nama Lengkap' style={styles.input}
                value={name}
                onChangeText={(value) => setName(value)} />
            <TextInput placeholder='Angkatan' style={styles.input} value={angkatan} onChangeText={(value) => setAngkatan(value)} />
            <TextInput placeholder='Nama Bc' style={styles.input} value={bc} onChangeText={(value) => setBc(value)} />
            <Button title='simpan'/>
            <View style={styles.line} />


            {anggotas.map(anggota => {
                return <Item name={anggota.name} angkatan={anggota.angkatan} bc={anggota.bc}/>
            })}
            
            


        </View>
    )
}

export default Pembelajaran

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