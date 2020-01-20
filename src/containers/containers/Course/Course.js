import React, { Component } from 'react';
import Sponsor from './img/2014-sponsor-01.gif';

class Course extends Component {
    constructor(props){
        super(props);
    }
    state={
        loadCourse: '',
        loadImg: ''
    }
    componentDidMount() {
        this.parseQueryParams();
    }

    componentDidUpdate() {
        this.parseQueryParams();
    }

    parseQueryParams () {
        console.log(this.props);
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            if (this.state.loadCourse !== param[1]) {
                this.setState({loadCourse: param[1]});
            }
            
        }
    }

    render () {
        const CourseT ={
            textAlign: 'center',
            color: 'steelblue',
            flexDirection: 'row'
        }
        return (
           
            <div className="container">
                 <div className="card-header"> 
                  <div className="card text-white bg-secondary mb-3">
                  <img className="thumbnail" src={Sponsor} alt=''/>
                 <div className="card-header-title.is-centered">
                
            <div className="row">  <h1 className="card-title">{this.props.match.params.title}</h1>  </div>
            <div className="card-text card-body">
            You selected the Course with <u>ID: </u>&nbsp;{this.props.match.params.id}
            {this.props.match.params.sujet}
            <img className="image" src={this.state.loadCourse} alt=''/>
             </div> </div><div className="footer">
           </div> 
            </div>  </div>
            </div>
        );
    }
}

export default Course;