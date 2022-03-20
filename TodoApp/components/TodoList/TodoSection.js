import React from "react"
import { StyleSheet, View, Text } from 'react-native'

import Theme from '../../styles/theme'

const TodoSection = ({ title }) => {
  /**
   * SectionList required props
   * 1. sections - 섹션 title과 섹션별 data들을 가진 대량의 데이터
   * 2. renderItem - 섹션별 Item영역에 그려질 컴포넌트를 리턴하는 콜백함수 지정
   * etc. props
   * 1. renderSectionHeader - 섹션별 title영역에 그려질 컴포넌트를 리턴하는 콜백함수 지정 
   */
  return (
    <View>
      <View style={styles.marginView}/>
      <Text style={styles.section}>
        {title}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  marginView: {
    height: 8,
    backgroundColor: '#F0F0F0',
  },
  section: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E3E3E3',
    padding: 16,
    alignItems: 'center',
    color: Theme.COLOR_BLACK,
    fontWeight: 'bold',
  }
})

export default TodoSection