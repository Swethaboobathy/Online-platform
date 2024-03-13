import React from "react";
import { Link } from 'react-router-dom';
const Header=()=>{
    return(
    <div class="home">
            <header>
            <h1><b>Edu</b>Hash</h1>
        <nav>
            <ul>
                <li><Link to="/home">HOME</Link></li>
                <li><Link to="/about">ABOUT US</Link></li>
                <li><Link to="/courses">COURSES</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
                <li class="login"><Link to="/login">LOGIN</Link></li>
                <li class="sigin"><Link to="/signup">SIGN UP</Link></li>
            </ul>
        </nav>
</header>
<div class="one">
        <h5 class="hitext">Expert Instruction</h5>
        <h1>It's time to amplify your Online Learning Career</h1></div>
       <p class="para">Edu<span class="spl">Hash</span> Welcomes You.....</p>   
<div class="specials">
<div>
    <h3>Expert Teacher</h3>
     <p></p>
</div>
<div>
    <h3>Self Development</h3>
    <p></p>
</div>
<div>
    <h3>Remote Learning</h3>
    <p></p>
</div>
<div>
    <h3>Life time support</h3>
    <p></p>
</div>
</div>
</div>
    )
}
export default Header