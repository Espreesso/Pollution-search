const Wikipedia = {
    searchWikipedia(name) {  
            return fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${name}`)
            .then((response) => {
                return response.json();
            })
            .then((jsonResponse) => {
                if (jsonResponse) {
                    return {
                        city: name,
                        info: jsonResponse.extract
                    }
                }
            })
    }
};

export default Wikipedia;