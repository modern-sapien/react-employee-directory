import React from 'react';

const EmployeeItem = ({employee: {name, email, picture, phone, dob}}) => {
    return (
        <div className="row my-3 py-2 border border-secondary">
            <div className="col-2 d-flex align-content-center">
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6">            
                    <img className="rounded " src={picture.thumbnail} alt="" style={{ width: "50px" }}/>
                    </div>
                </div>
            </div>

            <div className="col-2"><h5>{name.first} {name.last}</h5></div>
            <div className="col-2"><h5>{phone}</h5></div>
            <div className="col-4"><h5><a href={email}>{email}</a></h5></div>
            <div className="col-1"><h4>{dob.age}</h4></div>
        </div>
    );
};

export default EmployeeItem;