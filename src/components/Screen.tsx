import React from 'react'
import { View, Text , StyleSheet, StyleProp, ViewStyle} from 'react-native'

interface IScreenProps {
    children: React.ReactNode;
    style?: ViewStyle;
}

export const Screen = ({children, style}: IScreenProps) => {
    return (
        <View  style={[styles.screen, style]}>
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
