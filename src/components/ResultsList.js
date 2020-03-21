import React from 'react';
import {View , StyleSheet , FlatList ,Text , TouchableOpacity} from 'react-native';
import ResultsDetail from '../components/ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ title , results , navigation }) => {

    if(!results.length){
        return null;
    };

    return (
        <View style= {styles.container}>
            <Text style ={styles.titleStyle}>{title}</Text>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data ={results}
            keyExtractor={result => result.id}
            renderItem ={({item}) =>{
            return ( <TouchableOpacity onPress={() => navigation.navigate('Results' , {id:item.id})}>
            <ResultsDetail result={item} />
            </TouchableOpacity> 
            );
            }}
            />
        </View>
    );
};


const styles = StyleSheet.create({


    titleStyle:{
            fontSize: 18,
            fontWeight:'bold',
            marginBottom:15,
            marginLeft:15
    },
    container:{
        marginBottom:15
    }
});

export default withNavigation(ResultsList);



// DUMMY - code


// import React from 'react';
// import {View , StyleSheet , Text} from 'react-native';

// const ResultsList = () => {

//     return (
//         <View>
//             <Text>ResultsList</Text>
//         </View>
//     );
// };


// const styles = StyleSheet.create({});

// export default ResultsList;