//
// Домашняя страница. Здесь происходят основные действия пользователя.
// Эта часть кода представляет из себя отдельно взятые части страниц с импортом их элементов
// Страницы Main, Target, History являются подстраницами этого "второго навитагора"
//

import { StyleSheet, View, Text } from 'react-native';
import * as React from 'react';

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Hello Home</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
