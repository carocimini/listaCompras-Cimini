import { StyleSheet, View, Text, Pressable, Modal as NewModal, Alert } from "react-native";
import React from 'react'

const Modal = (props) => {
    const {isVisible, actionDeleteItem, actionHideModal} = props

    return (
        <NewModal animationType="fade" 
        transparent={true} 
        visible= {isVisible}
        onRequestClose={() => {
            Alert.alert("Modal has been closed.")
            setModalVisible(!modalVisible)
        }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modal}>
                    <Text style={{fontSize: 20}}>
                        ¿Ya realizaste esta tarea?
                    </Text>
                    <Pressable 
                    onPress={() => actionDeleteItem()} 
                    style={styles.modalbotonverde}
                    >
                        <Text style={styles.modaltexto}>Si</Text>
                    </Pressable> 
                    <Pressable 
                    onPress={() => actionHideModal()} 
                    style={styles.modalbotonrojo}
                    >
                        <Text style={styles.modaltexto}>No</Text>
                    </Pressable>
                </View>
            </View>
        </NewModal> 
    )
}

export default Modal

const styles = StyleSheet.create({
    centeredView:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginTop: 22,
    },
    modal:{
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 12,
        padding: 5,
    },
    modalbotonrojo:{
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        width: 50,
        backgroundColor: "#f46a6a",
        marginBottom: 5,
    },
    modalbotonverde:{
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        width: 50,
        backgroundColor: "#8DC63F",
        marginBottom: 5,
        marginTop: 10,
    },
    modaltexto:{
        color: "white",
        fontSize: 18,
    }
})