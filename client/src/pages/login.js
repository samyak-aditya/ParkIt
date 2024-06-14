import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import './signup.css';

export const Login = () => {
    const [formData, setFormData] = useState({
        
        email: '',
        
        password: '',
        
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/signup', formData);
            console.log('Signup successful:', response.data);
            // Reset form fields after successful signup
            setFormData({
                username: '',
                email: '',
                phoneNumber: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error('Error signing up:', error);
            // Handle error scenario here
        }
    };

    return (
        <div className='main-container'>
            <div className='left-container'>
            <figure>
                <blockquote class="blockquote">
                    <h1 className="h1 display-1" id='companyname'>ParkIt</h1>
                </blockquote>
                <figcaption class="blockquote-footer">
                <h1 class="display-6" id='compar'>Your Friendly Neighbourhood Valet</h1>
                </figcaption>
            </figure>
            </div>
            <div className='right-container'>
            <div class="right">
            <h1 className="h1 display-1" id='head'>Welcome Back</h1>
            <form onSubmit={handleSubmit} class>
                    <div>
                        <input
                            className='inputbox'
                            type="text"
                            placeholder='Name'
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className='inputbox'
                            type="password"
                            name="confirmPassword"
                            placeholder='Confirm Password'
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className='submit' type="submit">Sign In</button>
                </form>
                <label class="form-check-label" id='lasttext'>Don’t have an Account?<Link to={'/signup'}>Register Now</Link></label>
            </div>     
            </div>
        </div>
    );
};

export default Login;