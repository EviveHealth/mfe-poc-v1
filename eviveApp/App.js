/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useEffect, useMemo, useState} from 'react';
import type {Node} from 'react';
import WebView from "react-native-webview";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Text,
} from 'react-native';
import Auth0Component from "./Auth0Component";

const App: () => Node = () => {

    const [token, setToken] = useState('');

    const onPassToken = useCallback(
        (accessToken) => {
            console.log('Token inside app', accessToken);
            setToken(accessToken);
        }, [],
    );

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <Image source={{uri: 'https://goevive.com/wp-content/uploads/2021/12/evive-logo.png'}} resizeMode="cover" style={{height: 100}}/>
        <View style={{marginTop: 32}}>
          <Text style={{fontSize: 30, fontWeight: '600', alignSelf: 'center'}}>Welcome to App POC</Text>
          <Auth0Component setToken={onPassToken}/>
        </View>
        <View style={{height: 1, backgroundColor: 'black'}} />
        <Text style={{fontSize: 16, fontWeight: '500', alignSelf: 'center'}}>Web View 1</Text>
        <WebView source={{uri: `http://localhost:8086?token=${token}`}} style={{flex: 1}} />
        <View style={{height: 1, backgroundColor: 'black'}} />
        <Text style={{fontSize: 16, fontWeight: '500', alignSelf: 'center'}}>Web View 2</Text>
        <WebView source={{uri: `http://localhost:8086?token=${token}`}} style={{flex: 1}} />
    </SafeAreaView>
  );
};

export default App;
