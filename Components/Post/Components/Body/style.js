import {StyleSheet,Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
    },
    image: {
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').width,
        resizeMode:"cover",
    }
})