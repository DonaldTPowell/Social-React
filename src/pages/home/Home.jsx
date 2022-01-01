import Feed from "../../components/feed/Feed";
import Rigthbar from "../../components/rightbar/Rigthbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./home.css"

function Home() {
    return ( 
        <div>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Rigthbar />
            </div>
        </div>
     );
}

export default Home;