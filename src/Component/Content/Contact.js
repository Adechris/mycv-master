import React, {useState} from 'react'
import { Container ,  Alert} from 'react-bootstrap';
// import { BsSendCheck } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { TiSocialSkype, TiSocialYoutube } from 'react-icons/ti';
import { FaPhone, FaTwitterSquare, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as yup from 'yup'

function Contact() {
    const [showAlert, setShowAlert] = useState(false);
    const basicSchema = yup.object().shape({
        name: yup.string().required('Required!'),
        email: yup.string().email('Enter a valid Email Address').required('Required!'),
        message: yup.string().required('Required!'),
    })


    const onSubmit = async (values, actions) => {
        try {
            await fetch('http://localhost:3100/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            setShowAlert(true); // Show the alert
            await actions.resetForm();
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const { values, handleChange, handleBlur, errors, touched, handleSubmit, isSubmitting } = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: basicSchema,
        onSubmit,
    });
    return (
        <Container fluid className='contact'>
            <div className='text-center'>
                <h4><b>Contact Me</b></h4>
                <div>
                    <p>Let's get in Touch</p>
                    <div className='content'></div>
                </div>
            </div>
            <div className=''>
                <div className='social-icons'>
                    <h5>Get In Touch</h5>

                    <a href='www.facebook.com/Oladokun Adeyinka'>
                        <FaFacebook className='mx-2' />
                    </a>

                    <a href='www.Twitter.com@chris_adeyinka'>
                        <FaTwitterSquare className='mx-2' />
                    </a>

                    <a href='linkedin.com/in/oladokun-adeyinka-bbb036279'>
                        <FaLinkedin className='mx-2' />
                    </a>

                </div>
                <div className='send'>
                    <h6>Send Your Email Here!</h6>
                </div>
                <div className='social'>
                    <FaFacebook className='mx-2 fIcon' />
                    <FaTwitterSquare className='mx-2 fIcon2' />
                    <FaInstagram className='mx-2  fIcon3' />
                    <FaLinkedin className='mx-2  fIcon4' />
                    <FaPhone className='mx-2  fIcon' />
                    <AiOutlineMail className='mx-2  fIcon3' />
                    <TiSocialSkype className='mx-2  fIcon2' />
                    <TiSocialYoutube className='mx-2  fIcon4' />
                </div>
                <div className='text-center mt-3'>
                    <p>
                        I am interested in Freelance opportunities - especially ambitious or large Projects.
           <br /> However, if you have other request or question,
                         don't hesitate to contact me using below form either.
             
             
                </p>
                </div>
            </div>
            {showAlert && (
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                    Message sent successfully!
                </Alert>
            )}
            <form autoComplete='off' onSubmit={handleSubmit} className='container shadow py-3 mt-5'>
                <label htmlFor='first Name'> Name</label>
                <input
                    type='text'
                    id='name'
                    placeholder='John Doe'
                    className={`${errors.name && touched.name ? 'is-invalid' : ''} form-control shadow-none mt-2`}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <div className='errors'>{errors.name && touched.name && errors.name}</div>


                <label htmlFor='email' className='mt-2'>Email</label>
                <input
                    type='email'
                    id='email'
                    placeholder='johndoe12@gmail.com'
                    className={`${errors.email && touched.email ? 'is-invalid' : ''} form-control shadow-none mt-2`}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <div className='errors'>{errors.email && touched.email && errors.email}</div>


                <label htmlFor='message' className='mt-2'>Message</label>
                <textarea
                    type='text'
                    id='message'
                    placeholder='Your Message goes in here...'
                    className={`${errors.message && touched.message ? 'is-invalid' : ''} form-control shadow-none mt-2`}
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <div className='errors'>{errors.message && touched.message && errors.message}</div>



                <button
                    className='btn btn-success mt-3'
                    type='submit'
                    disabled={isSubmitting}
                >
                    Send Message
    </button>

            </form>


        </Container>
    )
}

export default Contact