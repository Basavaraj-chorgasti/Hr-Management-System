import React, { Component } from 'react'

export default class AddRole extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        // this.delete = this.delete.bind(this);
        this.state = {
            name: '',
            description:'',
        }
    }

    handleChange= (e)=> {
        this.setState({[e.target.name]:e.target.value});
    }
    handleFormSubmit=()=>{

        var name = this.state.name;
        var description = this.state.description;

        var object = {name,description};
        var data = JSON.parse(localStorage.getItem('role'))
        if(data==null)
        {
            data=[];
        }
        data.push(object);
        localStorage.setItem('role',JSON.stringify(data));
        this.props.history.push('/Role');
    }
    // componentDidMount(){

    //     var a = JSON.parse(localStorage.getItem('role'));
    //     var b = JSON.parse(localStorage.getItem('organization'));

    //     this.setState({
    //         Role:a,
    //         Organization:b,
    //     })

    // }
    render() {
       
        return (
            <div>
                 <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" name="description" className="form-control" value={this.state.description} onChange={this.handleChange} />
                </div>
               
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
            </div>
        )
    }
}
