import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import card from '../../assets/icon/shopping_card.png';

const Position = () => {
  return (
    <View style={styles.wrapper}>
        <Text>Materi Position</Text>
        <View style={styles.cardwrapper}>
            <Image source={card} style={styles.icon}/>
            <Text style={styles.notif}>10</Text>
        </View>
        <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  )
}

export default Position;

const styles = StyleSheet.create({
    icon:{
        width: 50,
        height: 50,
    },
    cardwrapper:{
        borderWidth: 1,
        borderColor: 'blue',
        width: 93,
        height: 93,
        borderRadius: 93/2,
        justifyContent: 'center',
        alignItems: 'center',
        position:'relative',
        marginTop: 40,
    },
    wrapper:{
        padding: 20,
        alignItems: 'center',
    },
    text:{
        fontSize: 12,
        color:'#777777',
        fontWeight: '700',
        marginTop: 7,
    },
    notif:{
        fontSize: 12,
        color:'white',
        backgroundColor: 'green',
        padding: 5,
        borderRadius: 25,
        width: 24,
        height: 24,
        position:'absolute',
        top: 0,
        right: 0,

    }
})