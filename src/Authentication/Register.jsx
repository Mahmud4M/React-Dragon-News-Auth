import { useContext, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [success, setSuccess] = useState('');
    const [loginError, setLoginError] = useState('');


    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        // Reset success and loginerror message after another submit
        setSuccess('')
        setLoginError('')

        //Passwod Validation
        if (password.length < 6) {
            setLoginError('Password Should be 6 Character or Longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setLoginError('Password have at least one Uppercase character')
            return;
        }

        //Create User
        createUser(email, password)
            .then(result => {
                console.log(result);
                setSuccess('User Created Successfully.')
            })
            .catch(error => {
                const errorMessage = error.message
                setLoginError(errorMessage)
            })
    }
    return (
        <>
            <Navbar></Navbar>
            <div className="bg-gray-200 p-14 rounded-xl">
                <div className="text-xl text-black font-semibold text-center rounded-xl">
                    <h1>Register Your Account</h1>
                </div>
                <div className="border-solid"></div>

                <div>
                    <div className="hero-content">
                        <div className="w-2/4">
                            <form className="card-body" onSubmit={handleRegister}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name="name" type="text" placeholder="Your Name" className="input input-bordered bg-gray-300 border-none w-full" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input name="photo" type="text" placeholder="Photo Url" className="input input-bordered bg-gray-300 border-none w-full" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="Email" className="input input-bordered bg-gray-300 border-none w-full" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name="password" type="password" placeholder="Password" className="input input-bordered bg-gray-300 border-none w-full" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn mx-auto btn-primary bg-black text-white border-none w-full hover:text-black hover:bg-slate-500">Register</button>
                                </div>
                                <div className="text-[10px]">
                                    <h1>Already Have an Account Please <Link to='/login' className="text-green-400">Login</Link></h1>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-2">
                {
                    success && <p className="text-green-700">{success}</p>
                }
                {
                    loginError && <p className="text-red-700">{loginError}</p>
                }
            </div>
        </>
    );
};

export default Register;