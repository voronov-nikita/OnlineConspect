//
// Домашняя страница. Здесь происходят основные действия пользователя.
// Эта часть кода представляет из себя отдельно взятые части страниц с импортом их элементов
// Страницы Main, Target, History являются подстраницами этого "второго навитагора"
//

import { StyleSheet, View, Text } from 'react-native';
import * as React from 'react';

import { CardBox } from '../components/ItemCard';

export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <CardBox nav={navigation}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
