import axios from 'axios';


export default axios.create({

    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer 0NZzxJUSk9Dupi5S_oZEnCK3W4JnPVjJNKbt-Ws8Env9uV6BdRMhRVis9ak3ebRsCHgAO0Ol5dhzSSPa67k170CljzljCRiom6CJBexjIIz2JcYizZ3KNq0vo7RzXnYx'
    }
});
