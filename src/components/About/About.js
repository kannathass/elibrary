import './About.css';
import imagePath from '../../assets/images/Vertical.jpg';
import { aboutLibrary, aboutLibraryExtra } from '../../helper/constant';
export default function About() {
    return(
        <div className="container">
            <div className="row" id="formAboutPage">
                <div className="row">
                <div className="col-4">
                    <img
                    src={imagePath}
                    className="rounded mx-auto d-block"
                    alt="Library"
                    />
                </div>
                <div className="col-4">
                    <p>
                        {aboutLibrary}
                    </p>
                    <p>
                        {aboutLibraryExtra}
                    </p>
                </div>
                <div className="col-4"></div>
                </div>
            </div>
        </div>
    );
}