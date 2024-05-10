import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as w, heightPercentageToDP as h } from './../../../responsive';
import bell from "../../../assets/bell.png";
import menu from "../../../assets/menu.png";
import search from "../../../assets/search.png";
import filter from "../../../assets/filter.png";

const SlicingUi = () => {
    return (
        <View style={styles.tes}>
            {/* HEADER */}
            <View style={{ backgroundColor: '#5d54ed', height: w(55), borderBottomLeftRadius: 100 / 2, borderBottomRightRadius: 100 / 2, }}>
                {/* SUB HEADER */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: w(2), paddingTop: w(2) }}>
                    {/* menu button */}
                    <TouchableOpacity>
                        <Image source={menu} style={{ width: w(8), height: w(8) }} />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ fontSize: w(3.5), color: 'white' }}>Current Location</Text>
                        <Text style={{ fontSize: w(3.5), color: 'white' }}>NEW YORK, USA</Text>
                    </View>
                    {/* menu button */}
                    {/* text location */}
                    <TouchableOpacity style={{
                        height: w(10), height: (10), borderRadius: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.1)'
                    }}>
                        <Image source={bell} style={{ width: w(8), height: w(8) }} />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around',marginTop: w(5),}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={search} style={{ width: w(7), height: w(7), marginRight: 10 }} />
                        <TextInput placeholder='Search....' style={{ borderColor: 'gray', borderLeftWidth: 1, paddingLeft: 10 }} placeholderTextColor={'white'} />
                    </View>

                    <View style={{ backgroundColor: 'backgroundColor:rgba(0,0,0,0.1)', flexDirection: 'row', alignItems: 'center', borderRadius: 30, padding: 6, height: w(10) }}>
                        <Image source={filter} style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: 100, width: w(5), height: w(5) }} />
                        <Text style={{ color: 'white', marginLeft: w(3), }}>Filters</Text>
                    </View>
                </View>


            </View>

        </View>
    )
}

export default SlicingUi

const styles = StyleSheet.create({
    tes: {
        backgroundColor: 'white',
        flex: 1,
    }
})