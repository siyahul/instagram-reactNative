import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    imageContainer:{
        width: '100%',
        height: '98%',
        borderRadius:10,
        borderWidth:1,
        alignItems: "center",
        justifyContent:"center",
    },
    container:{
        alignItems: 'center',
        justifyContent:'center',
        flex:1,
        height: '100%',
        backgroundColor:'#000',
        
    }
})

export default styles;