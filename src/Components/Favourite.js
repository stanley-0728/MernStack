import React,{useEffect,useState} from 'react'
import Navbar from './NavBar'
import axios from 'axios'

const Favourite = () => {
    const [Favourites, setFavourites] = useState([]);
    useEffect(() => {
        getData()
    }, []);
    const getData = () => {
        axios.get("/api/private/getData")
            .then(response => {
                setFavourites(response.data.data);
            })
    }
   
const renderCards = Favourites.map((favorite, index) => {


    return <tr key={index} scope="row">
                  <td >{favorite.username}</td>
        <td >{favorite.email} </td>   
             <td >{favorite.phoneNumber} </td>
             <td >{favorite.address} </td>
             <td><button onClick={() => onClickDelete(favorite.phoneNumber)} className="banner__button"> Remove </button></td>
    </tr>
  });
  const onClickDelete = (phoneNumber) => {

    const variables = {
     phoneNumber:phoneNumber
    }
  
    axios.post("/api/private/delete", variables)
        .then(response => {
            if (response.data.success) {
                getData()
            } else {
                alert('Failed to Remove From Data')
            }
        })
  }
  
    return (
      <div>
        <Navbar/>
        <div className="container-fluid  p-0 "style={{marginTop:"100px"}} >
          <table className="table table-dark table-hover">
          <thead>
              <tr>
                  <th scope="col" >User Name</th>
                  <th scope="col" >Email</th>
                  <th scope="col" >Phone Number</th>
                  <th scope="col" >Address</th>
                  <td scope="col" style={{color:"white"}} >Remove from Data</td>
              </tr> 
          </thead>
          <tbody>
              {renderCards}
          </tbody>
      </table>
          
  
  
        </div>
      </div>
    )
  }
export default Favourite
