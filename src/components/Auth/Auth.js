import { useContext } from "react"; 
import { logIn, logOut } from "../../firebase"; 
import { AppContext } from "../../App"; 
import "./Auth.css" 
import { NavLink } from "react-router-dom"; 
 
export default function Auth() { 
  const { user } = useContext(AppContext); 
 
  return ( 
    <div className="Auth"> 
      {user ? ( 
        <span> 
          <div className="img-container"> 
            <img 
              src={ 
                user?.photoURL 
              } 
              alt="Placeholder" 
            /> 
            <div className="img-menu">  
              <NavLink className="order" to="/orders">Orders</NavLink> 
              <div className="div-in-auth">
            <button className="button-in-auth" onClick={logOut}>
            <img className="google-img" src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="google" />
             Sign in
            </button>
              </div>
            </div> 
          </div> 
        </span> 
      ) : ( 
        <span className="LogOut-img"> 
          <div className="img-container"> 
            <img 
              src={ 
                user?.photoURL || 
                "https://icon-library.com/images/my-profile-icon-png/my-profile-icon-png-3.jpg" 
              } 
              alt="Placeholder" 
            /> 
            <div className="img-menu"> 
              <NavLink className="order2" to="/orders">Orders</NavLink> 
              <div className="div-in-auth">
            <button className="button-in-auth" onClick={logIn}>
            <img className="google-img" src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="google" />
             Sign in
            </button>
          </div>
            </div> 
          </div> 
        </span> 
      )} 
    </div> 
  ); 
}