/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import Auth0Component from "./Auth0Component";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Text,
} from 'react-native';

const App: () => Node = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Image source={{uri: 'https://goevive.com/wp-content/uploads/2021/12/evive-logo.png'}} resizeMode="cover" style={{height: 100}}/>
      <ScrollView>
        <View style={{marginTop: 32}}>
          <Text style={{fontSize: 30, fontWeight: '600', alignSelf: 'center'}}>Welcome to App POC</Text>
          <Auth0Component />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
