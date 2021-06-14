import React, { Component } from 'react';
import CityModel from '../models/CityModel';
import MainArea from '../components/MainArea';

class CityContainer extends Component {
    state = {
        cities: [],
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        CityModel.all().then((res) => {
            console.log("Response from cities api: ", res);
            this.setState({
                cities: res,
            })
        })
    }

    render() {
        return(
            <div>
                <MainArea cities={this.state.cities}/>
            </div>
        )
    }
}

export default CityContainer;