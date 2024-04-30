import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

interface StrategyProps {
  data: any;
  onPress?: () => void;
}

const StrategyCard: React.FC<StrategyProps> = ({data, onPress}) => {
  const renderStrategyItem = ({item}: any) => {
    console.log('this is item', item);
    return (
      <TouchableOpacity style={styles.boxContainer}>
        <Text>Naked Quad</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Strategy Card</Text>

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
    // backgroundColor: 'white',
    marginHorizontal: 10,
    // borderRadius: 15,
  },
  boxContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
  },
});

export default StrategyCard;
