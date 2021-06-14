const url = 'http://localhost:4000/api/v1/wayfarer/cities/';

class CityModel {
    static all() {
        return fetch(url)
            .then((res) => res.json())
    }
}

export default CityModel;