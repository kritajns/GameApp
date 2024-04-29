import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import {CustomIcon} from './CustomIcon';
import {goBack} from '../routes/RootNavigation';

interface HProps {
  title: string;
  children?: any;
  navigation?: any;
}

const HeaderComponent: React.FC<HProps> = ({navigation, title, children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => goBack()}>
          <CustomIcon
            library="MaterialCommunityIcons"
            name="arrow-left"
            size={25}
          />
        </TouchableOpacity>
        <Text style={styles.titleText}>{title}</Text>
        <View></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default HeaderComponent;
