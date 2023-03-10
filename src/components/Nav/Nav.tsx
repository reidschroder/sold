import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getUserFromLocal, handleLogout } from "../../store/userSlice";
import { FiHome, FiSettings, FiUser } from "react-icons/fi";
import "./Nav.css";


//Created inital Nav bar. Needs ternary in nav bar to return profile and logout if user is logged in or not

const Nav: React.FC<any> = () => {
  //const appState = useSelector<any, any>((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const user = useSelector((state: any) => state.users.user);
  const [log, setLog] = useState("Login");
	const [logButton, setLogButton] = useState(<></>);

  useEffect(() => {
    dispatch(getUserFromLocal());
  }, []);

  useEffect(() => {
    if (user?.username) {
			setLog("Logout");
			setLogButton(<FiUser/>);
		} else {
			setLog("Login");
			setLogButton(<FiHome />);
		}
	}, [user]);

  const handleClick = async() => {
		if (user?.username) {
			navigate("/");
			await dispatch(handleLogout());
		} else {
			navigate("/login");
		}
	};

 

  return (
    <div className="navbar">
      <NavLink className="poke-logo" to="/">
          <img id="logo" src="/pokemart.png" alt="pokemart"/>
      </NavLink>
      <h3 className="welcome">Welcome, {user?.firstName || "Trainers"}! </h3>
      {/* need to set to if logged in display flag */}
      {/* <img id="flag" src={`https://flagcdn.com/16x12/${user.address.countryFlagUrl}.png`} alt={user.address.countryFlagUrl} /> */}
      <nav>
        {JSON.stringify(user) !== '{}' ?
        <>
        <img id="flag" src={`${user.address.countryFlagUrl}`} alt={user.address.countryFlagUrl} />
        <NavLink
        to="/checkout"
      >
        
        <p>Checkout</p>
      </NavLink>
        <NavLink
        to="/"
        onClick={handleClick}
      >
        
        <p>Logout</p>
      </NavLink>
      </>
      :
      <>
      <NavLink
          to="/login"
          
        >
          
          <p>login</p>
        </NavLink>
        <NavLink
          to="/register"
          
        >
          
          <p>Register</p>
        </NavLink>
      </>
      }
        {/* <NavLink
          to="/login"
          
        >
          
          <p>login</p>
        </NavLink>
        <NavLink
          to="/register"
          
        >
          
          <p>Register</p>
        </NavLink>
        <NavLink
          to="/"
          onClick={handleClick}
        >
          
          <p>Logout</p>
        </NavLink> */}
      </nav>
    </div>
  );
};
export default Nav;
