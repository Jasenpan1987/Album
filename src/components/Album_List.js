import React, {Component} from 'react';
import {
    ScrollView,
} from 'react-native';

import axios from 'axios';

import AlbumDetail from './Album_Detail';
// To get the developer menu, go to the terminal and run
// adb shell input keyevent 82
class Album_List extends Component {
    constructor(props){
        super(props);

        this.state = {
            albums: []
        };
    }

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response=>{
                //console.log(response);
                return this.setState({albums: response.data});
            })
    }

    renderAlbumList(){
        return this.state.albums.map(album => {
            //console.log(album.title)
            return (
                <AlbumDetail key={album.title} album={album}/>
            )
        })
    }

    render(){
        return (
            <ScrollView>
                {this.renderAlbumList()}
            </ScrollView>
        )
    }
}

export default Album_List;