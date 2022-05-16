
import RoundedBtn from "../../components/RoundedBtn/RoundedBtn";
import Navbar from "../../components/navbar/Navbar";
export default function Home(){
    return(
        <div>
            <Navbar header='Home'/>
            <p style={{color:'red',fontStyle:'italic'}}>Home component</p>
            <p message='message from home component'></p>
            
            
        </div>
        
    );
}



