import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styles from "./CreateEdit.module.css";

export default function CreateEdit() {
    const { postId } = useParams();
    const navigate = useNavigate();

    const isEdit = Boolean(postId);

    const initialValues = {
        title: '',
        category: '',
        image: '',
        description: '',
        price: '',
        contact: '',
        location: '',
        availability: '',
    }

    const [formData, setFormData] = useState(initialValues);

    useEffect(() => {
        if (isEdit) {
            fetch(`http://localhost:3030/jsonstore/weddingHelper/weddingHelper/${postId}`)
                .then(res => res.json())
                .then(data => setFormData(data))
                .catch(err => console.error(err));
        }
    }, [isEdit, postId]);

    const changeHandler = (e) => {
        setFormData(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

const submitHandler = async (e) => {
    e.preventDefault();

    try {
        const method = isEdit ? "PUT" : "POST";
        const url = isEdit
            ? `http://localhost:3030/jsonstore/weddingHelper/weddingHelper/${postId}`
            : `http://localhost:3030/jsonstore/weddingHelper/weddingHelper`;

        const res = await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const data = await res.json();

        navigate(`/catalog/${data._id}/details`);

    } catch (err) {
        alert(err.message);
    }
};

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>
                {isEdit ? "Edit Post" : "Create New Post"}
            </h2>

            <form className={styles.form} onSubmit={submitHandler}>
                <label className={styles.label}>Title</label>
                <input className={styles.input} name="title" value={formData.title} onChange={changeHandler} required />

                <label className={styles.label}>Category</label>
                <select
                    className={styles.input}
                    name="category"
                    value={formData.category}
                    onChange={changeHandler}
                    required
                >
                    <option value="">-- Select a category --</option>
                    <option value="Gifts">Gifts</option>
                    <option value="Flowers">Flowers</option>
                    <option value="Decor">Decor</option>
                    <option value="Catering">Catering</option>
                    <option value="Photography">Photography</option>
                </select>


                <label className={styles.label}>Image URL</label>
                <input className={styles.input} name="image" value={formData.image} onChange={changeHandler} required />

                <label className={styles.label}>Description</label>
                <textarea className={styles.textarea} name="description" value={formData.description} onChange={changeHandler} required />

                <label className={styles.label}>Price (€)</label>
                <input
                    className={styles.input}
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={changeHandler}
                    required
                />


                <label className={styles.label}>Contact</label>
                <input className={styles.input} name="contact" value={formData.contact} onChange={changeHandler} required />

                <label className={styles.label}>Location</label>
                <input className={styles.input} name="location" value={formData.location} onChange={changeHandler} required />

                <label className={styles.label}>Availability</label>
                <input className={styles.input} name="availability" value={formData.availability} onChange={changeHandler} required />

                <input
                  type="submit"
                  className={styles.submitBtn}
                  value={isEdit ? "Save Changes" : "Create Post"}
                />

            </form>
        </div>
    );
}
