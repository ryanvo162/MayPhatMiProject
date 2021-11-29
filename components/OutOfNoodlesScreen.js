import React from 'react'
import { StyleSheet, Text, ImageBackground, Image, View, Pressable } from 'react-native';

export default function OutOfNoodlesScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={require('../images/bg.png')}>
                <Image style={styles.logo} source={require('../images/logo.png')} />
                <Text style={styles.title}>Out of noodles</Text>

                <Text style={styles.errNotif}>There is<Text style={styles.numSoldOut}> 0 </Text>
                    cup of noodles left in the machine. Please fill in to continue.</Text>
                
                <Image style={styles.outOfNoodlesImage} source={require('../images/outOfNoodles.png')} />

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    background: {
        flex: 1,
        alignItems: 'center',
    },

    logo: {
        marginTop: 65,
        marginBottom: 30,
        resizeMode: 'contain',
        height: 90,
    },

    title: {
        fontFamily: 'NexaFont',
        fontSize: 30,
        color: '#C71A1A',
        marginBottom: 10,
    },

    errNotif: {
        fontFamily: 'NunitoExtraBold',
        fontSize: 18,
        color: '#AE0808',
        marginBottom: 10,
        marginHorizontal:40,
    },

    numSoldOut: {
        color: 'white',
        fontSize: 25,
    },

    outOfNoodlesImage: {
        resizeMode: 'contain',
        width: 250,
        height: 250,
    },
})
