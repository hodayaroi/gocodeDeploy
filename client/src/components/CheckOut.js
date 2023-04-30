import React, { useState } from "react";
import './CheckOut.css'


const Checkout = ()=>{
    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        phoneNumber:"",
        email:"",
        fullAdress:"",
        city:"",
        paymentMethod:""
    })

    const handleInputChange = (event)=>{
        const {name,value} = event.target;
        setFormData((prevData)=>({
            ...prevData,[name]:value
        }));
    };

    return(
        <form className="CheckoutForm">
             <h2 className="Form-title">Billing Details</h2>
             <div className="Form-group">
             <label htmlFor="firstName">First Name:</label>
             <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange}/></div>
             <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange}/></div>
                <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange}/></div>
                <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" value={formData.email} onChange={handleInputChange}/></div>
                <div className="form-group">
                <label htmlFor="fullAdress">Full Adress:</label>
                <input type="text" id="fullAdress" name="fullAdress" value={formData.fullAdress} onChange={handleInputChange}/></div>
                <div className="form-group">
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange}/></div>
                <div className="form-group">
                    <label htmlFor="paymentMethod">Payment Method:</label>
                    <select id="paymentMethod" name="paymentMethod" value={formData.paymentMethod} onChange={handleInputChange}>
                        <option value="">Select Payment Method</option>
                        <option value="creditCard">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        </select>

             </div>
        </form>

    )



}

export default Checkout;