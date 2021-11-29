import React from 'react'
import { StyleSheet, Text, ImageBackground, Image, View, Pressable } from 'react-native';

export default function DoneScreen({ navigation }) {
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
                        navigation.navigate('Welcome')
                    }}
                    style={styles.backButton}>
                    <Image style={styles.backToHome} source={require('../images/backToHome.png')} />
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

    goodDoneImage: {
        resizeMode: 'contain',
        height: 250,
        width: 250
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
})
