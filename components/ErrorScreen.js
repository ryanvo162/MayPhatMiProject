import React from 'react'
import { StyleSheet, Text, ImageBackground, Image, View, Pressable } from 'react-native';

export default function ErrorScreen({ navigation }) {
    let id = 1
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={require('../images/bg.png')}>
                <Image style={styles.logo} source={require('../images/logo.png')} />
                <Text style={styles.title}>Error</Text>

                <Text style={styles.errNotif}>Can not recongnize your ID card.</Text>

                <Image style={styles.tryagainNotif} source={require('../images/errNotif.png')} />
                <Image style={styles.errorImage} source={require('../images/errorImage.png')} />

                <View style={styles.scanRequest}>
                    <Image style={styles.iconScan} source={require('../images/scanIcon.png')} />
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

    errNotif: {
        fontFamily: 'NunitoExtraBold',
        fontSize: 20,
        color: '#AE0808',
        marginBottom: 10,
    },

    tryagainNotif: {
        resizeMode: 'contain',
        width: 150,
        height: 50,
        marginBottom: 5,
    },

    errorImage: {
        resizeMode: 'contain',
        width: 225,
        height: 150,
        marginBottom: 10,
    },

    scanRequest: {
        position: 'relative',
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
