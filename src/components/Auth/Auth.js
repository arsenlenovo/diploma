

import { useContext } from "react";
import { logIn, logOut } from "../../firebase";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {user ? (
        <span>
          <div className="div-in-auth">
          Hello 
          <Link className="Link-in-auth" to="/orders">{user.displayName}</Link>!
          <button className="button-in-auth" onClick={logOut}>
          <img className="google" src="https://cdn-icons-png.flaticon.com/512/300/300221.png"    alt="google" />
            Sign out
            </button>
            </div>
        </span>
      ) : (
        <span>
          <div className="div-in-auth">
          Hello guest!
            <button className="button-in-auth" onClick={logIn}>
            <img className="google" src="https://cdn-icons-png.flaticon.com/512/300/300221.png"    alt="google" />
             Sign in
            </button>
          </div>
        </span>
      )}
    </div>
  );
}




// import { useContext } from "react"; 
// import { logIn, logOut } from "../../firebase"; 
// import { AppContext } from "../../App"; 
// import "./Auth.css" 
// import { NavLink } from "react-router-dom"; 
 
// export default function Auth() { 
//   const { user } = useContext(AppContext); 
 
//   return ( 
//     <div className="Auth"> 
//       {user ? ( 
//         <span> 
//           <div className="img-container"> 
//             <img 
//               src={ 
//                 user?.photoURL 
//               } 
//               alt="Placeholder" 
//             /> 
//             <div className="img-menu"> 
//               <NavLink to="/support">SupportPage</NavLink> 
//               <NavLink to="/orders">Orders</NavLink> 
//               <NavLink to="/profile">Your Profile</NavLink> 
//               <p>Coming Soon!</p> 
//               <button onClick={logOut}>Sign out</button> 
//             </div> 
//           </div> 
//         </span> 
//       ) : ( 
//         <span className="LogOut-img"> 
//           <div className="img-container"> 
//             <img 
//               src={ 
//                 user?.photoURL || 
//                 "https://icon-library.com/images/my-profile-icon-png/my-profile-icon-png-3.jpg" 
//               } 
//               alt="Placeholder" 
//             /> 
//             <div className="img-menu"> 
//               <NavLink to="/support">SupportPage</NavLink> 
//               <NavLink to="/orders">Orders</NavLink> 
//               <NavLink to="/profile">Your Profile</NavLink> 
//               <button onClick={logIn}>Sign in</button> 
//             </div> 
//           </div> 
//         </span> 
//       )} 
//     </div> 
//   ); 
// }