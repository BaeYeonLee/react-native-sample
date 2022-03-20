import React from "react"
import { StyleSheet, View, SectionList } from 'react-native'

import TodoSection from './TodoSection'
import TodoItem from './TodoItem'

const TodoList = (props) => {
  /**
   * SectionList required props
   * 1. sections - 섹션 title과 섹션별 data들을 가진 대량의 데이터
   * 2. renderItem - 섹션별 Item영역에 그려질 컴포넌트를 리턴하는 콜백함수 지정
   * etc. props
   * 1. renderSectionHeader - 섹션별 title영역에 그려질 컴포넌트를 리턴하는 콜백함수 지정 
   */
  return (
    <View style={styles.root}>
      <SectionList
        sections={props.todoList}
        renderSectionHeader={ ({ section: { title } }) => <TodoSection title={title} />}
        renderItem={ ({item ,index, section})=>{
          return(
            <TodoItem 
              index={index}
              todo={item}
              section={section}
              finishItem={props.finishItem}
              />
          )
        }}
        keyExtractor={(item,index)=> index}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFF',
  },
})

export default TodoList