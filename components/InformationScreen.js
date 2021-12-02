import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, ImageBackground, Image, View, Pressable } from 'react-native';

import database from '../database/Firebase';

import { ref, onValue, update } from "firebase/database";
import ThreeCupAvailble from './view/ThreeCupAvailble';
import TwoCupAvailble from './view/TwoCupAvailble';
import OneCupAvailble from './view/OneCupAvailble';
import NoAvailble from './view/NoAvailble';

export default function InformationScreen(props) {

    const { navigation, route: { params: { id } } } = props

    let uid = id;
    const [getFullName, setFullName] = useState('')
    const [getBirthday, setBirthday] = useState('')
    const [getAvatar, setAvatar] = useState('')
    const [getGender, setGender] = useState('')
    const [getDepartment, setDepartment] = useState('')
    const [getNoodlesAvailable, setNoodlesAvailable] = useState(null)

    const db = database;

    const refUser = ref(db, 'Users/' + uid);

    useEffect(() => {
        (async () => {
            try {
                await
                    onValue(refUser, (snapshot) => {
                        const data = snapshot.val();
                        if (data === null) {
                            navigation.replace('Error')
                        } else {
                            setFullName(data.fullname)
                            setBirthday(data.birthday)
                            setDepartment(data.department)
                            setGender(data.gender)
                            setAvatar(data.avatar)
                            setNoodlesAvailable(data.noodlesAvailable)
                        }
                    });
            } catch (err) {
                console.log(err)
            }
        })();
    }, [])

    const updateInfo = async () => {
        const decreaseNoodlesAvailableUser = (getNoodlesAvailable - 1)

        await update(refUser, {
            noodlesAvailable: decreaseNoodlesAvailableUser,
        }).then(() => {
            console.log("Update success");
            navigation.replace('Done')
        }).catch((e) => {
            console.log(e);
        })
    }

    function AvailableCup() {
        switch (getNoodlesAvailable) {
            case 3: return <ThreeCupAvailble />
            case 2: return <TwoCupAvailble />
            case 1: return <OneCupAvailble />
            case 0: return <NoAvailble />
            default: return <ThreeCupAvailble />
        }
    }

    function ButtonDone() {
        if (getNoodlesAvailable > 0) {
            return <GetYourNoodles />;
        }
        return <ComeBackNextMonth />;
    }

    function GetYourNoodles() {
        return (
            <Pressable
                onPress={() => {
                    updateInfo()
                }}
                style={styles.getButton}>
                <Image style={styles.getYourNoodles} source={require('../images/getYourNoodles.png')} />
            </Pressable>
        )
    }

    function ComeBackNextMonth() {
        return (
            <Pressable
                onPress={() => {
                    navigation.replace('Welcome')
                }}
                style={styles.getButton}>
                <Image style={styles.getYourNoodles} source={require('../images/comeBackNextMonth.png')} />
            </Pressable>
        )
    }

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
                <AvailableCup />

                <View style={styles.notifAvailable}>
                    <Text style={styles.noodlesAvailable}><Text style={styles.noodlesAvailableNumber}>{getNoodlesAvailable} </Text>
                        cups of  noodles left this month</Text>
                </View>

                <ButtonDone />
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

    cardInfo: {
        position: 'relative',
        top: -35,
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

    notifAvailable: {
        position: 'relative',
        top: -75,
    },

    noodlesAvailableNumber: {
        fontSize: 16,
        fontFamily: 'PaytoneOne',
        color: '#d91313',
    },

    noodlesAvailable: {
        fontSize: 12,
        fontFamily: 'PaytoneOne',
        color: '#9c6666',
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