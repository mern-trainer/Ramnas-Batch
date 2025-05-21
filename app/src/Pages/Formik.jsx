// Formik -> Form Management Library

import { useFormik } from "formik"
import { object, ref, string } from "yup";

const Formik = () => {

    // const [formData, setFormData] = useState({ username: "", password: "" })

    // const handleChange = event => {
    //     setFormData({...formData, [event.target.name]: event.target.value})
    // }

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     console.log(formData);
    // }

    // return <div className="w-100 d-flex justify-content-center mt-3">
    //     <form onSubmit={handleSubmit} className="d-flex align-items-center flex-column w-50">
    //         <input onChange={handleChange} className="w-100" type="text" placeholder="john001" name="username"/>
    //         <input onChange={handleChange} className="w-100" type="password" placeholder="********" name="password"/>
    //         <button>Login to account</button>
    //     </form>
    // </div>

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            confirm_password: ""
        },
        onSubmit: ({ username, password, confirm_password }) => {
            console.log(username, password, confirm_password);
        },
        // validate: ({ username, password }) => {
        //     if (username == "") {
        //         return { username: "Username is required." }
        //     }
        //     if (username.length < 4 || username.length > 12) {
        //         return {username: "Min 4 and max 12 chars"}
        //     }
        // }
        validationSchema: object().shape({
            username: string()
                .required("Username is required")
                .min(4, "Minimum 4 chars required")
                .max(12, "Max 12"),
            password: string()
                .required("Password is required")
                .min(8, "Minimum 8 chars required")
                .max(16, "Max 16")
                .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/, { message: "Invalid"}),
            confirm_password: string()
                .required("Confirm password is required")
                .oneOf([ref("password")], "Password does not match")
        })
    })

    
    return <div className="w-100 d-flex justify-content-center mt-3">
        <form onSubmit={formik.handleSubmit} className="d-flex align-items-center flex-column w-50">
            <input onChange={formik.handleChange} value={formik.values.username} className="w-100" type="text" placeholder="john001" name="username"/>
            <span>{formik.errors.username}</span>
            <input onChange={formik.handleChange} value={formik.values.password} className="w-100" type="password" placeholder="********" name="password" />
            <span>{formik.errors.password}</span>
            <input onChange={formik.handleChange} value={formik.values.confirm_password} className="w-100" type="password" placeholder="********" name="confirm_password" />
            <span>{formik.errors.confirm_password}</span>
            <button type="submit">Login to account</button>
        </form>
    </div>
}

export default Formik