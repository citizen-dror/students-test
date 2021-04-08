import React, { useState, useEffect, ChangeEvent } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyCard from './MyCard';
import MySelect from './MySelect';
import CitiesService from '../services/citiesService';
import StudentsService from '../services/studentsService';
import { macthHeb, macthInt } from '../services/utils';
import { Student } from '../interfaces/student.interface';

const StudentsForm: React.FC<{}> = () => {
    //const [ firstName, setFirstName ] = useState('');
    const [form, setForm] = useState({} as Student);
    const [errors, setErrors] = useState({} as Student);
    const [citisArr, setCitisArr] = useState([] as any[]);

    useEffect(() => {
        CitiesService.getAll()
            .then((data: any[] | undefined) => {
                if (data !== null && data !== undefined) {
                    setCitisArr(data);
                }
            });
    }, []);

    const setField = (field: any, value: any) => {
        setForm({
            ...form,
            [field]: value
        })
        // clean error object
        const felErr = (errors as any)[field];
        if (!!felErr) setErrors({
            ...errors,
            [field]: null
        })
    };

    const onSelectCity = (event: ChangeEvent<HTMLSelectElement>) => {
        setField('city_id', event.target.value);
    };

    const validateForm = () => {
        const { first_name, last_name, israel_id } = form;
        console.log(JSON.stringify(form))
        const newErrors = {} as Student;
        // firstName errors
        if (!first_name || first_name === '') newErrors.first_name = 'First Name cannot be blank!';
        else if (!macthHeb(first_name)) newErrors.first_name = 'First Name should be in hebrew!'
        else if (first_name.length > 20) newErrors.first_name = 'First Name is too long!'

        // lastName errors
        if (!last_name || last_name === '') newErrors.last_name = 'Last Name cannot be blank!';
        else if (!macthHeb(last_name)) newErrors.last_name = 'Last Name should be in hebrew!';
        else if (last_name.length > 20) newErrors.last_name = 'Last Name is too long!'

        // id errors
        if (!israel_id) newErrors.israel_id = 'ID cannotbe blank!'
        else if (!macthInt(israel_id)) newErrors.last_name = 'ID should conatin digits';
        else if (israel_id.length !== 9) newErrors.israel_id = 'ID must have 9 digits';

        return newErrors
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        // get our new errors
        const newErrors = validateForm()
        // Conditional logic:
        if (Object.keys(newErrors).length > 0) {
            // We got errors!
            setErrors(newErrors)
        } else {
            const { first_name, last_name, israel_id, birth_date, city_id } = form;
            const s: Student = {
                first_name: first_name,
                last_name: last_name,
                israel_id: israel_id,
                birth_date: birth_date,
                city_id: city_id
            };
            StudentsService.postStudent(s);
            alert('Thank you for your feedback!')
        }
    }
    return (
        <MyCard sizeWidth="300px">
            <Form>
                <Form.Group controlId="studentsForm.first_name">
                    <Form.Label>First Name: </Form.Label>
                    <Form.Control
                        type="text"
                        onChange={e => setField('first_name', e.target.value)}
                        isInvalid={!!errors.first_name}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.first_name}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="studentsForm.last_name">
                    <Form.Label>Last Name: </Form.Label>
                    <Form.Control
                        type="text"
                        onChange={e => setField('last_name', e.target.value)}
                        isInvalid={!!errors.last_name}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.last_name}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="studentsForm.dateBirth">
                    <Form.Label>Date Of Birth: </Form.Label>
                    <Form.Control type="text" 
                    isInvalid={!!errors.birth_date}
                     onChange={e => setField('birth_date', e.target.value)}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.birth_date}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="studentsForm.israel_id">
                    <Form.Label>Israel ID: </Form.Label>
                    <Form.Control
                        type="text"
                        onChange={e => setField('israel_id', e.target.value)}
                        isInvalid={!!errors.israel_id}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.israel_id}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="studentsForm.city_id">
                    <Form.Label>City: </Form.Label>
                    <MySelect data={citisArr} keyProp='city_id' valProp='city_name' onChange={onSelectCity}></MySelect>
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit}>Save</Button>{' '}
            </Form>
        </MyCard>
    )
}

export default StudentsForm;
