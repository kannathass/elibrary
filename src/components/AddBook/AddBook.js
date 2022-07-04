import './AddBook.css';

export default function AddBook() {
    return(
        <div className="container">
             <div className="row" id="formAddBook">
                <div className="col-4"></div>
                <div className="col-4">
                <form>
                    <div className="form-group">
                    <label for="inputBookId">Book ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputBookId"
                        placeholder="Book ID"
                    />
                    </div>
                    <div className="form-group">
                    <label for="inputBookTitle">Book Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputBookTitle"
                        placeholder="Book Title"
                    />
                    </div>
                    <div className="form-group">
                    <label for="inputBookDesc">Book Desk</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputBookDesc"
                        placeholder="Book Description"
                    />
                    </div>
                    <div className="form-group">
                    <label for="inputAuthorName">Author Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputAuthorName"
                        placeholder="Author Name"
                    />
                    </div>
                    <div className="form-group">
                    <label for="inputNumberOfBook">Number of Book Available</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputNumberOfBook"
                        placeholder="Number of Book Available"
                    />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Book</button>
                </form>
                </div>
                <div className="col-4"></div>
            </div>

        </div>
    );
}