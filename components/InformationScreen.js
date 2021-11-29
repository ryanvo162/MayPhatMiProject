import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, ImageBackground, Image, View, Pressable } from 'react-native';

import database from '../database/Firebase';

import { ref, onValue } from "firebase/database";

export default function InformationScreen({ navigation }) {

    const [getFullName, setFullName] = useState(null)
    const [getBirthday, setBirthday] = useState('')
    const [getAvatar, setAvatar] = useState('')
    const [getGender, setGender] = useState('')
    const [getDepartment, setDepartment] = useState('')

    const db = database;
    const refFullName = ref(db, 'Users/1/fullname');
    const refBirthday = ref(db, 'Users/1/birthday');
    const refDepartment = ref(db, 'Users/1/department');
    const refGender = ref(db, 'Users/1/gender');
    const refAvatar = ref(db, 'Users/1/avatar');

    useEffect(async () => {
        try {
            await
                onValue(refFullName, (snapshot) => {
                    const data = snapshot.val();
                    setFullName(data)
                });
            onValue(refBirthday, (snapshot) => {
                const data = snapshot.val();
                setBirthday(data)
            });
            onValue(refDepartment, (snapshot) => {
                const data = snapshot.val();
                setDepartment(data)
            });
            onValue(refGender, (snapshot) => {
                const data = snapshot.val();
                setGender(data)
            });
            onValue(refAvatar, (snapshot) => {
                const data = snapshot.val();
                setAvatar(data)
            });
        } catch (err) {
            console.log(err)
        }
    }, [])

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.background} source={require('../images/bg.png')}>
                <Image style={styles.logo} source={require('../images/logo.png')} />
                <Text style={styles.title}>Information</Text>

                <View style={styles.cardInfo}>
                    <Image style={styles.cardBackgroundImage} source={require('../images/cardInfo.png')} />
                    <Image style={styles.avatar}
                        source={{ uri: getAvatar ? getAvatar : null }} />
                    <View style={styles.viewTextInfo}>
                        <Text style={styles.fullnameText}>Full Name:</Text>
                        <Text style={styles.birthdayText}>Birthday:</Text>
                        <Text style={styles.genderText}>Gender:</Text>
                        <Text style={styles.departmentText}>Department:</Text>

                        <Text style={styles.fullname}>{getFullName}</Text>
                        <Text style={styles.birthday}>{getBirthday}</Text>
                        <Text style={styles.gender}>{getGender}</Text>
                        <Text style={styles.department}>{getDepartment}</Text>
                    </View>
                </View>
                <View style={styles.viewCups}>
                    <Image style={[styles.noodlesCup, styles.cup1]} source={require('../images/ly1.png')} />
                    <Image style={[styles.noodlesCup, styles.cup2]} source={require('../images/ly2.png')} />
                    <Image style={[styles.noodlesCup, styles.cup3]} source={require('../images/ly3.png')} />
                </View>

                {/* <Text></Text> */}

                <Pressable
                    onPress={() => {
                        navigation.navigate('Done')
                    }}
                    style={styles.getButton}>
                    <Image style={styles.getYourNoodles} source={require('../images/getYourNoodles.png')} />
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
    },

    cardInfo: {
        position: 'relative',
        top: -15,
    },

    avatar: {
        position: 'absolute',
        top: 57,
        left: 30,
        borderRadius: 100,
        width: 80,
        height: 80,
    },

    cardBackgroundImage: {
        resizeMode: 'contain',
        height: 200,
        width: 350
    },

    viewTextInfo: {
        position: 'absolute',
        top: 50,
        left: 135,
    },

    fullnameText: {
        position: 'absolute',
        fontSize: 14,
        fontFamily: 'NunitoExtraBold',
        color: '#880B0B'
    },

    birthdayText: {
        position: 'absolute',
        fontSize: 14,
        top: 25,
        fontFamily: 'NunitoExtraBold',
        color: '#880B0B'
    },

    genderText: {
        position: 'absolute',
        fontSize: 14,
        top: 50,
        fontFamily: 'NunitoExtraBold',
        color: '#880B0B'
    },

    departmentText: {
        position: 'absolute',
        fontSize: 14,
        top: 75,
        fontFamily: 'NunitoExtraBold',
        color: '#880B0B'
    },

    fullname: {
        position: 'absolute',
        fontSize: 14,
        left: 105,
        fontFamily: 'NunitoRegular',
        color: '#880B0B'
    },

    birthday: {
        position: 'absolute',
        fontSize: 14,
        top: 25,
        left: 105,
        fontFamily: 'NunitoRegular',
        color: '#880B0B'
    },

    gender: {
        position: 'absolute',
        fontSize: 14,
        top: 50,
        left: 105,
        fontFamily: 'NunitoRegular',
        color: '#880B0B'
    },

    department: {
        position: 'absolute',
        fontSize: 14,
        top: 75,
        left: 105,
        fontFamily: 'NunitoRegular',
        color: '#880B0B'
    },

    viewCups: {
        position: 'relative',
        top: -30,
        flexDirection: "row",
    },

    noodlesCup: {
        resizeMode: 'contain',
        height: 150,
        width: 125
    },

    getButton: {
        position: 'absolute',
        bottom: 125,

    },

    getYourNoodles: {
        resizeMode: 'contain',
        width: 275,
        height: 100,
    },
})