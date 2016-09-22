import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    Linking,
} from 'react-native';

import Card from './Card';
import CardSection from './Card_Section';
import Button from './Button';

class Album_Detail extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const {album: {title, artist, thumbnail_image, image, url}} = this.props;
        const {
            thumbnail_image_container,
            thumbnail_image_item,
            header_text_container,
            heading_text_style,
            imageStyle
            } = styles;

        return (
            <Card>
                <CardSection>
                    <View style={thumbnail_image_container}>
                        <Image
                            source={{uri: thumbnail_image}}
                            style={thumbnail_image_item}
                        />
                    </View>
                    <View style={header_text_container}>
                        <Text style={heading_text_style}>{title}</Text>
                        <Text>{artist}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Image
                        source={{uri: image}}
                        style={imageStyle}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={()=>{Linking.openURL(url)}}>
                        Buy Now
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    thumbnail_image_item: {
        height: 50,
        width: 50
    },
    thumbnail_image_container: {
        justifyContent:'center',
        alignItems: 'center',
        marginRight: 5
    },
    header_text_container: {
        justifyContent: 'space-around',
    },
    heading_text_style: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    imageStyle: {
        flex: 1,
        height: 300,
        width: null
    }
};

export default Album_Detail;