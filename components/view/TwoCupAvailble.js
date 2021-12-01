import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default function TwoCupAvailble() {
    return (
        <View style={styles.viewCups}>
            <Image style={[styles.noodlesCup, styles.cup1]} source={require('../../images/cup1.png')} />
            <Image style={[styles.noodlesCup, styles.cup2]} source={require('../../images/cup2.png')} />
            <View style={styles.viewOneCup}>
                <Image style={styles.noodlesCup} source={require('../../images/unavaiableCup.png')} />
                <Text style={styles.unavaiableText}>Unavaiable</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewCups: {
        position: 'relative',
        top: -60,
        flexDirection: "row",
    },

    viewOneCup: {
        alignItems: 'center'
    },

    noodlesCup: {
        resizeMode: 'contain',
        height: 150,
        width: 125
    },

    unavaiableText: {
        bottom: 15,
        fontFamily: 'PaytoneOne',
        fontSize: 18,
        color: '#A09A9A',
    }
})

