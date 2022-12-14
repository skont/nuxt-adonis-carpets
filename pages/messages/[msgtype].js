import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Form, TextField, SelectField, SubmitButton, TextFieldBS } from '../../components/formelements';
import * as Yup from 'yup';
import * as FormTypes from '../../siteconfig/forms'
import { constructMessage } from '../../components/helperfunctions';
import { Row, Col } from 'react-bootstrap';
import { requestToBodyStream } from 'next/dist/server/body-streams';

function DynForm() {

    const router = useRouter();
    let { msgtype } = router.query;

    let formSchema = '';

    switch (msgtype) {
        case "edititem":
            formSchema = FormTypes.EditITem
            break;
        case "jumboregistration":
            formSchema = FormTypes.JumboRegistration
            break;
        default:
        //default code to be executed 
        //if none of the above case executed
    }


    const [formData, setFormData] = useState({});
    const [validationSchema, setValidationSchema] = useState({});

    useEffect(() => {
        initForm(formSchema);
    }, []);

    const initForm = (formSchema) => {
        let _formData = {};
        let _validationSchema = {};

        for (var row of Object.keys(fs)) {

                           //console.log(key);
                // console.log(formSchema);
                // console.log(formSchema[key]);

                _formData[key] = "";

                if (formSchema[key].type === "text") {
                    _validationSchema[key] = Yup.string();
                } else if (formSchema[key].type === "email") {
                    _validationSchema[key] = Yup.string().email()
                } else if (formSchema[key].type === "select") {
                    _validationSchema[key] = Yup.string().oneOf(formSchema[key].options.map(o => o.value));
                }

                if (formSchema[key].required) {
                    _validationSchema[key] = _validationSchema[key].required('The field required');
                }

                if (formSchema[key].min) {
                    _validationSchema[key] = _validationSchema[key].min(formSchema[key].min, `The length of the fied should be ${formSchema[key].min}`)
                }
            
        }

        setFormData(_formData);
        setValidationSchema(Yup.object().shape({ ..._validationSchema }));
    }

    const getFormElement = (elementName, elementSchema) => {
        const props = {
            name: elementName,
            label: elementSchema.label,
            placeholder: elementSchema.placeholder,
            options: elementSchema.options
        };
        //console.log(props,elementName,elementSchema.type);

        if (elementSchema.type === "text" || elementSchema.type === "email") {
            return (
                <TextField {...props} />
            )
        }

        if (elementSchema.type === "select") {
            return (
                <SelectField  {...props} />
            )
        }

    }

    const getForm = (fsName, fsSchema) => {
        return (

            Object.keys(fsSchema).map((key) => (
                <Col key={key}>
                    {getFormElement(key, fsSchema[key])}
                </Col>
            ))


        )
    }

    const handleSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
        setSubmitting(false);

        const msg = constructMessage(msgtype, values)
        axios
            .post('http://localhost:3000/api/sendmsg', msg)
            .then((res) => {
                //alert(res.status);
                if (res.status == 200) {
                    resetForm(true);

                    //setStatus(true);
                };
            });


    }

    return (
        <div>
            <Form
                enableReinitialize
                initialValues={formData}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >

                {Object.keys(formSchema).map((key) => (
                    <Row key={key}>
                        {getForm(key, formSchema[key])}
                    </Row>
                ))}

                <Row>
                    <SubmitButton title="Submit" />
                </Row>


            </Form>
        </div>
    );
}

export default DynForm;