import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Login({ navigation }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState(null)

    const onSubmit = async () => {
        await AsyncStorage.setItem('token', username)
        if (username === 'Kaique' && password === '123') {
            Alert.alert('Logado com sucesso');
            navigation.navigate('Home')
        } else {
            Alert.alert('Erro ao tentar logar');
        }
    }

    const tokenlogin = async () => {
        const value = await AsyncStorage.getItem('token')
        if (value !== null) {
            navigation.navigate('Home')

        } else {

        }
    }

    tokenlogin()


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Galeria de fotos</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(value) => setUsername(value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                autoCapitalize="none"
                onChangeText={(value) => setPassword(value)}
            />
            <Button
                title="Entrar"
                onPress={() => {
                    onSubmit(); // Chama a função de submissão, se você já tiver definido
                  
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 32,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
});