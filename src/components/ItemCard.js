//
// Карточка предмета.
// Неоьходимо передавать объект с
//

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export const CardBox = () => {
    const testFunc = () => {
        console.log('hello');
    };

    return (
        <TouchableOpacity onPress={testFunc}>
            <Text>hello</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000"
    },
});
