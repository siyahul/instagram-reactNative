import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import ProfilePicture from '../ProfilePicture'
import { styles } from './styles'

const Story = ({name,url,index,id}) => {
    const navigation = useNavigation()
    const viewStory = () =>{
        navigation.navigate("UserStory",{userId: id})
    }
    return (
        <TouchableWithoutFeedback onPress={viewStory} style={styles.container}>
            <ProfilePicture uri={url} />
            <Text style={styles.name}>{name}</Text>
        </TouchableWithoutFeedback>
    )
}

export default Story
