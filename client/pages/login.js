import {useState, useContext } from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {Modal} from "antd";
import Link from "next/Link";
import AuthForm from "../components/forms/AuthForm";
import {useRouter} from "next/router";
import { UserContext } from "../context";

const Login = () => {
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const [loading, setLoading]=useState(false);

    const [state, setState]=useContext(UserContext);

    const router=useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
     try{
   // console.log(name,email,password,secret);
   setLoading(true);
   const {data} = await   axios.post(`/login`,{
            email,password,
        });

        // update context
        setState({
            user: data.user,
            token :data.token,
        });
        // save in local storage
        window.localStorage.setItem('auth',JSON.stringify(data));
       router.push("/user/dashboard");
     }
     catch(err){
        toast.error(err.response.data)
        setLoading(false);
     }
    };

    if(state && state.token) router.push("/");

    return (
        <div className="container-fluid">
            <div className="row py-5 bg-default-image ">
                <div className="col text-center">
                  <h1>Login</h1>  
                </div>
                </div>

            

                <div className="row py-5">
                    <div className="col-md-6 offset-md-3">
                    <AuthForm handleSubmit={handleSubmit}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        loading={loading}
                            page="login"
                        />
                        
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="text-center">Not yet registered? {""
                    } <Link href="/register" className="btn btn-smprimary btn-">Register</Link></p>
                </div>
            </div>
{/* forgot-password link */}
            <div className="row">
                <div className="col">
                    <p className="text-center"> <Link href="/forgot-password" className="btn btn-smprimary btn-">Forgot Password</Link></p>
                </div>
            </div>

        </div>
    )
}
export default Login;