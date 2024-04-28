import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import {CustomIcon} from '../../components/CustomIcon';

interface IProps {
    navigation: any;
}

const Home: React.FC<IProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <CustomIcon library="MaterialIcons" name="settings" size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
        <CustomIcon library="AntDesign" name="Trophy" size={30} />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>SUDOKU</Text>

      <CustomButton
        title="New Game"
        style={{position: 'absolute', bottom: 50}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginTop: 30,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: 'grey',
    marginTop: 80,
    marginBottom: 50,
  },
  btnContainer: {
    bottom: 0,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});

export default Home;
