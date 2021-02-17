import React, { Component } from 'react'

export default class Employee extends Component {
    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        // this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.delete = this.delete.bind(this);
        this.state = {
            
            Employees:[]
        }
    }
    delete =(item) =>{
      alert(item)
      var array=this.state.Employees;
          var c;
          for(var i=0;i<array.length;i++)
          {
              if(array[i].name===item)
              {
                      c=i;
              }
          }
          array.splice(c,1)
          localStorage.setItem('employee',JSON.stringify(array));
          this.componentDidMount();
      }

    
    componentDidMount(){
        var a = JSON.parse(localStorage.getItem('employee'))
      
        this.setState({
                Employees:a
           })
    }
    render() {
            const Employee=this.state.Employees;
        return (
            <div className="container">
                <center>
                    <p style={{float:'left'}}>
                        <b>
                            Lists Of Employee
                        </b>
                    </p>
                    <button className="btn btn-primary" style={{float:'right'}} onClick={()=>this.props.history.push('/AddEmployee')}> + ADD Employee</button>
                    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Role</th>
      <th scope='col'>Organization</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr> */}
    {
               Employee.map((item,i)=>{
               return(
                <tr key={i}>
                <th scope="row">{i}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>{item.organization}</td>
                <td> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" onClick={()=>this.delete(item.name)}>
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
                </td>
              </tr>
               )})
            }
   
  </tbody>
</table>
                </center>
              
            </div>
        )
    }
}
