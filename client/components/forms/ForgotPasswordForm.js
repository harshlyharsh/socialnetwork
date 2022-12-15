import {SyncOutlined} from "@ant-design/icons";

const ForgotnewPasswordForm= ({handleSubmit,email,setEmail,newPassword,setNewPassword,secret,setSecret,loading,page,}) => {
    return (
    
<form onSubmit={handleSubmit}>

                       {/* Email */}
                        <div className="form-group p-2">
<small><label className="text-muted">Email address</label></small>
<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter name" />
                        </div> 

                        <div className="form-group p-2">
<small><label className="text-muted">New Password</label></small>
<input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} type="password" className="form-control" placeholder="Enter new password" />
                        </div>

                        { page !== "login" && ( <>
                        <div className="form-group p-2">
                        <small><label className="text-muted">Answer your secret question</label></small> 
                        <select className="form-control">
                            <option>What is your favourite color?</option>
                            <option>What is your best friend's name?</option>
                            <option>What city you were born?</option>
                        </select>  
                      
                        </div>
                        <div className="form-group p-2">
                            <input 
                            value={secret} onChange={(e) => setSecret(e.target.value)}
                            type="text" className="form-control" placeholder="Write your answer here" />
                        </div>
                        </>)}
                       <div className="form-group p-2">
                       <button type="submit"
        className="btn btn-block btn-primary col-12" disabled={!email || !newPassword || !secret || loading} >
                       {loading ? <SyncOutlined spin className="py-1"/> : "Submit"}</button>
                       </div>
                        </form>
                      
)};

export default ForgotnewPasswordForm;