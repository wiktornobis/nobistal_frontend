"use client"
// import {  Form } from 'formik';
// import * as Yup from 'yup';
// import { TextField } from './TextField';
// import { Field } from './Field';
import {useEffect, useState} from 'react';
import Image from 'next/image'
import {Button} from '@mui/material';
import logo from '@/app/img/nobistal.png';
import Axios from 'axios';
import {url} from '@/app/components/constants/Constants';

import './form.scss';


import Nav from "@/app/components/nav/Nav";
import Footer from "@/app/components/footer/Footer";
import {useTranslations} from "next-intl";

function Page() {
    useEffect(() => {
        Axios.get(`${url}/api/get`).then((response) => {
            console.log(response)
        })
    },[])

    const t = useTranslations("Form");
    const [modal, setModal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    //
    // const validate = Yup.object({
    //     name: Yup.string()
    //         .min(3, i18n.t('validate.min'))
    //         .required(i18n.t('validate.name'))
    //         .trim(i18n.t('validate.trim'))
    //         .strict(true),
    //     email: Yup.string()
    //         .email(i18n.t('validate.email'))
    //         .required(i18n.t('validate.email')),
    //     message: Yup.string()
    //         .min(120, i18n.t('validate.message'))
    //         .required(i18n.t('validate.message')),
    // })
      const submit = (e) => {
          e.preventDefault()

          Axios.post(
            `${url}/api/insert`,
             {
                name: name,
                email: email,
                message: message,
            },
     {
                 withCredentials: true,
                 headers: {
                    'Content-Type': 'application/json',
                 }
           }).then((response) => {
                setModal(true)
                setErrorModal(false);
                setName('');
                setEmail('');
                setMessage('');

            }).catch((e) => {
                setErrorModal(true);
                setModal(false)
         })
      }
    return (
        <>
            <Nav />
            <form onSubmit={submit}>
                <div id='kontakt' className="contact_form_form">
                    <div className="contact_form_right">
                        <Image src={logo} alt="logo firmy" className='logo' />
                        <h3 className="contact_form_right_title">{t('title')}</h3>
                        <div className='contact_form_right_form'>
                             {errorModal && <p className='error-send'>{t('error')}</p>}
                             {modal && <p className='success-send'>{t('success1')}</p>}
                             {modal && <p className='success-send'>{t('success2')}</p>}
                            <div className="contact_form_right_form_first">
                                <div className="contact_form_right_form_first-name">
                                    <label>{t('name')}</label>
                                        <input
                                               name="name"
                                               id="name"
                                               type="text"
                                               placeholder='Krzysztof'
                                               value={name}
                                               onChange={(e) => {
                                                   setName(e.target.value)
                                               }}
                                        />

                                </div>
                                <div className="contact_form_right_form_first-name">
                                    <label>E-mail <b>*</b></label>
                                    <input
                                           name="email"
                                           id="email"
                                           type="email"
                                           placeholder='example@xyz.pl'
                                           value={email}
                                           onChange={(e) => {
                                               setEmail(e.target.value)
                                           }}
                                    />
                                </div>
                            </div>
                            <div className="contact_form_right_form_first-text">
                                <label>{t('text')} <b>*</b></label>
                                <textarea
                                    className="contact_form_right_form_first-text-area"
                                    name="message"
                                    id="message"
                                    type="message"
                                    required
                                    placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                    value={message}
                                    onChange={(e) => {
                                       setMessage(e.target.value)
                                    }}

                                />
                            </div>
                            <div className="contact_form_right_form_first-btn">
                                <Button className='catalog_btn' variant="outlined" size="small" type='submit'>
                                    {t('send')}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <Footer />
        </>
    );
}

export default Page;