import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react'

const EditItem = () => {

    const [enteredItemID, setItemID] = useState('');
    const [enteredWarehouse, setWarehouse] = useState('');
    const [enteredLocation, setLocation] = useState('');


    const ChangeHandlerItemID = (event) => {
        setItemID(event.target.value);
    };

    const ChangeHandlerWarehouse = (event) => {
        setWarehouse(event.target.value);
    };

    const ChangeHandlerLocation = (event) => {
        setLocation(event.target.value);
    };


    const submitHandler = (event) => {
        event.preventDefault();

          //construct the message

            const msg = {
                'EditItem': {
                    'Edits': {
                        'Edit':
                        {
                            'Item':{
                                'ItemID': enteredItemID,
                                'Warehouse': enteredWarehouse,
                                'Location': enteredLocation
                            }
                                                        },
                        'ChangeReason': 'TI'
                    }
                }
            }


            axios
                .post('http://localhost:3000/api/sendmsg', msg)
                .then((res) => {
                    //alert(res.status);
                    if (res.status == 200) {
                        setItemID('');
                        setWarehouse('');
                        setLocation('');
                    };
                });


    };

    return (
        <Form onSubmit={submitHandler}>
{/* 
            {itemForm.map((item, index) => (
              <FormField {...item} key={index} />
            ))} */}

            <Form.Group className="mb-3" controlId="ItemID">
                <Form.Label htmlFor="">External Id</Form.Label>
                <Form.Control
                    type="text"
                    name="ItemID"
                    placeholder="Enter extid"
                    onChange={ChangeHandlerItemID}
                    value={enteredItemID} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Warehouse">
                <Form.Label>Warehouse</Form.Label>
                <Form.Control
                    type="text"
                    name="Warehouse"
                    placeholder="Item Warehouse"
                    onChange={ChangeHandlerWarehouse}
                    value={enteredWarehouse} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Location">
                <Form.Label>Location</Form.Label>
                <Form.Control
                    type="text"
                    name="Location"
                    placeholder="Item Location"
                    onChange={ChangeHandlerLocation}
                    value={enteredLocation} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
};

export default EditItem