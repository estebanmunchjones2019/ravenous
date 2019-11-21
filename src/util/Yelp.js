const apikey = 'ZhfdakZ9rZwHa1p1QJi4A31lPnRrbeCXfgVII867fNKwlvkGsFw5DWHzoLTbmxIfK6zjzABE7-7FkjUEtimgd7hFZ_lVK4J6oEXTXAXHm2QA3kj3xmo4DFnUDjQSXXYx';
const Yelp = {
    search(term, location, sortBy){
      const endpoint = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;

      return fetch(endpoint, { headers: { Authorization: `Bearer ${apikey}` } })
              
              .then((response)=>{
                return response.json();
              })

              .then((jsonResponse)=>{
                if (jsonResponse.businesses){
                    return jsonResponse.businesses.map((business)=>{
                        return {
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories.alias,
                            rating: business.rating,
                            reviewCount: business.review_count,
                            id: business.id
                        }
                    });
                }else{
                    throw new Error('Request failed!');
                }
              })
     }
};

export default Yelp;

