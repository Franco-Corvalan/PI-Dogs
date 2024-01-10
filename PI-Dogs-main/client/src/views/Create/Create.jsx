import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDog } from '../../redux/actions';
import validation from '../../components/validation/validation';
import { useNavigate } from "react-router-dom";

import './Create.css';

const CreateDogForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const temperaments = useSelector((state) => state.temperaments);

    const [formData, setFormData] = useState({
        name: '',
        image: '',
        height1: '',
        height2: '',
        weight1: '',
        weight2: '',
        life_span: '',
        temperament: []
    });

    const [errors, setErrors] = useState({
        name: '',
        image: '',
        height1: '',
        height2: '',
        weight1: '',
        weight2: '',
        life_span: '',
        temperament: []
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    const handleTemps = (event) => {
        const select = event.target.value;

        if (!formData.temperament.includes(select)) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                temperament: [...prevFormData.temperament, select]
            }))
            event.target.value = '';
        }
    }

    const handleRemoveTemp = (tempRemove) => {
        const SelectTemp = formData.temperament.filter(
            (temp) => temp !== tempRemove
        );
        setFormData({ ...formData, temperament: SelectTemp });
    }

    useEffect(() => {
        const errorValidate = validation(formData)
        setErrors(errorValidate)
    }, [formData])

    const handleSubmit = (event) => {
        event.preventDefault();
        const finalyData = {
            ...formData,
            height: `${formData.height1} - ${formData.height2}`,
            weight: `${formData.weight1} - ${formData.weight2}`,
            life_span: `${formData.life_span}years`
        };

        dispatch(createDog(finalyData));
        alert("Dog Create");
        navigate("/home")
        resetForm();
    }

    const resetForm = () => {
        setFormData({
            name: "",
            image: "",
            height1: "",
            height2: "",
            weight1: "",
            weight2: "",
            life_span: "",
            temperament: [],
        })
    }


    return (
        <div className='Container__Create'>
            <form className='Form__Create' action='post' onSubmit={handleSubmit}>

                <div className='Container__Inputs'>
                    <label className='Form__Label' htmlFor='name'>
                        NAME:

                        <input
                            className='Form__Input'
                            name="name"
                            type='text'
                            onChange={handleChange}
                            value={formData.name}
                        />

                        {errors.name && <p className='error'>{errors.name}</p>}
                    </label>
                </div>

                <div className='Container__Inputs'>
                    <label className='Form__Label'>
                        IMAGE:

                        <input
                            className="Form__input"
                            name="image"
                            type='text'
                            onChange={handleChange}
                            value={formData.image}
                        />

                        {errors.image && <p className='error'>{errors.image}</p>}
                    </label>


                </div>

                <div className='Container__Inputs'>
                    <label className='Form__Label'>
                        HEIGHT:

                        <input
                            className='Form__input'
                            name='height1'
                            type="number"
                            onChange={handleChange}
                            value={formData.height1}
                        />

                        <input
                            className='Form__input'
                            name='height2'
                            type='number'
                            onChange={handleChange}
                            value={formData.height2}
                        />

                        {errors.height1 && <p className='error'>{errors.height1}</p>}

                    </label>
                </div>

                <div className='Container__Inputs'>
                    <label className='Form__Label'>
                        WEIGHT:

                        <input
                            className='Form__input'
                            name='weight1'
                            type='number'
                            onChange={handleChange}
                            value={formData.weight1}
                        />

                        <input
                            className='Form__input'
                            name='weight2'
                            type='number'
                            onChange={handleChange}
                            value={formData.weight2}
                        />

                        {errors.weight1 && <p className='error'>{errors.weight1}</p>}

                    </label>
                </div>

                <div className='Container__Inputs'>
                    <label className='Form__Label'>
                        LIFE SPAN:

                        <input
                            className='Form__input'
                            name='life_span'
                            type='text'
                            onChange={handleChange}
                            value={formData.life_span}
                        />
                        {errors.life_span && <p className='error'>{errors.life_span}</p>}

                    </label>
                </div>

                <div className='Container__TEMP'>
                    <label className='Form__Label'>
                        TEMPERAMENTS:

                        <select onChange={handleTemps}>
                            <option value="Default" disabled selected>(Seleccionar temperamentos)</option>
                            {
                                temperaments?.map((temperament) => {
                                    return (
                                        <option value={temperament.name} key={temperament.id}>
                                            {temperament.name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        {errors.temperament && <p className='error'>{errors.temperament}</p>}
                        <div className='Cls'>
                            {
                                formData.temperament.map((SelectTemp, index) => (
                                    <div key={index} className='SelectTemp'>
                                        <button type='button' className='SelectRemov' onClick={() => handleRemoveTemp(SelectTemp)}>X</button>
                                        <p className='SelectText'>{SelectTemp}</p>
                                    </div>
                                ))
                            }
                            
                        </div>
                        
                    </label>
                </div>

                {
                    Object.keys(errors).length === 0
                        ? <button className='Form__submit' type='submit' value="Submit" >SUBMIT</button>
                        : null
                }

            </form>
        </div>
    )
};

export default CreateDogForm;
