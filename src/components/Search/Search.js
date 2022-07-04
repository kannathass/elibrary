import './Search.css';

export default function Search() {
    return(
        <div className="container">
            <div className="row" id="formSearch">
                <div className="col-2"></div>
                <div className="col-8">
                <form>
                    <div className="form-group">
                    <label for="inputUserName">Book Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputUserName"
                        placeholder="Enter key word"
                    />
                    </div>
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
                {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                </button> */}
                <div>
                    <table className="table table-sm">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr data-toggle="modal" data-target="#exampleModal">
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr data-toggle="modal" data-target="#exampleModal">
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr data-toggle="modal" data-target="#exampleModal">
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
                <div className="col-2"></div>
            </div>   
        </div>
    );
}