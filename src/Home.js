
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import firebase from './FirebaseConnection';

class Home extends Component {

    static navigationOptions = {
        title: 'Tela Home',
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            nome: this.props.navigation.state.params.nome,//o nome eu ja mandei com login
            idade: ''
        };

        if (firebase.auth().currentUser) {//verificar se realmente existe um usuário logado
            firebase.database().ref('usuarios').child(firebase.auth().currentUser.uid).once('value').then((snpashot) => {
                let state = this.state;
                state.idade = snpashot.val().idade;//pega idade do usuario no firebase e seta no state idade
                this.setState(state);//troca o state
            });
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Olá, {this.state.nome}</Text>
                <Text>ProtonMail - vlademirjunior@protonmail.com - 123456</Text>
                <Text>Gmail - vlademir1998@gmail.com - 123456</Text>
                <Text>Hotmail - vlademir98@hotmail.com - 123456</Text>
                <Text>EspecializaTi - vlademirjunior@protonmail.com - 123456</Text>
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
});

export default Home;