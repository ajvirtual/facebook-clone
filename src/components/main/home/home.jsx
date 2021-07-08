import './home.css'
import HomeLeftSide from './left_panel/home_left_side'
import HomeRightSide from './right_panel/home_right_side'
import HomeCenter from './center_panel/home_center'

export default function Home(props) {
    
    return(
       <>
            <div className="home_main_container">
                <div className="home_left_side">
                    <HomeLeftSide />
                </div>
                <div className="home_center">
                    <HomeCenter />
                </div>
                <div className="home_right_side">
                    <HomeRightSide />
                </div>
            </div>
       </>
    )
}