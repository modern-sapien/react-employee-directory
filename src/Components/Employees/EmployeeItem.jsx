import React from 'react';

const EmployeeItem = ({employee: {name, email, picture, phone}}) => {
    return (
        <div className="row my-3 py-2 border border-secondary">
            <div className="col-2 d-flex align-content-center">
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6">            
                    <img className="rounded " src={picture.thumbnail} alt="" style={{ width: "50px" }}/>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>

            <div className="col-3"><h4>{name.first} {name.last}</h4></div>
            <div className="col-3"><h4>{phone}</h4></div>
            <div className="col-3"><h4><a href={email}>{email}</a></h4></div>
        </div>
    );
};

export default EmployeeItem;