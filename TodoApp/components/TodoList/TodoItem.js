import React from "react"
import { StyleSheet, View, Text, Pressable } from 'react-native'

import Theme from '../../styles/theme'

const TodoItem = ({ index, todo, section, finishItem}) => {
  /**
   * SectionList required props
   * 1. sections - 섹션 title과 섹션별 data들을 가진 대량의 데이터
   * 2. renderItem - 섹션별 Item영역에 그려질 컴포넌트를 리턴하는 콜백함수 지정
   * etc. props
   * 1. renderSectionHeader - 섹션별 title영역에 그려질 컴포넌트를 리턴하는 콜백함수 지정 
   */
  return (
    <View style={[styles.item, index == 0 ? '' : styles.border]}>
      <View style={styles.textView}>
        <Text style={styles.title}>
          {todo.title}
        </Text>
        <Text style={styles.desc}>
          {todo.desc}
        </Text>
      </View>
      <Pressable style={styles.iconView} onPress={() => finishItem(section.isRepeat, todo)}>
        <View style={[Theme.style.iconCheck, todo.isFinish ? Theme.style.isChecked : '']} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 16,
    borderColor: '#E3E3E3',
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    color: Theme.COLOR_BLACK
  },
  border: {
    borderTopWidth: 1,
  },
  textView: {
    flex: 9
  },
  iconView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 2,
    alignItems: 'center',
    color: Theme.COLOR_BLACK,
    fontSize: 14,
  },
  desc: {
    flex: 1,
    marginTop: 2,
    paddingLeft: 2,
    alignItems: 'center',
    color: '#CACACA',
    fontSize: 12,
  }
})

export default TodoItem