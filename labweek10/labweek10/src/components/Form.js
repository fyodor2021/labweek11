import React, { useState } from 'react'
import Header from '../components/Header'
import Field from '../components/Field'
export default () => {
    const [result, setResult] = useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        const flexEndStyle = {display: "flex",
            justifyContent: "flex-end",
            width:"90%",
        }
        const getElementValue = (id) => {
            return document.getElementById(id).value
        }
        setResult(
            <div style={{ display: "flex", justifyContent:"center", width:"100%"}}>
                <div style={{ display: "flex", flexDirection: "column" , width:"50%"}}>
                    <h1 style={flexEndStyle}>Email: </h1>
                    <h1 style={flexEndStyle}>Full Name: </h1>
                    <h1 style={flexEndStyle}>Address: </h1>
                    <h1 style={flexEndStyle}>City: </h1>
                    <h1 style={flexEndStyle}>Province: </h1>
                    <h1 style={flexEndStyle}>Postal Code: </h1>
                </div>

                <div style={{display:"flex", flexDirection: "column", width:"50%"}}>
                    <h1 style={{marginRight:"10px"}}>{getElementValue('email')}</h1>
                    <h1 style={{marginRight:"10px"}}>{getElementValue('name')}</h1>
                    <h1 style={{marginRight:"10px"}}>{getElementValue('address')}</h1>
                    <h1 style={{marginRight:"10px"}}>{getElementValue('city')}</h1>
                    <h1 style={{marginRight:"10px"}}>{getElementValue('province')}</h1>
                    <h1 style={{marginRight:"10px"}}>{getElementValue('postal')} </h1>
                </div>

            </div>)

    }
    return (
        <React.Fragment>
            <form onSubmit={onSubmit}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Header text="Email" tag="h3" />
                    <Header text="Name" tag="h3" />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Field id="email" className="form-control" placeholder="Enter Email" />
                    <Field id="name" className="form-control" placeholder="Full Name" />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Header text="Address" tag="h3" />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Field id="address" className="form-control" placeholder="1234 Main St" />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Header text="Address 2" tag="h3" />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Field id="address2" className="form-control" placeholder="Apartment, Studio, or Floor" />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Header text="City" tag="h3" />
                    <Header text="Province" tag="h3" />
                    <Header text="Postal Code" tag="h3" />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                    <Field style={{width:"33%"}} id="city" className="form-control" placeholder="" />
                    <select id="province" style={{ marginRight: "10px",width:"33%" }} className='dropdown' placeholder='Choose'>
                        <option value="choose">Choose...</option>
                        <option value="NL">NL</option>
                        <option value="PE">PE</option>
                        <option value="NS">NS</option>
                        <option value="NB">NB</option>
                        <option value="QC">QC</option>
                        <option value="ON">ON</option>
                        <option value="MB">MB</option>
                        <option value="SK">SK</option>
                        <option value="AB">AB</option>
                        <option value="BC">BC</option>
                        <option value="YT">YT</option>
                        <option value="NT">NT</option>
                        <option value="NU">NU</option>
                    </select>
                    <Field style={{width:"33%"}} id="postal" className="form-control" placeholder="" />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <input style={{ marginRight: "10px" }} type='checkbox' value="terms" />
                    <Header text="Agree Terms & Conditions" tag="h3" />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button className='btn btn-success' type='submit'>Submit</button>
                </div>
            </form>
            <div>
                {result}
            </div>
        </React.Fragment>

    )
}

