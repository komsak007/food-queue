import React,{Component} from "react";

export default class FoodItem extends Component{
  render(){
    const {name,handleEdit,handleDelete}=this.props
    return(
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
      <h6>{name}</h6>
      <div>
          <span onClick={handleEdit} className="text-primary"><i className="fas fa-edit mx-2"></i></span>
          <span onClick={handleDelete}className="text-danger"><i className="fas fa-trash-alt mx-2 "></i></span>

      </div>
      </li>
    )
  }

}
