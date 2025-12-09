import { useNavigate } from "react-router";
import styles from "./Login.module.css";
import useControlledForm from "../../hooks/useControlledForm";
import useRequest from "../../hooks/useRequest";
import { useEffect } from "react";
import { useUser } from "../../contexts/UserContextFile";

export default function Login() {
    const navigate = useNavigate();
    const request = useRequest();
    const { login } = useUser();

    const initialValues = {
        email: "",
        password: "",
    };

    const onSubmit = async (formData) => {
        const { email, password } = formData;

        const result = await request(
            "http://localhost:3030/users/login",
            "POST",
            { email, password }
        );

        login(result);

        navigate("/");
    };

    const {changeHandler, submitHandler, error} = useControlledForm(initialValues, onSubmit);

    useEffect(() => {
        if (error) alert(error);
    }, [error]);

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Login</h2>

            <form className={styles.form} action={submitHandler}>
                <label className={styles.label}>Email</label>
                <input className={styles.input} name="email" onChange={changeHandler} type="email" required />

                <label className={styles.label}>Password</label>
                <input className={styles.input} name="password" onChange={changeHandler} type="password" required />

                <button className={styles.button} type="submit">Login</button>
            </form>
        </div>
    );
}
