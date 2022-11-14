import { FlatList, View } from "react-native";
import React from "react";

const ListaCompleta = (props) => {
    const {subList, renderOldItem} = props

    return(
        <View>
            <FlatList
            data={subList}
            renderItem={renderOldItem}
            keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default ListaCompleta