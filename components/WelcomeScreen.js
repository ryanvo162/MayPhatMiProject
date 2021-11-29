import React from 'react'
import { StyleSheet, Text, ImageBackground, Image, View, Pressable } from 'react-native';

import { getDatabase, ref, onValue, set } from 'firebase/database';

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={require('../image/bg.png')}>
                <Image style={styles.logo} source={require('../image/logo.png')} />
                <Text style={styles.title}>Welcome</Text>

                <View style={styles.clipContainer}>
                    <View style={styles.white}></View>
                    <View style={styles.yellow}></View>
                    <Image style={styles.clip} source={require('../image/clip.png')} />
                </View>

                <View style={styles.scanRequest}>
                    <Image style={styles.iconScan} source={require('../image/scanIcon.png')} />
                    <Text style={styles.scanText}>Follow the arrow to scan card</Text>
                </View>

                <Image style={styles.machine} source={require('../image/machine.png')} />
                <Pressable
                    onPress={() => {        
                        navigation.navigate('Information')
                    }}
                    style={{
                        position: 'absolute',
                        bottom: 100,
                        right: 25,
                    }}>
                    <Image
                        style={styles.arrows}
                        source={require('../image/arrow.png')} />
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
        height: 100,
    },

    title: {
        fontFamily: 'NexaFont',
        fontSize: 40,
        color: '#C71A1A',
        marginBottom: 20,
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
        borderWidth:1,
    },

    clip: {
        marginTop: 12,
        position: 'absolute',
        height: 176,
        width: "79%",
        borderRadius: 15,
    },

    scanRequest: {
        position: 'relative',
        top: 230,
        flexDirection: "row",
        alignItems: 'center',
    },

    iconScan: {
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