import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, ImageBackground, Image, View, Pressable } from 'react-native';

import database from '../database/Firebase';

import { ref, onValue, update } from "firebase/database";

export default function DoneScreen({ navigation }) {

    const db = database;

    const [getNoodlesMachine, setNoodlesMachine] = useState(null)

    const refNoodlesMachine = ref(db, 'Machine');

    useEffect(() => {
        (async () => {
            try {
                await
                    onValue(refNoodlesMachine, (snapshot) => {
                        const data = snapshot.val();
                        // console.log(data.noodles)
                        if (data.noodles <= 0) {
                            console.log('Out Of Noodles')
                        } else {
                            setNoodlesMachine(data.noodles)
                        }
                    });
            } catch (err) {
                console.log(err)
            }
        })();
    }, [])

    const updateInfo = async () => {
        const decreaseNoodlesMachine = (getNoodlesMachine - 1)

        await update(refNoodlesMachine, {
            noodles: decreaseNoodlesMachine,
        }).then(() => {
            console.log("Update success");
            navigation.replace('Welcome')
        }).catch((e) => {
            console.log(e);
        })
    }

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={require('../images/bg.png')}>
                <Image style={styles.logo} source={require('../images/logo.png')} />
                <Text style={styles.title}>Done</Text>

                <Image style={styles.goodDoneImage} source={require('../images/goodDone.png')} />

                <View style={styles.doneNotification}>
                    <Text style={styles.notifText}>Enjoy your noodles  </Text>
                    <Image style={styles.notifIcon} source={require('../images/heartEnjoy.png')} />
                </View>

                <Pressable
                    onPress={() => {
                        updateInfo()
                    }}
                    style={styles.backButton}>
                    <Image style={styles.backToHome} source={require('../images/backToHome.png')} />
                </Pressable>

                <View style={styles.getIt}>
                    <Text style={styles.getItText}>Get them below</Text>
                    <Image style={styles.getItIcon} source={require('../images/arrowDone.png')} />
                </View>

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
        fontSize: 40,
        color: '#C71A1A',
    },

    goodDoneImage: {
        resizeMode: 'contain',
        height: 250,
        width: 250
    },

    doneNotification: {
        position: 'relative',
        flexDirection: "row",
        alignItems: 'center',
    },

    notifIcon: {
        resizeMode: 'contain',
        height: 30,
        width: 30
    },

    notifText: {
        fontFamily: 'PaytoneOne',
        fontSize: 20,
        color: '#AE0808',
    },

    machine: {
        position: 'absolute',
        bottom: 40,
        resizeMode: 'contain',
        height: 180,
    },

    arrows: {
        resizeMode: 'contain',
        height: 60,
        width: 60,
    },

    backButton: {
        position: 'absolute',
        bottom: 125,

    },

    backToHome: {
        resizeMode: 'contain',
        width: 275,
        height: 100,
    },

    getIt: {
        position: 'absolute',
        bottom: 30,
        flexDirection: "column",
        alignItems: 'center',
    },

    getItText: {
        fontFamily: 'MPLUS1p',
        fontSize: 20,
        color: '#F8C135',
        marginBottom: 8,
    },

    getItIcon: {
        resizeMode: 'contain',
        height: 50,
    }

})
