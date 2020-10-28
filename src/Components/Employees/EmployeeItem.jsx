import React from 'react';

const EmployeeItem = ({employee: {id, image, name, username, github, email}}) => {
    return (
        <div className="row">
            <img className="col-2 round-img"src={image} alt="" style={{ width: "40px" }}/>
            <div className="col-2"><h4>{name}</h4></div>
            <div className="col-2"><h4>{username}</h4></div>
            <div className="col-2"><h4>{email}</h4></div>
            <div className="col-3"><h4>Github <a href={github}>{username}</a></h4></div>
        </div>
    );
};

export default EmployeeItem;