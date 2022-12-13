import { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal, Button } from "antd";
import Link from "next/link";
import ForgotPasswordForm from "../components/forms/ForgotPasswordForm";
import { useRouter } from "next/router";
import { UserContext } from "../context/UserContext";

const ForgotPassword = () => {
    const[name, setName]=useState("");
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[secret, setSecret]=useState("");
    const [ok,setOk] = useState(false);
    const [loading, setLoading]=useState(false);

     const [state] = useContext(UserContext);
     const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
     try{
   // console.log(name,email,password,secret);
   setLoading(true);
   const {data} = await   axios.post(`/register`,{
            name,email,password,secret,
        });
        setName('')
        setEmail('')
        setPassword('')
        setSecret('')
        setOk(data.ok);
        setLoading(false);
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
                  <h1>Register</h1>  
                </div>
                </div>

               

                <div className="row py-5">
                    <div className="col-md-6 offset-md-3">
                    <ForgotPasswordForm handleSubmit={handleSubmit}
                        name={name}
                        setName={setName}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        secret={secret}
                        setSecret={setSecret}
                        loading={loading}/>
                        
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Modal title="Congratulations" visible={ok} onCancel={()=>setOk(false)} footer={null}
                    >
   <p>Congrats. Now you can login with your new password.</p>        
   <Link href="/login" className="btn btn-primary btn-sm">
            Login
            </Link>
            
                    </Modal>
                </div>
            </div>
            
        </div>
    )
}
export default ForgotPassword;