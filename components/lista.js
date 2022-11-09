import { FlatList, View } from "react-native";
import React from "react";

const Lista = (props) => {
    const {list, renderItem} = props

    return(
        <View>
            <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default Lista