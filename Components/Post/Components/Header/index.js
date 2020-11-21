import React from 'react'
import { View, Text } from 'react-native'
import ProfilePicture from '../../../ProfilePicture'
import { styles } from './style'

const Header = ({uri,name}) => {
    
    return (
        <View style={styles.container}>
            <ProfilePicture uri={uri} size={'small'}/>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

export default Header
