import React from 'react';
import {View ,Image, StyleSheet , Text} from 'react-native';

const ResultsDetail = ( {result} )  => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url}}/>
            <Text style={styles.textStyleOne}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        marginLeft: 10
    },
    image:{
        width:350,
        height:180,
        borderRadius:4,
        marginBottom: 5

    },
    textStyleOne: {
        fontWeight:"bold",
        fontSize:16
    }
    
});

export default ResultsDetail;