import React from 'react'

const List =({list})=>  (
  
    <table>
      <th>title</th>
      <th>description</th>
      <th>price</th>
      <th>thumbnail</th>
      
      {list.map((item,index)=>(
        
        <Item key={index} item={item}/>  /* Rendu de chaque élément de la liste */
      ))}
  </table>
  )
  
const Item = ({item})=>( 
 
  <tr>
    <td>{item.title}</td>
    <td>{item.description}</td>
    <td>{item.price}</td>
    <td><img src={item.thumbnail} alt='product'></img></td>
  </tr>

);
  

export default List;