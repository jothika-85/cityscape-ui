import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        companyName: '',
        mobile: '',
        aadhaar: '',
        role: 'CONTRACTOR' 
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            
            const response = await axios.post('http://localhost:8080/api/auth/register', formData);
            if (response.status === 200 || response.status === 201) {
                alert("Registration Successful! Welcome " + formData.username);
                navigate('/'); 
            }
        } catch (error) {
            console.error("Error during registration:", error);
            alert("Registration Failed! Backend check pannunga.");
        }
    };

    return (
        <div style={{ padding: '40px', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
            <h2 style={{ color: '#002147' }}>Contractor KYC Registration</h2>
            
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                
                <input type="text" name="username" placeholder="Username" onChange={handleChange} required style={inputStyle} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required style={inputStyle} />
                
                
                <input type="text" name="companyName" placeholder="Company Name" onChange={handleChange} required style={inputStyle} />
                <input type="text" name="mobile" placeholder="Mobile (10 Digits)" maxLength="10" onChange={handleChange} required style={inputStyle} />
                <input type="text" name="aadhaar" placeholder="Aadhaar (12 Digits)" maxLength="12" onChange={handleChange} required style={inputStyle} />
                
                <button type="submit" style={btnStyle}>Register & Submit KYC</button>
            </form>
        </div>
    );
}


const inputStyle = { padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' };
const btnStyle = { background: '#002147', color: 'white', padding: '12px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' };

export default Register;