import React, {useEffect} from 'react';
import css from './UserForm.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressBook, faTruck, faWallet} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from "react-router-dom";
import slugify from "slugify";
import { useFormik } from 'formik';
import * as Yup from 'yup';


const UserForm = ({clicked, setter}) => {

    const initialValues = {
        name: '',
        surname: '',
        email: '',
        phoneNumber: '380',
    };

    const validationSchema = Yup.object({
        name: Yup.string().min(2).max(50).required('Name is a required field'),
        surname: Yup.string().min(2).max(50).required('Surname is a required field'),
        email: Yup.string().email('Invalid email address').min(2).max(320).required('Email is a required field'),
        phoneNumber: Yup.string().length(12).matches(/^[0-9]{12}$/, 'Invalid phone number').required('Phone number is required')
    });

    const onSubmit = (values) => {
        // Perform form submission logic using values
        console.log(values);
        setter(values);
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    useEffect(()=>{
        console.log('clicked!')
        formik.handleSubmit()
    }, [clicked])

    return (
        <div className={`${css.container}`}>
            <div className={`${css.contactsContainer}`}>
                <div className={`${css.contactsBlock}`}>
                    <div>
                            <FontAwesomeIcon icon={faAddressBook} className={`${css.Icon}`}/>
                    </div>
                            <h3> Contacts</h3>
                </div>

                    <div className={`${css.formContainer}`}>
                        <form >
                            <div className={`${css.formField}`}>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    placeholder="Your phone number"
                                    maxLength={12}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phoneNumber}
                                />
                                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                                    <div className={`${css.customError}`}>{formik.errors.phoneNumber}</div>
                                )}
                            </div>
                            <div className={`${css.formField}`}>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your name"
                                    maxLength={50}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <div className={`${css.customError}`}>{formik.errors.name}</div>
                                )}
                            </div>
                            <div className={`${css.formField}`}>
                                <input
                                    type="text"
                                    id="surname"
                                    placeholder="Your surname"
                                    maxLength={50}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.surname}
                                />
                                {formik.touched.surname && formik.errors.surname && (
                                    <div className={`${css.customError}`}>{formik.errors.surname}</div>
                                )}
                            </div >
                            <div className={`${css.formField}`}>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your email address"
                                    maxLength={320}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <div className={`${css.customError}`}>{formik.errors.email}</div>
                                )}
                            </div>
                        </form>
                </div>
            </div>
            <div className={`${css.deliveryContainer}`}>
                <div className={`${css.deliveryBlock}`}>
                    <div>
                        <FontAwesomeIcon icon={faTruck} className={`${css.Icon}`}/>
                    </div>
                    <h3> Delivery</h3>
                </div>
                <div className={`${css.checkboxD}`}>
                    <input type="checkbox" id="myCheckbox" checked/>
                    <label >To E-mail</label>
                </div>
            </div>
            <div className={`${css.paymentContainer}`}>
                <div className={`${css.paymentBlock}`}>
                    <div>
                        <FontAwesomeIcon icon={faWallet} className={`${css.Icon}`}/>
                    </div>
                    <h3> Payment</h3>
                </div>
                <div className={`${css.checkboxP}`} >
                    <input type="checkbox" id="myCheckbox" checked/>
                    <label >Bank card</label>

                </div>
            </div>
            <p className={`${css.paymentInfo}`}>We accept cards from any bank in the world.</p>
        </div>
            );
};

export {UserForm};