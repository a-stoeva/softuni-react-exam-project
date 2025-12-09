import { useNavigate } from "react-router";
import styles from "./Register.module.css";
import useControlledForm from "../../hooks/useControlledForm";
import useRequest from "../../hooks/useRequest";
import { useEffect } from "react";
import { useUser } from "../../contexts/UserContextFile";

export default function Register() {
    const navigate = useNavigate();
    const request = useRequest();
    const { login } = useUser();

    const initialValues = {
        email: "",
        password: "",
        confirmPassword: ""
    };

    const onSubmit = async (formData) => {
        const { email, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            throw new Error("Passwords do not match!");
        }

        const result = await request(
            "http://localhost:3030/users/register",
            "POST",
            { email, password }
        );

        login(result);

        navigate("/");
    };

    const {changeHandler, submitHandler, error } =
        useControlledForm(initialValues, onSubmit);

    useEffect(() => {
        if (error) alert(error);
    }, [error]);

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Register</h2>

            <form className={styles.form} action={submitHandler}>
                <label className={styles.label}>Email</label>
                <input className={styles.input} name="email" onChange={changeHandler} type="email" required />

                <label className={styles.label}>Password</label>
                <input className={styles.input} name="password" onChange={changeHandler} type="password" required />

                <label className={styles.label}>Repeat Password</label>
                <input className={styles.input} name="confirmPassword" onChange={changeHandler} type="password" required />

                <button className={styles.button} type="submit">Register</button>
            </form>
        </div>
    );
}
