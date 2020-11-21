import React from 'react'
import { View, Text } from 'react-native'
import ProfilePicture from '../ProfilePicture'
import { styles } from './styles'

const Story = ({name,url}) => {
    return (
        <View style={styles.container}>
            <ProfilePicture uri={url} />
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

export default Story
