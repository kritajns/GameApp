import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CustomIcon} from './CustomIcon';

interface CardProps {
  title: string;
  library1: string;
  name1: string;
  subText?: string;
  onPress?: () => void;
  isToogle?: boolean;
  isIcon?: boolean;
}

const SettingsCard: React.FC<CardProps> = ({
  title,
  subText,
  library1,
  name1,
  onPress,
  isToggle = false,
  isIcon = true,
}) => {
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.innerContainer}>
          <CustomIcon library={library1} name={name1} size={20} color="black" />
          <View style={{marginLeft: 15}}>
            <Text style={styles.mainText}>{title}</Text>
            {subText && <Text style={styles.miniText}>{subText}</Text>}
          </View>
        </View>
        {isIcon && <CustomIcon library={'MaterialIcons'} name={'keyboard-arrow-right'} size={26} color="black" />}
      </TouchableOpacity>

      <View style={styles.divider} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 5,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  mainText: {
    color: 'black',
    fontSize: 17,
    fontWeight: '400',
  },
  miniText: {
    fontSize: 12,
    color: 'lightgrey',
  },
  divider: {
    borderWidth: 0.2,
    borderColor: 'grey',
    marginVertical: 12,
  },
});

export default SettingsCard;
