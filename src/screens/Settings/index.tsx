import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import SettingsCard from '../../components/SettingsCard';
import {CustomIcon} from '../../components/CustomIcon';

const Settings = () => {
  return (
    <View>
      <HeaderComponent title="Settings" />
      <View style={{marginTop: 10}}>
        <SettingsCard
          title="Get Hints"
          library1="Octicons"
          name1="light-bulb"
        />

        <SettingsCard
          title="History"
          library1="MaterialCommunityIcons"
          name1="history"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  
});

export default Settings;
