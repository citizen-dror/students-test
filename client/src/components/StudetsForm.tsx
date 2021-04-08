import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import MyCard from './MyCard';
import MySelect from './MySelect';
import CitiesService from '../services/citiesService';

interface Student {
    firstName: string,
    lastName: string,
    id: string,
}

function macthHeb(str: string) {
    return (str.match(/^[-\u0590-\u05FF]+$/))
}
function macthInt(str: string) {
    const parsed = parseInt(str, 10);
    return (!isNaN(parsed));
}

const StudentsForm: React.FC<{}> = () => {
    //const [ firstName, setFirstName ] = useState('');
    const [form, setForm] = useState({} as Student);
    const [errors, setErrors] = useState({} as Student);
    const [citisArr, setCitisArr] = useState([] as any[]);
    const onSelectCity = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value);
      }, []);

    useEffect(() =>{
        CitiesService.getAll()
        .then((data: any[] | undefined) => {
            if (data !== null && data !== undefined) {
               setCitisArr(data);
            }
         });
    },[]);

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
    const validateForm = () => {
        const { firstName, lastName, id } = form;
        console.log(JSON.stringify(form))
        const newErrors = {} as Student;
        // firstName errors
        if (!firstName || firstName === '') newErrors.firstName = 'cannot be blank!'
        else if (firstName.length > 20) newErrors.firstName = 'first Name is too long!'
        else if (!macthHeb(firstName)) newErrors.firstName = 'first Name should be in hebrew!'
        // lastName errors
        if (!lastName || lastName === '') newErrors.lastName = 'cannot be blank!'
        else if (lastName.length > 20) newErrors.lastName = 'last Name is too long!'
        else if (!macthHeb(lastName)) newErrors.lastName = 'last Name should be in hebrew!'
        // firstName errors
        if (!id) newErrors.id = 'id cannotbe blank!'
        else if (id.length !== 9) newErrors.id = 'ID Name must have 9 digits'
        else if (!macthInt(id)) newErrors.lastName = 'last Name should be in hebrew!'
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
            // No errors! Put any logic here for the form submission!
            alert('Thank you for your feedback!')
        }
    }
    return (
        <MyCard sizeWidth="300px">
            <Form>
                <Form.Group controlId="studentsForm.firstName">
                    <Form.Label>First Name: </Form.Label>
                    <Form.Control
                        type="text"
                        onChange={e => setField('firstName', e.target.value)}
                        isInvalid={!!errors.firstName}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.firstName}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="studentsForm.lastName">
                    <Form.Label>Last Name: </Form.Label>
                    <Form.Control
                        type="text"
                        onChange={e => setField('lastName', e.target.value)}
                        isInvalid={!!errors.lastName}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.lastName}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="studentsForm.dateBirth">
                    <Form.Label>Date Of Birth: </Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="studentsForm.id">
                    <Form.Label>Israel ID: </Form.Label>
                    <Form.Control
                        type="text"
                        onChange={e => setField('id', e.target.value)}
                        isInvalid={!!errors.id}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.id}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="studentsForm.city">
                    <Form.Label>City: </Form.Label>
                    <MySelect data={citisArr} keyProp='city_id' valProp='city_name' onChange={onSelectCity}></MySelect>
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit}>Save</Button>{' '}
            </Form>
        </MyCard>
    )
}

export default StudentsForm;
