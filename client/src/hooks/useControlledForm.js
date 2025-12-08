import {useState} from 'react';

export default function useControlledForm(initialValues, onSubmit) {

    const [formData, setFormData] = useState(initialValues);
    const [error, setError] = useState('');

    const changeHandler = (e) => {
        setFormData(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = async () => {
        setError('')

        try {
            await onSubmit(formData);
            setFormData(initialValues);
        }catch (err) {
            setError(err.message);
        }
    }


    return {
        formData,
        changeHandler,
        submitHandler,
        error,
        setFormData
    }
}