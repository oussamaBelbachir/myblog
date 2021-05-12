import React, {useState} from 'react'
import './contact.styles.scss';
import Button from '../../components/button/button.components';
import FormInput2 from '../../components/formInput2/formInput2.component';


import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    message: yup.string().required(),
});

const inputs = [
    {
        label : "name",
        name : "name",
        type : "name",
    },
    {
        label : "email",
        name : "email",
        type : "email",
    },
    {
        label : "message",
        name : "message",
        type : "message",
    }
]

function Contact() {

    const {register , handleSubmit , formState: { errors }} = useForm({
        resolver : yupResolver(schema)
    });
    const [loading , setLoading] = useState(false);
    const [check , setCheck] = useState(false);

    
    const onSubmit = (data,e) => {
        setLoading(true);
        console.log(data);
        setTimeout(() => {
            setLoading(false);
            e.target.reset();
            setCheck(true);

        },3000);
    }

    if(check){
        setTimeout(() => {
            setCheck(false);
        },3000);
    }


    return (
        <div className="contact">
            <h1>Contact us</h1>
            {(check && <div className="msgSent">Your message has been sent.</div>)}
            <form onSubmit={handleSubmit(onSubmit)} className="form">
            {
                inputs.map((input,key) => 
                <FormInput2 
                    label = {input.name}
                    type = {input.type}
                    re = {register(input.name)}
                    errors = {errors}
                    key={key}
                    textarea = {input.name === "message" ? true : false}
                />
            )
            }
            <Button loading={loading} width={"100%"}>send</Button>

        </form>

        </div>
    )
}

export default Contact
