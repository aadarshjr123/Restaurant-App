import React, {useState , useEffect} from 'react';
import {View,StyleSheet,Text, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList'; 





const SearchScreen = () => {
    
    const [term , setTerm] = useState('');
    const [results, errorMessage,searchApi] = useResults();
    
    const filterResultsByPrice = (price) =>{
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View style={Styles.background}>
            <SearchBar 
                term = {term} 
                onTermChange={setTerm}
                onTermSubmit={ () => searchApi(term)}
                />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            
            <ScrollView>
            <ResultsList results ={filterResultsByPrice('$')} title="Cheaper" />
            <ResultsList results ={filterResultsByPrice('$$')} title="Moderate" />
            <ResultsList results ={filterResultsByPrice('$$$')} title="Expensive"/>
            </ScrollView>
        </View>
    );
};



const Styles = StyleSheet.create({
   
    background:{
        
        flex:1,
        marginLeft: 10,
        
        
    },
    center:{
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold",

    }
});



export default SearchScreen;