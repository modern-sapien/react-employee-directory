import React, { Component } from 'react'
import EmployeeItem from "./EmployeeItem"


const Employees = ({employees}) => {
    return (
        <>
        <div className="row bg-warning">
            <div className="col-2"><h2>Image</h2></div>
            <div className="col-3"><h2>Name</h2></div>
            <div className="col-3"><h2>Phone</h2></div>
            <div className="col-3"><h2>Email</h2></div>

        </div>
            {employees.map(employee => (
                <EmployeeItem key={employee} employee={employee} />
            ))}
        </>
    );
};

export default Employees;