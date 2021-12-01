import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default function ThreeCupAvailble() {
    return (
        <View style={styles.viewCups}>
            <Image style={[styles.noodlesCup, styles.cup1]} source={require('../../images/cup1.png')} />
            <Image style={[styles.noodlesCup, styles.cup2]} source={require('../../images/cup2.png')} />
            <Image style={[styles.noodlesCup, styles.cup3]} source={require('../../images/cup3.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    viewCups: {
        position: 'relative',
        top: -60,
        flexDirection: "row",
    },

    noodlesCup: {
        resizeMode: 'contain',
        height: 150,
        width: 125
    },
})

