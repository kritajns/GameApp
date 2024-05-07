import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

interface StrategyProps {
  data: any;
  onPress?: () => void;
}

const StrategyCard: React.FC<StrategyProps> = ({data, onPress}) => {
  const renderStrategyItem = ({item}: any) => {
    return (
      <TouchableOpacity style={styles.boxContainer}>
        <Text style={styles.titleText}>{item}</Text>
        <View style={styles.textContainer}>
            <Text style={styles.text}>Learn</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>

      <FlatList
        data={data}
        keyExtractor={index => index.toString()}
        renderItem={renderStrategyItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  boxContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 5,
    padding: 15,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    backgroundColor: 'lightgrey',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black'
  },
  text: {
    fontSize: 16,
    color: 'blue',
    fontWeight: '500',
  },
});

export default StrategyCard;
