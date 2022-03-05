import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'

import Header from './components/Header'
import TodoList from './components/TodoList'


const TEST_DATA = [
  {
    title: '반복',
    isRepeat: true,
    data: [
      {
        id: 1,
        title: '매일 해야되요 - 1',
        desc: '매일 해야되는 첫번째 업무에요',
        isFinish: false,
      },
      {
        id: 2,
        title: '매일 해야되요 - 2',
        desc: '매일 해야되는 두번째 업무에요',
        isFinish: false,
      }
    ]
  },
  {
    title: '오늘 하루',
    isRepeat: false,
    data: [
      {
        id: 1,
        title: '오늘만 하면되요 - 1',
        desc: '오늘 해야되는 첫번째 업무에요',
        isFinish: false,
      },
      {
        id: 2,
        title: '오늘만 하면되요 - 2',
        desc: '오늘 해야되는 두번째 업무에요',
        isFinish: false,
      }
    ]
  },
]


const App = () => {
  const [todoList, setTodos] = useState(TEST_DATA);

  const addItem = (todo) => {
    let list = [...todoList]

    let section = list.find(item => item.isRepeat == todo.isRepeat)
    section.data.add(todo)

    setTodos(list)
  }

  const finishItem = (isRepeat, todo) => {
    let list = [...todoList]

    let section = list.find( item => item.isRepeat == isRepeat)
    let clickedItem = section.data.find( item => item.id == todo.id)

    clickedItem.isFinish = !clickedItem.isFinish

    setTodos([ ...todoList ])
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header addItem={addItem} />
      <TodoList 
        todoList={todoList}
        finishItem={finishItem}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
})

export default App
