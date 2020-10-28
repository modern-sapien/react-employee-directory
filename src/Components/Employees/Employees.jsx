import React from 'react';

const Employees = (users) => {
    return (
        <div>
            {employees.map(employee => (
                <EmployeeItem key={employee.id} employee={employee} />
            ))}
        </div>
    );
};

export default Employees;