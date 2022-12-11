import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Form, TextField, SelectField, SubmitButton } from '../../components/formelements';
import * as Yup from 'yup';
import * as FormTypes from '../../siteconfig/forms'
import { constructMessage } from '../../components/helperfunctions';


function DynForm() {

    const router = useRouter();
    let {form} =router.query;
    
    let formSchema = '';
    
    switch(form){
        case "edititem":
            formSchema=FormTypes.EditITem
          break;
        case "jumboregistration":
            formSchema=FormTypes.JumboRegistration
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

        for(var key of Object.keys(formSchema)){
            _formData[key] = "";

            if(formSchema[key].type === "text"){
                _validationSchema[key] = Yup.string();
            }else if(formSchema[key].type === "email"){
                _validationSchema[key] = Yup.string().email()
            }else if(formSchema[key].type === "select"){
                _validationSchema[key] = Yup.string().oneOf(formSchema[key].options.map(o => o.value));
            }

            if(formSchema[key].required){
                _validationSchema[key] = _validationSchema[key].required('Required');
            }
        }

        setFormData(_formData);
        setValidationSchema(Yup.object().shape({ ..._validationSchema }));
    }

    const getFormElement = (elementName, elementSchema) => {
        const props = {
            name: elementName,
            label: elementSchema.label,
            options: elementSchema.options
        };

        if (elementSchema.type === "text" || elementSchema.type === "email") {
            return <TextField {...props} />
        }

        if (elementSchema.type === "select") {
            return <SelectField  {...props} />
        }

    }

    const onSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
                
        const msg = constructMessage(values)

        console.log(msg);

        axios
            .post('http://localhost:3000/api/sendmsg', msg)
            .then((res) => {
                //alert(res.status);
                if (res.status == 200) {
                    resetForm(true);
                    setSubmitting(false);
                };
            });
    }

    return (
              <div>
              <Form
                enableReinitialize
                initialValues={formData}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >

                {Object.keys(formSchema).map( (key, ind) => (
                    <div key={key}>
                        {getFormElement(key, formSchema[key])}
                    </div>
                ))}

            <SubmitButton 
            title="Submit"
            />

            </Form>
            </div>
    );
}

export default DynForm;