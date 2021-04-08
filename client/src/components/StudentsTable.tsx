import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyCard from './MyCard';
import StudentsService from '../services/studentsService';

const StudentsTable: React.FC<{}> = () => {
    const [studentsArr, setStudentsArr] = useState([] as any[]);
    useEffect(() => {
        StudentsService.getAll()
            .then((data: any[] | undefined) => {
                if (data !== null && data !== undefined) {
                    setStudentsArr(data);
                }
            });
    }, []);
    return (
        <MyCard>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Birth Date</th>
                        <th>Id</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {studentsArr.map((item) => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.birth_date}</td>
                            <td>{item.israel_id}</td>
                            <td>{item.city_name}</td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </MyCard>
    )
}

export default StudentsTable;
