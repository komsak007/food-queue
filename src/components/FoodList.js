import React,{Component} from "react";
import FoodItem from "./FoodItem";
export default class FoodList extends Component{
  render(){
    const {items,handleDelete,handleEdit,clearList} = this.props
    return(

      <ul className="list-group my-5">
      <h3>รายการอาหาร</h3>
          {items.map(item=>{
              return(
                <FoodItem key={item.id}
                name={item.name}
                handleEdit={()=>handleEdit(item.id)}
                handleDelete={()=>handleDelete(item.id)}
                />
              )
          })}
          <button className="btn btn-danger" onClick={clearList}>Clear Food</button>
      </ul>
    )
  }

}
