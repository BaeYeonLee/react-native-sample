import React, { useState } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import Header from './components/Header'
import TodoList from './components/TodoList'

import TODO_DELETE from './testData'

const App = () => {
  const [todoList, setTodos] = useState(TODO_DELETE.TEST_DATA);

  const addItem = (isRepeat, todo) => {
    let list = [...todoList]

    // let section = list.find(item => item.isRepeat == isRepeat)
    // section.data.add(todo)

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
  }
})

export default App
