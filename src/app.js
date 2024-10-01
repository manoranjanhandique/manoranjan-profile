import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import Body from "./component/Body";
import About from "./component/About";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
const App=()=>{
    return (
        <div className="container">
                <Header/>                
                <Outlet/>
                {/* <Body/>
                <Skills/>
                <About/>
                <Contact/> */}
                
            
        </div>
        
    )
};
export default App;