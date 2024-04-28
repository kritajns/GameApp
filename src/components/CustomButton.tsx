import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextStyle,
} from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface BtnProps {
  title: string;
  style?: TextStyle;
  color?: any;
  onPress?: () => void;
}

const CustomButton: React.FC<BtnProps> = ({title, style, color, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.btnStyle, ...style}}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  btnStyle: {
    padding: 15,
    alignSelf: 'center',
    // marginHorizontal: wp(10),
    width: '100%',
    height: '8%',
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'blue',
    borderRadius: 30,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default CustomButton;
