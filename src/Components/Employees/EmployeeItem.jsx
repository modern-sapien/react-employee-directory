import React from 'react';

const EmployeeItem = ({employee: {name, email, picture, phone}}) => {
    return (
        <div className="row">
            <img className="col-2 round-img" src={picture.thumbnail} alt="" style={{ width: "40px" }}/>
            <div className="col-3"><h4>{name.first} {name.last}</h4></div>
            <div className="col-3"><h4>{phone}</h4></div>
            <div className="col-3"><h4><a href={email}>{email}</a></h4></div>
        </div>
    );
};

export default EmployeeItem;