import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, ImageBackground, Image, View } from 'react-native';

import database from '../database/Firebase';
import { ref, onValue, update } from "firebase/database";

export default function OutOfNoodlesScreen({ navigation }) {


    const db = database;

    const [getNoodlesMachine, setNoodlesMachine] = useState(null)

    const refNoodlesMachine = ref(db, 'Machine');

    useEffect(async () => {
        try {
            await
                onValue(refNoodlesMachine, (snapshot) => {
                    const data = snapshot.val();
                    // console.log(data.noodles)
                    if (data.noodles > 0) {
                        navigation.replace('Welcome')
                    } else {
                        setNoodlesMachine(data.noodles)
                    }
                });
        } catch (err) {
            console.log(err)
        }
    }, [])

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
        height: 85,
    },

    title: {
        position: 'relative',
        top: -15,
        fontFamily: 'NexaFont',
        fontSize: 32,
        color: '#C71A1A',
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
