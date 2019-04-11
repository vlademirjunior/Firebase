import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Sistema from './Sistema';


class Login extends Component {

    static navigationOptions = {
        title: 'Cofre de Senhas'
    }

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: ''
        };

        this.logar = this.logar.bind(this);

        Sistema.logout();
    }

    logar() {
        Sistema.addAuthListener((user) => {
            if (user) {
                Sistema.getUserInfo((info) => {
                    this.props.navigation.navigate('Home', {
                        nome: info.val().nome,
                    });
                });
            }
        });

        Sistema.login(this.state.email, this.state.senha).catch((error) => {
            alert(error.code);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Login {Platform.OS == 'android' ? 'Android' : 'IOS'}</Text>
                <Text>E-mail Mestre:</Text>
                <TextInput onChangeText={(email) => this.setState({ email })} style={styles.input} />
                <Text>Senha Mestra:</Text>
                <TextInput secureTextEntry={true} onChangeText={(senha) => this.setState({ senha })} style={styles.input} />
                <Button title="Entrar" onPress={this.logar} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: Platform.OS == 'ios' ? 40 : 20,
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    input: {
        backgroundColor: '#EEE',
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: 10
    }
});

export default Login;