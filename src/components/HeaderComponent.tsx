import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
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
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => goBack()}>
          <CustomIcon
            library="MaterialCommunityIcons"
            name="auto-download"
            size={25}
          />
        </TouchableOpacity>
        <Text style={styles.titleText}>{title}</Text>
        <View></View>
      </View>

      {/* <View>{children}</View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: 'white',
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
