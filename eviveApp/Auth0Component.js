import React, {useState} from "react";
import Auth0 from 'react-native-auth0';
import axios from "axios";
import {TouchableOpacity, View, Text} from "react-native";

const auth0Component = new Auth0({
    domain: 'https://accounts.dev.evive.io',
    clientId: 'oj2lL0OJ45sS4eKZSSmK00KeI37JqzVS',
});

const api = axios.create({});

const Auth0Component = ({setToken}) => {
    const [accessToken, setAccessToken] = useState();
    const authorise = () => {
        auth0Component.webAuth
            .authorize({scope: 'openid email profile', audience: "https://api.testevivecare.com"})
            .then(credentials => {
                console.log('Access Token from auth component', JSON.stringify(credentials.accessToken));
                setAccessToken(credentials.accessToken);
            })
            .catch(error => console.log(error));
    }

    const apiCall = async () => {
        // console.log('Api before', typeof(api));
        console.log('Token', accessToken);
        // api.defaults.headers.common = {'Authorization': `Bearer ${accessToken}`}
        // console.log('Api after', api);
        setToken(accessToken);
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        }
        try {
            const apiResponse = await api.get("https://pc.dev.myevive.me/planchoice/api/user-dependents/user-flow-details?planType=MEDICAL", config)
            console.log(apiResponse);
        }
        catch (e) {
            console.log('Error', e);
        }
        // const apiResponse = await api.get("https://pc.dev.myevive.me/planchoice/api/user-dependents/user-flow-details")
        // console.log(apiResponse);
    }

    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 32}}>
            <TouchableOpacity onPress={authorise} style={{borderRadius: 8, padding: 16, backgroundColor: '#1763d3'}}>
                <Text style={{fontSize: 20, color: 'white', fontWeight: '600'}}>Auth0 Authentication</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={setToken(accessToken)} style={{borderRadius: 8, padding: 16, backgroundColor: '#1763d3'}}>
                <Text style={{fontSize: 20, color: 'white', fontWeight: '600'}}>Pass Token</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Auth0Component;
