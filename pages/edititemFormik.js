import { Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

// import edititemForm from '../siteconfig/forms'


// const FormField = ({ fieldlabel, fieldname, fieldtype, placeholder }) => {
//     return (
//         <Form.Group className="mb-3" controlId={fieldname}>
//             <Form.Label>{fieldlabel}</Form.Label>
//             <Form.Control
//                 type={fieldtype}
//                 name={fieldname}
//                 placeholder={placeholder}
//                 onChange={formik.handleChange}
//                 value={formik.values.ItemID} />
//         </Form.Group>
//     )

// }

const EditItem = () => {
    // Note that we have to initialize ALL of fields with values. These
    // could come from props, but since we don’t want to prefill this form,
    // we just use an empty string. If we don’t do this, React will yell
    // at us.

    return (
        <Formik
            initialValues={{ values:'' }}
            onSubmit={(values, { resetForm }) => {
                //construct the message

                const msg = {
                    "EditItem": {
                        "Edits": {
                            "Edit":
                            {
                                "Item": values
                            },
                            "ChangeReason": "TI"
                        }
                    }
                }


                axios
                    .post('http://localhost:3000/api/sendmsg', msg)
                    .then((res) => {
                        //alert(res.status);
                        if (res.status == 200) {
                            resetForm({ values: '' })
                        };
                    });

            }}>
            {formik => (
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3" controlId="ItemID">
                        <Form.Label>External Id</Form.Label>
                        <Form.Control
                            type="text"
                            name="ItemID"
                            placeholder="Enter extid"
                            onChange={formik.handleChange}
                            value={formik.values.ItemID} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Warehouse">
                        <Form.Label>Warehouse</Form.Label>
                        <Form.Control
                            type="text"
                            name="Warehouse"
                            placeholder="Item Warehouse"
                            onChange={formik.handleChange}
                            value={formik.values.Warehouse} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Location">
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            type="text"
                            name="Location"
                            placeholder="Item Location"
                            onChange={formik.handleChange}
                            value={formik.values.Location} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    )
};

export default EditItem