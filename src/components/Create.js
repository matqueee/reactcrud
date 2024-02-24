import React, {useState} from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Create() {
    let history = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [checkbox, setCheckbox] = useState(false);

    const postData = () =>{
            axios.post(`https://65be429cdcfcce42a6f21d6e.mockapi.io/fakeData`, {
                firstName,
                lastName,
                checkbox
            }).then(() => {
                history('/read');
            })
        }

    const setFData = (event) =>{
        setFirstName(event.target.value);
    }

    const setLData = (event) =>{
        setLastName(event.target.value);
    }
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' onChange={setFData} />
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' onChange={setLData} />
        </Form.Field>
        <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' onChange={ (e) => setCheckbox(!checkbox)} />
        </Form.Field>
        <Button type='submit' onClick={postData}>Submit</Button>
    </Form>
    </div>
  )
}
