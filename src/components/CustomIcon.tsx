import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const iconLibraries: any = {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
  Feather,
  FontAwesome,
  Fontisto,
  SimpleLineIcons,
};

interface IconProps {
  library: string;
  name: string;
  color?: string;
  size?: number;
}

export const CustomIcon: React.FC<IconProps> = ({
  library,
  name,
  color,
  size,
}) => {
  const IconComponent = iconLibraries[library];
  return <IconComponent name={name} size={size} color={color ?? 'black'} />;
};
