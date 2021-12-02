import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, ImageBackground, Image, View, Pressable } from 'react-native';

import database from '../database/Firebase';
import { ref, onValue } from "firebase/database";

import { BarCodeScanner } from 'expo-barcode-scanner';

export default function WelcomeScreen({ navigation }) {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    const db = database;
    const refNoodlesMachine = ref(db, 'Machine');

    useEffect(() => {
        (async () => {
            try {
                await
                    onValue(refNoodlesMachine, (snapshot) => {
                        const data = snapshot.val();
                        if (data.noodles <= 0) {
                            navigation.replace('SoldOut')
                        }
                    });
            } catch (err) {
                console.log(err)
            }
        })();
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        navigation.replace('Information', { id: data })
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={require('../images/bg.png')}>
                <Image style={styles.logo} source={require('../images/logo.png')} />
                <Text style={styles.title}>Welcome</Text>

                <View style={styles.clipContainer}>
                    <View style={styles.white}></View>
                    <View style={styles.yellow}></View>
                    {/* <Image style={styles.clip} source={require('../images/clip.png')} /> */}
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={styles.clip}
                    />
                    {scanned && <Pressable style={styles.tryAgainPress} onPress={() => setScanned(false)}>
                        <Text style={styles.tryAgainText}>Tap to scan again</Text></Pressable>}
                </View>

                <View style={styles.scanRequest}>
                    <Image style={styles.scanIcon} source={require('../images/scanIcon.png')} />
                    <Text style={styles.scanText}>Follow the arrow to scan card</Text>
                </View>

                <Image style={styles.machine} source={require('../images/machine.png')} />
                <Pressable
                    onPress={() => {
                        navigation.replace('Information', { id: id })
                    }}
                    style={{
                        position: 'absolute',
                        bottom: 100,
                        right: 25,
                    }}>
                    <Image
                        style={styles.arrows}
                        source={require('../images/arrow.png')} />
                </Pressable>

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

    clipContainer: {
        alignItems: 'center',
    },

    white: {
        position: 'absolute',
        backgroundColor: 'white',
        height: 200,
        width: "85%",
        borderRadius: 20,
        shadowColor: "#550A0A",
        shadowOffset: {
            width: -10,
            height: 10,
        },
        shadowOpacity: 0.6,
        shadowRadius: 5.46,
    },

    yellow: {
        marginTop: 6,
        position: 'absolute',
        backgroundColor: '#FFC900',
        height: 188,
        width: "82%",
        borderRadius: 20,
        borderColor: '#711F1F',
        borderWidth: 1,
    },

    clip: {
        marginTop: 12,
        position: 'absolute',
        height: 176,
        width: "75%",
        borderRadius: 15,
    },

    tryAgainPress: {
        position: 'absolute',
        top: 85,
        backgroundColor: 'rgba(158, 158, 158, 0.3)',
        borderRadius: 5,
        height: 20,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },

    tryAgainText: {
        color: 'white'

    },

    scanRequest: {
        position: 'relative',
        top: 230,
        right: 7,
        flexDirection: "row",
        alignItems: 'center',
    },

    scanIcon: {
        resizeMode: 'contain',
        height: 40,
        width: 60
    },

    scanText: {
        fontFamily: 'NunitoExtraBold',
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
    }
})
