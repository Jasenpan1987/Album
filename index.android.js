//import libraries
import React from 'react';
import ReactNative, {
    View,
    Text,
    AppRegistry
} from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/Album_List';
//Create a Component
const App = () => (
    <View style={{flex: 1}}>
        <Header headerText={'ALBUMS'}/>
        <AlbumList />
    </View>
);

AppRegistry.registerComponent('albums', ()=>App);

//Render into the device