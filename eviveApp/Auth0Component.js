import React from "react";
import Auth0 from 'react-native-auth0';
import axios from "axios";
import {TouchableOpacity, View, Text} from "react-native";

const auth0Component = new Auth0({
    domain: 'https://myevive-lite-dev.auth0.com', // TODO Check URL
    clientId: 'oj2lL0OJ45sS4eKZSSmK00KeI37JqzVS',
});

const Auth0Component = () => {
    const authorise = () => {
        auth0Component.webAuth
            .authorize({scope: 'openid email profile'})
            .then(credentials => console.log(credentials))
            .catch(error => console.log(error));
    }

    const apiCall = async () => {
        const apiResponse = await axios.get("https://pc.myevive.me/planchoice/api/configuration")
        console.log(apiResponse);
    }

    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 32}}>
            <TouchableOpacity onPress={authorise} style={{borderRadius: 8, padding: 16, backgroundColor: '#1763d3'}}>
                <Text style={{fontSize: 20, color: 'white', fontWeight: '600'}}>Auth0 Authentication</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={apiCall} style={{borderRadius: 8, padding: 16, backgroundColor: '#1763d3'}}>
                <Text style={{fontSize: 20, color: 'white', fontWeight: '600'}}>API Check</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Auth0Component;
