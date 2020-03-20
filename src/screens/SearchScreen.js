import React, {useState , useEffect} from 'react';
import {View,StyleSheet,Text} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term , setTerm] = useState('');
    
    const [results, errorMessage,searchApi] = useResults();

    return (
        <View style={Styles.background}>
            <SearchBar 
                term = {term} 
                onTermChange={setTerm}
                onTermSubmit={searchApi}
                />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We Have Found {results.length} Results.</Text>
        </View>
    );
};



const Styles = StyleSheet.create({
    background:{
        backgroundColor:'#fff',
        flex:1
    }
});



export default SearchScreen;