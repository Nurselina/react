import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup";
import { Button, FormField, Label } from 'semantic-ui-react';
import ExtendRentTextInput from '../utilities/customFormControls/ExtendRentTextInput';

export default function CarAdd() {
    const initialValues = { modelYear: "", modelName: "" }
    const schema = Yup.object({
        modelYear: Yup.number().required("Model yılı zorunlu."),
        modelName: Yup.string().required("Araç modeli zorunlu.")
    })

    return (
        <div>
            <Formik
                initialValues={initialValues}  //başlangıç değeri
                validationSchema={schema}      //doğrulama şeması
                onSubmit={(values)=>{
                    console.log(values);
                }}
            >
                <Form className='ui form' >
                    <ExtendRentTextInput name="modelYear" placeholder="Model Yılı"/>
                
                    <ExtendRentTextInput name="modelName" placeholder="Model Name"/>
                   
                    <Button color='green' type='submit'>Ekle</Button>
                </Form>

            </Formik>
        </div>
    )
}
