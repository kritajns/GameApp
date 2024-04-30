import { View, Text } from 'react-native'
import React from 'react'
import HeaderComponent from '../../components/HeaderComponent'
import StrategyCard from '../../components/StrategyCard'
import { strategiesData } from '../../constants/DummyData/data'

const Strategies = () => {
  return (
    <View>
      <HeaderComponent title="Strategies" />

      <View>
        <StrategyCard data={strategiesData} />
      </View>
    </View>
  )
}

export default Strategies