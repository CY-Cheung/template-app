import './button/button.css'
import './button/button.js'
import Clock1 from './Clock1';
import Clock2 from './Clock2';

function SideMenu() {
    return (
		<nav className="container col-lg-2 col-3">
            <div className="HeaderHeight"></div>
            <h6>This is a Side Menu</h6>
            <div className="container py-3" style={{'text-align': 'center'}}>
                <a href='/#/'><button className="button-rainbow" style={{'width': '80%'}}>Page 1</button></a><br/>
                <a href='/#/page2'><button className="button-rainbow" style={{'width': '80%'}}>Page 2</button></a><br/>
                <a href='/#/page3'><button className="button-rainbow" style={{'width': '80%'}}>Page 3</button></a><br/>
                <a href='/#/page4'><button className="button-rainbow" style={{'width': '80%'}}>Page 4</button></a><br/>
                <a href='/#/page5'><button className="button-rainbow" style={{'width': '80%'}}>Page 5</button></a><br/>
            </div>
            <h6>Time</h6>
            <Clock1 />
            <Clock2 />
            
        </nav>
    );
}
export default SideMenu;



