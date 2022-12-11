import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {Modal} from "antd";
import Link from "next/Link";
import AuthForm from "../components/forms/AuthForm";
import {useRouter} from "next/router";
const Login = () => {
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const [loading, setLoading]=useState(false);
    const router=useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
     try{
   // console.log(name,email,password,secret);
   setLoading(true);
   const {data} = await   axios.post(`${process.env.NEXT_PUBLIC_API}/login`,{
            email,password,
        });
       router.push("/");
     }
     catch(err){
        toast.error(err.response.data)
        setLoading(false);
     }
    };

    return (
        <div className="container-fluid">
            <div className="row py-5 bg-default-image ">
                <div className="col text-center">
                  <h1>Login</h1>  
                </div>
                </div>

                {loading ? <h1>Loading</h1> : ""}

                <div className="row py-5">
                    <div className="col-md-6 offset-md-3">
                    <AuthForm handleSubmit={handleSubmit}
                        email={email}
                        setEmail={setEmail}
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
        </div>
    )
}
export default Login;