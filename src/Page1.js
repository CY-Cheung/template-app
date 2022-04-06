import './icon/icon.css'
import './icon/icon.js'
setInterval(()=>{
    let li = document.querySelectorAll(".card ul li");
    for(let i=0; i<li.length; i++) {
        if(li[i].parentElement.clientWidth < 500) {
            li[i].style["width"] = "25%";
        }
        if(li[i].parentElement.clientWidth >= 500 && li[i].parentElement.clientWidth < 700) {
            li[i].style["width"] = "20%";
        }
        if(li[i].parentElement.clientWidth >= 700) {
            li[i].style["width"] = "12%";
        }
    };
});
function Page1() {
    return (
		<main className="container col-lg-10 col-9">
            <div className="HeaderHeight"></div>
            <div id="CardLink" className="container">
                <h1>Bookmarks (Just some icons with link)</h1>
                <div className="card" style={{'width': '100%'}}>
                    <div className="card-header text-center h4">
                        <p className="invisible">Invisible Text</p>
                    </div>
                    <ul className="container">
                        <div className="row">
                            <li className="col-2">
                                <a href="https://mail.google.com/" target="_blank">
                                    <div className="icon">
                                        <i className="bi bi-envelope-fill"></i>
                                        Gmail
                                    </div>
                                </a>
                            </li>
                            <li className="col-2">
                                <a href="https://www.office.com/" target="_blank">
                                    <div className="icon">
                                        <i className="bi bi-windows"></i>
                                        CUHK Mail
                                    </div>
                                </a>
                            </li>
                            <li className="col-2">
                                <a href="https://portal.cuhk.edu.hk/" target="_blank">
                                    <div className="icon">
                                        <i className="bi bi-mortarboard-fill"></i>
                                        CUSIS
                                    </div>
                                </a>
                            </li>
                            <li className="col-2">
                                <a href="https://blackboard.cuhk.edu.hk/" target="_blank">
                                    <div className="icon">
                                        <i className="bi bi-pencil-fill"></i>
                                        BlackBoard
                                    </div>
                                </a>
                            </li>
                            <li className="col-2">
                                <a href="https://www.gradescope.com/" target="_blank">
                                    <div className="icon">
                                        <i className="bi bi-bank2"></i>
                                        Gradescope
                                    </div>
                                </a>
                            </li>
                            <li className="col-2">
                                <a href="https://www.math.cuhk.edu.hk/" target="_blank">
                                    <div className="icon">
                                        <i className="bi bi-meta"></i>
                                        CUHK MATH
                                    </div>
                                </a>
                            </li>
                            <li className="col-2">
                                <a href="https://drive.google.com/" target="_blank">
                                    <div className="icon">
                                        <i className="bi bi-google"></i>
                                        Google Drive
                                    </div>
                                </a>
                            </li>
                            <li className="col-2">
                                <a href="https://www.youtube.com/" target="_blank">
                                    <div className="icon">
                                        <i className="bi bi-youtube"></i>
                                        YouTube
                                    </div>
                                </a>
                            </li>
                            <li className="col-2">
                                <a href="https://www.instagram.com/" target="_blank">
                                    <div className="icon">
                                        <i className="bi bi-instagram"></i>
                                        Instagram
                                    </div>
                                </a>
                            </li>
                            <li className="col-2">
                                <a href="https://twitter.com/" target="_blank">
                                    <div className="icon">
                                        <i className="bi bi-twitter"></i>
                                        Twitter
                                    </div>
                                </a>
                            </li>
                            <li className="col-2">
                                <a href="https://www.facebook.com/" target="_blank">
                                    <div className="icon">
                                        <i className="bi bi-facebook"></i>
                                        Facebook
                                    </div>
                                </a>
                            </li>
                            <li className="col-2">
                                <a href="https://github.com/" target="_blank">
                                    <div className="icon">
                                        <i className="bi bi-github"></i>
                                        GitHub
                                    </div>
                                </a>
                            </li>
                            <li className="col-2">
                                <a href="https://www.geogebra.org/" target="_blank">
                                    <div className="icon">
                                        <i className="bi bi-bounding-box-circles"></i>
                                        Geogebra
                                    </div>
                                </a>
                            </li>
                            <li className="col-2">
                                <a href="https://www.math3d.org/" target="_blank">
                                    <div className="icon">
                                        <i className="bi bi-box"></i>
                                        Math3D
                                    </div>
                                </a>
                            </li>
                            <li className="col-2">
                                <a href="https://vdoc.pub/" target="_blank">
                                    <div className="icon">
                                        <i className="bi bi-file-earmark-text"></i>
                                        VDOC.PUB Library
                                    </div>
                                </a>
                            </li>
                            <li className="col-2">
                                <a href="https://acgsecrets.hk/" target="_blank">
                                    <div className="icon">
                                        <i className="bi bi-tv"></i>
                                        ACG Secrets.HK
                                    </div>
                                </a>
                            </li>  
                            <li className="col-2">
                                <a href="https://loader.to/en58/youtube-wav-converter.html" target="_blank">
                                    <div className="icon">
                                        <i className="bi bi-download"></i>
                                        YouTube to .wav
                                    </div>
                                </a>
                            </li>
                            <li className="col-2">
                                <a href="https://wiwi.video" target="_blank">
                                    <div className="icon">
                                        <i className="bi bi-music-note-list"></i>
                                        Wiwi Video
                                    </div>
                                </a>
                            </li>                             
                        </div>
                    </ul>
                    <div className="card-footer">
                        <p className="invisible">Invisible Text</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Page1;