import {StyleSheet,Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    heart:{
        position: 'absolute',
        top:'50%',
        left:'50%',
        zIndex:10,
        transform: [{translateX:-30},{translateY:-30}],
        elevation:5,
        
    },
    image: {
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').width,
        resizeMode:"cover",
    }
})