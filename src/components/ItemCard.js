//
// Карточка предмета.
// Неоьходимо передавать объект с
//

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

//
export const CardBox = ({ nav }) => {
    const toPage = () => {
        nav.navigate('Homework');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toPage}>
                <Text>К домашке</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
    },
});
