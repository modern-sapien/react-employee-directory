import React, { Component } from 'react'
import EmployeeItem from "./EmployeeItem"


const Employees = ({filteredEmployees, handleEmailSort}) => {

    return (
        <>
        <div className="row bg-warning">
            <div className="col-2"><h2>Image</h2></div>
            <div className="col-3"><h2>Name</h2></div>
            <div className="col-2"><h2>Phone</h2></div>
            <div className="col-3" onClick={handleEmailSort}><h2>Email</h2></div>
            <div className="col-2"><h2>DOB</h2></div>

        </div>
            {filteredEmployees.map(employee => (
                <EmployeeItem key={employee.login.uuid} employee={employee} />
            ))}
        </>
    );
};

export default Employees;


