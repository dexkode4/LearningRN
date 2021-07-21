import React from 'react'
import { View, Text , StyleSheet} from 'react-native'

interface IScreenProps {
    children: React.ReactNode;
}

export const Screen = ({children}: IScreenProps) => {
    return (
        <View style={styles.screen}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
});
