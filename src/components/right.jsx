import "./right.css";
function Right(proms){
    return(
        <div className="right_continer">
            <div className="top">
                <img src="https://img.icons8.com/?size=100&id=12437&format=png&color=000000" alt="User_Image"/>
                <h1 className="userDetails">Username</h1>
            </div>
            <div className="middle">
                <h2 className="userprogress">Your Progress</h2>
                <div className="lessonsList">
                    <ol>
                        <li>Lesson 1</li>
                    </ol>
                </div>
            </div>
            <div className="bottom">
                <button className="logout btn btn-danger" type="button" onClick={proms.userDetails}>LogOut</button>
                <button className="save btn btn-success" type="button">Save</button>
            </div>
        </div>
    )
}

export default Right;