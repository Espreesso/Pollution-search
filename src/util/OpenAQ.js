let OpenAQ = {
    search(term) {
        return fetch(
            `https://api.openaq.org/v1/latest/?country=${term}&parameter=pm25`)
        .then((response) => {
            return response.json();
        })
        .then((jsonResponse) => {
            if (jsonResponse.results) {
                return jsonResponse.results.map((result) => {
                    return {
                        city: result.city,
                        value: result.measurements[0].value
                    }
                })
            }
        })
    }
};

export default OpenAQ;