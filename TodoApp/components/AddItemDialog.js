import React, { useEffect, useState } from "react"
import { StyleSheet, View, Text, TextInput, Switch, Pressable } from 'react-native'

import Theme from '../styles/theme'

const defaultValue = {
  id: 0,
  title: '',
  desc: '',
  isFinish: false,
}

const AddItemDialog = ({ closeDialog, addItem }) => {
  const [ todoItem, setTodoItem ] = useState(defaultValue)
  const [ isRepeat, setIsRepeat ] = useState(false)

  const onChangeItem = (params) => {
    console.log('params', params)

    // const { name, value } = target

    // console.log('name', name)
    // console.log('value', value)

    // let todo = { ...defaultValue }
    // todo[name] = value
    // console.log('todo', todo)

    // setTodoItem(todo)
  }

  useEffect( () => {
    console.log('todoItem', todoItem)
  }, [todoItem])

  return (
    <View style={styles.dialog}>
      <View style={styles.header}>
        <Text style={styles.title}> Insert Todo </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.form}>
          <Text style={{color: Theme.COLOR_BLACK, flex: 2}}> Title </Text>
          <TextInput
            style={[Theme.style.baseInput, {flex: 4}]}
            name='title'
            defaultValue={todoItem.title}
            onChange={onChangeItem}
            // onChangeText={onChangeItem}
            />
          <Pressable style={styles.iconView} onPress={() => setIsRepeat(!isRepeat)}>
            <View style={[Theme.style.iconCheck, isRepeat ? Theme.style.isChecked : '']} />
          </Pressable>
        </View>
        <View style={styles.form}>
          <Text style={{color: Theme.COLOR_BLACK, flex: 1}}> Desc </Text>
          <TextInput
            style={[Theme.style.baseInput, {flex: 3}]}
            name='desc'
            value={todoItem.desc}
            onChange={onChangeItem}
            />
        </View>
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.dialogBtn} onPress={() => closeDialog(false)} >
          <Text style={{color: Theme.COLOR_BLACK}}> CANCEL </Text>
        </Pressable>
        <View style={styles.divide}></View>
        <Pressable style={styles.dialogBtn} onPress={() => addItem(isRepeat, todoItem)} > 
          <Text style={{color: Theme.COLOR_BLACK}}> SAVE </Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  dialog: {
    width: '70%',
    alignSelf:'baseline',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    backgroundColor: '#FFF'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    backgroundColor: Theme.COLOR_PRIMARY,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 21,
  },
  body: {
    alignSelf:'baseline',
    paddingTop: 8,
    paddingBottom: 24,
    paddingLeft: 16,
    paddingRight: 16,
  },
  form: {
    width: '100%',
    flexDirection: "row",
    alignItems: 'center',
  },
  iconView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: Theme.COLOR_BLACK,
  },
  dialogBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
    paddingBottom: 8,
  },
  divide: {
    width: 1,
    backgroundColor: Theme.COLOR_BLACK
  },
})

export default AddItemDialog