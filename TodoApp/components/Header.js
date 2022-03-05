import React, { useState } from 'react'
import { StyleSheet, View, Text, Pressable, Modal } from 'react-native'

const Header = ({addItem }) => {
  const [flagModal, toggleModal] = useState(false);

  return (
    <View style={styles.header}>
      <Text style={styles.title}>TodoList</Text>
      <Pressable onPress={() => toggleModal(true)}>
        <Text style={styles.addText}>ADD</Text>
      </Pressable>
      {/* Modal */}
      <Modal
        visible={flagModal}
        onRequestClose={() => toggleModal(false)}>
          {/* TODO :: addItem form */}
          <Text>
            Modal
          </Text>
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
    color: '#222',
    fontSize: 18,
    fontWeight: 'bold'
  },
  addText: {
    color: '#503AEE',
  }
})

export default Header