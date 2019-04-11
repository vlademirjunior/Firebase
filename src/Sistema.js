import firebase from './FirebaseConnection';

class Sistema {
    logout() {
        firebase.auth().signOut();
    }

    addAuthListener(callback) {//vai receber uma funçao anonima
        firebase.auth().onAuthStateChanged(callback);
    }

    login(email, senha) {
        return firebase.auth().signInWithEmailAndPassword(email, senha);//quando retorna da a oportunidade de adicionar mais coisas como por exemplo o catch la na tela del login
    }

    getUserInfo(callback) {
        firebase.database().ref('usuarios').child(firebase.auth().currentUser.uid).once('value').then(callback);
    }
}

export default new Sistema();