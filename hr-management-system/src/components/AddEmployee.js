import React, { Component } from 'react'

export default class AddEmployee extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        // this.delete = this.delete.bind(this);
        this.state = {
            name: '',
            email: '',
            role: '',
            organization:'',
            Role:[],
            Organization:[],
        }
    }

    handleChange= (e)=> {
        this.setState({[e.target.name]:e.target.value});
    }
    handleFormSubmit=()=>{

        var name = this.state.name;
        var email = this.state.email;
        var role = this.state.role;
        var organization = this.state.organization;

        var object = {name,email,role,organization};
        var data = JSON.parse(localStorage.getItem('employee'))
        if(data==null)
        {
            data=[];
        }
        data.push(object);
        localStorage.setItem('employee',JSON.stringify(data));
        this.props.history.push('/Employee');
    }
    componentDidMount(){

        var a = JSON.parse(localStorage.getItem('role'));
        var b = JSON.parse(localStorage.getItem('organization'));

        this.setState({
            Role:a,
            Organization:b,
        })

    }
    render() {
        const role = this.state.Role;
        const organization = this.state.Organization;
        return (
            <div>
                 <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="email" className="form-control" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Role</label>
                    {/* <input type="number" name="price" className="form-control" value={this.state.price} onChange={this.handleChange} /> */}
                    <select name='role' className='form-control' value={this.state.role} onChange={this.handleChange} >
                    {
               role.map((item,i)=>{
               return(
                    <option key={i} value={item.name}>{item.name}</option>
            )})
            }
                    </select>
                </div>
                <div className="form-group">
                    <label>Organization</label>
                    {/* <input type="number" name="price" className="form-control" value={this.state.price} onChange={this.handleChange} /> */}
                    <select name='organization' className='form-control' value={this.state.organization} onChange={this.handleChange} >
                    {
               organization.map((item,i)=>{
               return(
                    <option key={i} value={item.name}>{item.name}</option>
            )})
            }
                    </select>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
            </div>
        )
    }
}
