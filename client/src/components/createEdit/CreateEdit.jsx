import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import styles from "./CreateEdit.module.css";
import useControlledForm from "../../hooks/useControlledForm";
import useRequest from "../../hooks/useRequest";

export default function CreateEdit() {
    const { postId } = useParams();
    const navigate = useNavigate();
    const request = useRequest()

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

    const onSubmit = async (formData) => {

    const url = isEdit
        ? `http://localhost:3030/data/weddingHelper/${postId}`
        : `http://localhost:3030/data/weddingHelper`;

    const method = isEdit ? "PUT" : "POST";

    try { 
    const result = await request(url, method, { ...formData })
    navigate(`/catalog/${result._id}`)
    } catch (err) {
        alert(err.message)
    };
    };

    const { formData, changeHandler, submitHandler, error, setFormData } = useControlledForm(initialValues, onSubmit);

    useEffect(() => {
        if (isEdit) {
            request(`http://localhost:3030/data/weddingHelper/${postId}`)
                .then(result => setFormData(result))
                .catch(err => console.error(err));
        }
    }, [isEdit, postId, setFormData, request]);

    useEffect(() => {
    if (error) {
        alert(error);
    }
    }, [error]);

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>
                {isEdit ? "Edit Post" : "Create New Post"}
            </h2>

            <form className={styles.form} action={submitHandler}>
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
