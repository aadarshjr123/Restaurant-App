import React from 'react';
import {View,StyleSheet,TextInput} from 'react-native';
import { Feather} from '@expo/vector-icons';

const SearchBar = ({term , onTermChange, onTermSubmit} ) => {
    return (
        <View style={Styles.background}>
            <Feather 
            style={Styles.iconStyle}
            name="search" size={30}/>
            <TextInput
            style={Styles.inputStyle} 
            placeholder="Search"
            autoCapitalize="none"
            autoCorrect={false}
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const Styles = StyleSheet.create({
    background:{
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop:10,
        flexDirection:"row",
        
    },
    inpytStyle:{
        flex:1,
        fontSize:18
    },
    iconStyle:{
        alignSelf:'center',
        fontSize: 35,
        marginHorizontal:15
    }
});



export default SearchBar;