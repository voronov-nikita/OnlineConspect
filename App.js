//
// Основной файл разработки и запуска WEB приложения.
//

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

// импорт отдельных модулей - страниц
import { HomeScreen } from './src/pages/HomePage';
import { HelpScreen } from './src/pages/HelpPage';
import { AboutScreen } from './src/pages/AboutPage';
import { HomeworkScreen } from './src/pages/HomeworkPage';

// конфигуратор навигации
const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                    },
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="About"
                    component={AboutScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Help"
                    component={HelpScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Homework"
                    component={HomeworkScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
