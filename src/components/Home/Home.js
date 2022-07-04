import './Home.css';
import imagePath from '../../assets/images/Library-Management.png'

export default function Home() {
    return(
        <div className="container">
            <div className="row" id="formHome">
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
                    Library Management System is a highly integrated, user-friendly,
                    and compatible library automation system for complete
                    computerization of all the in-house operations of any size or type
                    of library. The library management software is intuitive,
                    efficient, and compliant. Lib-Man is embedded with multilingual
                    fonts, Barcode & QR Code fonts. The integrated library software
                    developed in consultation with prolific senior library
                    professionals is currently being used by as many as 500 libraries.
                    The client-server version of Lib-Man is embedded with free
                    Devanagari Fonts. It supports all the latest technologies which
                    include cloud hosting, mobile app, tablets, SMS, email, UHF RFID,
                    secured payment gateway, etc.
                    </p>
                </div>
                <div className="col-4"></div>
                </div>
            </div>
        </div>
    );
}