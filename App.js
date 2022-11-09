import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native"

import Modal from "./components/modal"
import AddItem from "./components/addItem"
import Lista from "./components/lista"


export default function App() {
  const [textItem, setTextItem] = useState('')
  const [list, setList] = useState([])

  const [modalVisible, setModalVisible] = useState(false)

  const [itemSelected, setItemSelected] = useState ({})

  const onHandleChange = (t) => {setTextItem(t)}

  const addItem = () => {
    setList((currentState) => [
      ...currentState,
      { id: Math.random().toString(), value: textItem },
    ])
    setTextItem('')
  }

  const selectedItem = (id) => {
    setItemSelected(list.filter((item) => item.id === id)[0])
    setModalVisible(true)
  }

  const deleteItem = () => {
    setList((currentState) =>
      currentState.filter((item) => item.id !== itemSelected.id)
    )
    setItemSelected({})
    setModalVisible(false)
  }

  const hideModal = () => {
    setModalVisible(false)
  }

  const renderItem = ({item}) => (
    <View style={styles.lista}>
      <Text style={styles.subtitulo}>{item.value}</Text>
      <TouchableOpacity style={styles.buttonlista} onPress={() => selectedItem(item.id)}>
        <Text style={{color:"white"}}>X</Text>
      </TouchableOpacity>
    </View>
  )
    
  

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Tareas</Text>
      <Text style={styles.subtitulo}>Agrega aqui tus tareas pendientes para hoy</Text>
      <AddItem textItem={textItem} onHandleChange={onHandleChange} addItem={addItem}/>
      <Lista list={list} renderItem={renderItem}/>
      <Modal isVisible={modalVisible} actionDeleteItem={deleteItem} actionHideModal={hideModal}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
    paddingTop: 100,
  },
  titulo:{
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 15,
    color: "#39398B",
  },
  subtitulo: {
    fontSize: 15,
    width: "80%",
  },
  lista:{
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width:"85%",
    marginTop: 20,
    marginHorizontal: 30,
    borderRadius: 5,
    backgroundColor: "rgba(0,0,0,0.05)",
    padding: 5,
  },
  buttonlista:{
    backgroundColor: "#f46a6a",
    height: 25,
    width: 27,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
})