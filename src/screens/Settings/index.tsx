import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import SettingsCard from '../../components/SettingsCard';
import {CustomIcon} from '../../components/CustomIcon';

interface SettingsProps {
  navigation?: any;
}

const Settings: React.FC<SettingsProps> = ({navigation}) => {
  return (
    <View>
      <HeaderComponent title="Settings" />
      <View style={{marginTop: 10}}>
        <SettingsCard title="Premium" library1="Octicons" name1="light-bulb" isIcon={false} />

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

        <SettingsCard
          title="Statistics"
          library1="MaterialCommunityIcons"
          name1="history"
        />

        <SettingsCard
          title="How to Play"
          library1="MaterialCommunityIcons"
          name1="history"
        />

        <SettingsCard
          title="Strategies"
          library1="MaterialCommunityIcons"
          name1="history"
          onPress={() => navigation?.navigate('Strategies')}
        />

        <SettingsCard
          title="Feedback"
          library1="MaterialCommunityIcons"
          name1="history"
        />

        <SettingsCard title="Themes" library1="Octicons" name1="light-bulb" />

        <SettingsCard
          title="Sound Effects"
          library1="MaterialCommunityIcons"
          name1="history"
        />

<SettingsCard
          title="Vibrate"
          library1="MaterialCommunityIcons"
          name1="history"
        />

<SettingsCard
          title="Timer"
          library1="MaterialCommunityIcons"
          name1="history"
        />

        <SettingsCard
          title="Redeem Code"
          library1="Octicons"
          name1="light-bulb"
          isIcon={false}
        />

        <SettingsCard
          title="Manage Subscription"
          library1="Octicons"
          name1="light-bulb"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Settings;
