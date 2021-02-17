 
import React, { Component } from 'react';
 
export default class AppComponent extends Component {
    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.delete = this.delete.bind(this);
        this.state = {
            title: '',
            description: '',
            price: '',
            array:[]
        }
    }
 
handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
}
delete =(title)=> {
    alert(title)
var array1=this.state.array;
    var c;
    for(var i=0;i<array1.length;i++)
    {
        if(array1[i].title===title)
        {
                c=i;
        }
    }
    array1.splice(c,1)
    localStorage.setItem('document',JSON.stringify(this.state.array));
    this.componentDidMount();
}
// on form submit...
handleFormSubmit(e) {
    e.preventDefault()
    var title=this.state.title;
    var description=this.state.description;
    var price=this.state.price;
    var object = {title,description,price};
    var a = JSON.parse(localStorage.getItem('document'))
    if(a==null)
    {
      a=[];
    }
    a.push(object);
    this.setState({
        array:a
    })
    localStorage.setItem('document',JSON.stringify(a));
    
//    localStorage.setItem('document',JSON.stringify(this.state));
}
 
// React Life Cycle
componentDidMount() {
//     this.documentData = JSON.parse(localStorage.getItem('document'));
 
//     if (localStorage.getItem('document')) {
//         this.setState({
//             title: this.documentData.title,
//            description: this.documentData.description,
//            price: this.documentData.price
//     })
// } else {
//     this.setState({
//         title: '',
//         description: '',
//         price: ''
//     })
// }
var a = JSON.parse(localStorage.getItem('document'))
if(a==null)
    {
      a=[];
    }
this.setState({
    array:a
})
}
 
render() {
    return (
        <div className="container">
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" name="title" className="form-control" value={this.state.title} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" name="description" className="form-control" value={this.state.description} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    {/* <input type="number" name="price" className="form-control" value={this.state.price} onChange={this.handleChange} /> */}
                    <select name='price' className='form-control' value={this.state.price} onChange={this.handleChange} >
                    {
               this.state.array.map((item,i)=>{
               return(
                    <option key={i} value={item.title}>{item.title}</option>
            )})
            }
                    </select>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
            {
               this.state.array.map((item,i)=>{
               return(<div key={i}>
                    <p onClick={()=>this.delete(item.title)}>{item.title}</p>
                </div>)})
            }
        </div>
    )
}
}