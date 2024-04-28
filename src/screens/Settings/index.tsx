import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HeaderComponent from '../../components/HeaderComponent';

const Settings = () => {
  return (
    // <View>
    //   <HeaderComponent title='Settings' />
    //   <Text>This is settings</Text>
    // </View>

    <HeaderComponent title='Settings'>
        <View>
            <Text>This is settings</Text>
        </View>
    </HeaderComponent>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Settings