import React, { useState } from 'react'
import { StyleSheet, View, Text, Pressable, Modal } from 'react-native'

import Theme from '../styles/theme'

import AddItemDialog from './AddItemDialog'

const Header = ({ addItem }) => {
  const [flagModal, toggleModal] = useState(false)

  return (
    <View style={styles.header}>
      <Text style={styles.title}>TodoList</Text>
      <Pressable onPress={() => toggleModal(true)}>
        <Text style={styles.addText}>ADD</Text>
      </Pressable>
      {/* Modal */}
      <Modal
        transparent={true}
        visible={flagModal}
        onRequestClose={() => toggleModal(false)}
        >
          <AddItemDialog
            closeDialog={toggleModal}
            addItem={addItem}
            />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#FFF',
  },
  title: {
    color: Theme.COLOR_BLACK,
    fontSize: 18,
    fontWeight: 'bold'
  },
  addText: {
    color: '#503AEE',
  },
})

export default Header