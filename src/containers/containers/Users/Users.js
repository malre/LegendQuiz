import React, { Component } from 'react';
import { LineChart, PieChart,GeoChart, Timeline } from 'react-chartkick';
import 'chart.js';

class Users extends Component {
    render () {
        return (
            <div className="card-header-title.is-centered">
                <h1>The Users Page</h1>
                <LineChart data={{
                    "2019-12-10": 11, 
                    "2019-11-10": 6,
                    "2019-10-10":11,
                    "2019-9-10": 11, 
                    "2019-8-10": 6,
                    "2019-7-10":11,
                    "2019-6-10": 11, 
                    "2019-5-10": 6,
                    "2019-4-10":11
                 }} />
                <hr />

                <PieChart data={[["Logistick", 44], ["Computing", 23], ["Cook", 3],["Equipment", 14], ["Security", 16]]} />
                
            </div>
        );
    }
}

export default Users;