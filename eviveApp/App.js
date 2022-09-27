/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Image source={{uri: 'https://goevive.com/wp-content/uploads/2021/12/evive-logo.png'}} resizeMode="cover" style={{height: 100}}/>
        <View style={{marginTop: 32}}>
          <Text style={{fontSize: 30, fontWeight: '600', alignSelf: 'center'}}>Welcome to App POC</Text>
          <Auth0Component />
        </View>
        <WebView source={{uri: `http://localhost:8086?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlBBM2E3X1ZOVG5GS2trb0p3TTZVdCJ9.eyJodHRwczovL2V2aXZlLmlvL3VwaW4iOiJURVNUX0RJU19QTEFfVVNFUjEyIiwiaHR0cHM6Ly9ldml2ZS5pby9wZXJzb25hIjoibWVtYmVyIiwiaHR0cHM6Ly9ldml2ZS5pby9jdXN0b21lcl9pZCI6IjIwMzEiLCJpc3MiOiJodHRwczovL2FjY291bnRzLmRldi5ldml2ZS5pby8iLCJzdWIiOiJhdXRoMHxURVNUX0RJU19QTEFfVVNFUjEyIiwiYXVkIjpbImh0dHBzOi8vYXBpLnRlc3Rldml2ZWNhcmUuY29tIiwiaHR0cHM6Ly9teWV2aXZlLWxpdGUtZGV2LmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2NjQyNjI5MDAsImV4cCI6MTY2NDM0OTMwMCwiYXpwIjoib2oybEwwT0o0NXNTNGVLWlNTbUswMEtlSTM3SnF6VlMiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwicGVybWlzc2lvbnMiOltdfQ.CtNUgkp7oZoTgrHhhe0cTjkwiuiN3eGMwmBYeCdzaKW_lxlhdED2nOfqnzeHLePz0ZZKbjM-8NgNccmgSs5HAfvfw1y-7pMTQmNLwCfxuvL-PNLK4aGDYZt2pKx344hrkdMBkdtOe_XlHDJo7Nb4Zh4D5we7CLXzy4XYnrBQxSQ4drN5tBc9toH9twrHGINGCBMEL1J38FkzaAbuLkMjAivYsRvkQInl3WvITcanCMPpC1nccbi_NWXQNkxYBnH6gAU-oYPEJKsXOx4HOorByQiQ8TM-Q_QAaxNo9JMaXQu3cPe24_IjcUB0E4fdtwcmnEc27tdyUeqLIQ2mRs1Nug`}} style={{flex: 1}} onMessage={() => alert('Hello')} />
    </SafeAreaView>
  );
};

export default App;
