import { Button} from 'react-bootstrap';
import {
    Formik,
    Form as FormikForm,
    Field,
    ErrorMessage,
    useFormikContext,
    useField,
    useFormik
} from 'formik';

export function Form(props) {
    return (
        <Formik
            {...props}
        >
            <FormikForm className="needs-validation" noValidate="">
                {props.children}
            </FormikForm>
        </Formik>)
}

export function TextField(props) {
    const { name, label, placeholder, ...rest } = props
    return (
        <>
            {label && <label htmlFor={name}>{label}</label>}
            <Field
                className="form-control"
                type="text"
                name={name}
                id={name}
                placeholder={placeholder || ""}
                {...rest}
            />
            <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
        </>
    )
}


export function SelectField(props) {
    const { name, label,placeholder, options } = props
    return (
        <>
            {label && <label for={name}>{label}</label>}
            <Field
                className="form-control"
                as="select"
                id={name}
                name={name}
            >
                <option value="" >{placeholder}</option>
                {options.map((optn, index) => <option value={optn.value} label={optn.label || optn.value} />)}
            </Field>
            <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
        </>
    )
}

export function SubmitButton(props) {
    const { title, ...rest } = props;
    const { isSubmitting } = useFormikContext();

    return (
        <Button type="submit" variant="primary" {...rest} disabled={isSubmitting}>{title}</Button>
    )
}
