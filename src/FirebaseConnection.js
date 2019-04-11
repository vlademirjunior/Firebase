import firebase from 'firebase';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

// Initialize Firebase, no construtor para rodar antes da tela aparecer
// Initialize Firebase
var config = {
    apiKey: "AIzaSyC1UJJSt2CctMZI5gYgJV5Ad-L20ThE4vk",
    authDomain: "projeto-react-firebase.firebaseapp.com",
    databaseURL: "https://projeto-react-firebase.firebaseio.com",
    projectId: "projeto-react-firebase",
    storageBucket: "projeto-react-firebase.appspot.com",
    messagingSenderId: "412509298820"
};

firebase.initializeApp(config);

export default firebase; //importei, fiz a conexão e exportei ele, qualquer arquivo que puxar ele ja vem uma conexão firebase.