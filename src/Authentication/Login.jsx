import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password)


        // Login From AuthProvider
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset();
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="bg-gray-200 p-14 rounded-xl">
                <div className="text-xl text-black font-semibold text-center rounded-xl">
                    <h1>Login Your Account</h1>
                </div>
                <div className="border-solid"></div>

                <div>
                    <div className="hero-content">
                        <div className="w-2/4">
                            <form className="card-body" onSubmit={handleLogin}>
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
                                    <button className="btn mx-auto btn-primary bg-black text-white border-none w-full hover:text-black hover:bg-slate-500">Login</button>
                                </div>
                                <div className="text-[10px]">
                                    <h1>Don't Have an Account Please <Link to='/register' className="text-green-400">Register</Link></h1>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;