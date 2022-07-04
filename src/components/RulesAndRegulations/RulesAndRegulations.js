import './RulesAndRegulations.css';
import bookImage from "../../assets/images/Vertical.jpg";

export default function RulesAndRegulations() {
    return(
        <div className="container">
            <div className="row" id="formRules">
                <div className="row">
                <div className="col-4">
                    <img
                    src={bookImage}
                    className="rounded mx-auto d-block"
                    alt="Library"
                    />
                </div>
                <div className="col-4">
                    <p className="h2">Rules & Regulations</p>
                    <ol type="1">
                    <li>Readers should observe strict silence inside the Library.</li>
                    <li>
                        Use of Mobile phones is not permitted inside the Library
                        premises.
                    </li>
                    <li>
                        Users are not allowed to carry eatables/drinks inside the
                        Library premises.
                    </li>
                    <li>Library membership card is non-transferable.</li>
                    <li>
                        Readers are not allowed to bring their personal books or any
                        printed material (spiral/bound book/photocopied material) inside
                        the Library.
                    </li>
                    </ol>
                </div>
                <div className="col-4"></div>
                </div>
            </div>
        </div>
    );
}