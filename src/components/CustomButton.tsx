import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  TextStyle,
} from 'react-native';
import React from 'react';

interface BtnProps {
  title: string;
  style: TextStyle;
  color: any;
  onPress: () => void;
}

const CustomButton: React.FC<BtnProps> = ({title, style, color, onPress}) => {
  return (
    <TouchableNativeFeedback
      onPress={onPress}
      style={{...styles.btnStyle, ...style}}>
      <Text style={{color: color}}>{title}</Text>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {},
  btnStyle: {
    padding: 15,
    alignSelf: 'center',
    width: '90%',
    borderWidth: 1,
    borderRadius: 20,
  },
});

export default CustomButton;
