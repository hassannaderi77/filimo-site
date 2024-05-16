import {Container} from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { BsFire } from "react-icons/bs";
import { GrSearch } from "react-icons/gr";
import { PiTelevisionBold } from "react-icons/pi";


import logoC from '../../assets/images/logoC.png'
import './MyNavbar.css'

function MyNavbar() {
    return (
        <>
            <Container fluid className='myNavbar'>
                <div className="rightNavbar">
                    <NavLink to='/' className="imgLogo"><img src={logoC} className='logo' /></NavLink>
                    <NavLink to="/filimotor" className="filimitor" ><BsFire /> فیلم و سریال</NavLink>
                    <NavLink to="/search" className="search" ><GrSearch /> جستجو </NavLink>
                </div>
                <div className="leftNavbar">
                <NavLink to="/accounts" className="account" ><Button variant="success"><PiTelevisionBold style={{backgroundColor : "transparent"}} /> خرید اشتراک</Button></NavLink>
                <NavLink to="/login" className="login" ><Button variant="secondary">ورود</Button></NavLink>
                </div>
            </Container>
        </>
    );
}

export default MyNavbar;