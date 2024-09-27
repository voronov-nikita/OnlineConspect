//
// Домашняя страница. Здесь происходят основные действия пользователя.
// Эта часть кода представляет из себя отдельно взятые части страниц с импортом их элементов
// Страницы Main, Target, History являются подстраницами этого "второго навитагора"
//

import { StyleSheet, View, Text } from 'react-native';
import * as React from 'react';

import { CardBox } from '../components/ItemCard';

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <CardBox />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
