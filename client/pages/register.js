import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {Modal} from "antd";
import Link from "next/Link";
import AuthForm from "../components/forms/AuthForm";
const Register = () => {
    const[name, setName]=useState("");
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[secret, setSecret]=useState("");
    const [ok,setOk] = useState(false);
    const [loading, setLoading]=useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
     try{
   // console.log(name,email,password,secret);
   setLoading(true);
   const {data} = await   axios.post(`${process.env.NEXT_PUBLIC_API}/register`,{
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

    return (
        <div className="container-fluid">
            <div className="row py-5 bg-default-image ">
                <div className="col text-center">
                  <h1>Register</h1>  
                </div>
                </div>

                {loading ? <h1>Loading</h1> : ""}

                <div className="row py-5">
                    <div className="col-md-6 offset-md-3">
                    <AuthForm handleSubmit={handleSubmit}
                        name={name}
                        setName={setName}
                        email={email}
                        setEmail={setEmail}
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
   <p>You have successfully registered.</p>        
            
                    </Modal>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="text-center">Already registered? {""
                    } <Link href="/login" className="btn btn-smprimary btn-">Login</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Register;