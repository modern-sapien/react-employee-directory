import React from 'react';

const EmployeeItem = ({employee: {id, image, name, username, github, email}}) => {
    return (
        <div className="row">
            <div className="col-2">{image}</div>
            <div className="col-2">{name}</div>
            <div className="col-2">{username}</div>
            <div className="col-2">{email}</div>
            <div className="col-3">{github}</div>
        </div>
    );
};

export default EmployeeItem;