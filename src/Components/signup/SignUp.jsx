import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { context } from "../../contextProvider/ContextProvider";


const SignUp = () => {
    const [showPassword,setShowPassword]=useState(false);
    const [userCreateError,setUserCreateError]=useState(null);
    const [userCreateSuccess,setUserCreateSuccess]=useState(null);
    const [termsAccept,setTermsAccept]=useState(null);

    const {createUser}=useContext(context);

    const getUserEmailPassw=(e)=>{
      e.preventDefault();
      
      setTermsAccept(null);
      setUserCreateError(null);

      const email=e.target.email.value;
      const password=e.target.password.value;
      const checkTC=e.target.checkTC.checked;


      if(!checkTC){
        setTermsAccept("Please,accept our terms and Condition.");
        return;
      }

      if(password.length<=6){
        setUserCreateError("Give password 6 digit or longer");
        return
      }else if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)){
        setUserCreateError("Use special character ($,&,*,A-Z)");
        return
      }else if(!checkTC){
        setTermsAccept("please accept our terms and condition")
          return
      }


      //user create in firebase.........
      createUser(email,password)
      .then(res=>{
          setUserCreateSuccess(res.user);
      })
      .catch(error=>{
        setUserCreateError(error.message);
      })


    }



    return (
        <div className="w-full h-screen  flex justify-center items-center"
        style={{ backgroundImage: `url('https://i.ibb.co/GkkKspX/pexels-photo-753626.jpg')`,backgroundRepeat:"no-repeat", backgroundPosition:"center",backgroundSize:"cover" }}
        >

        { /* account succesfully tost....... */ }

       {userCreateSuccess && <div className="w-full h-screen absolute bg-gray-600/70 z-10 flex justify-center items-center">
            <div className="w-[400px] h-[200px] p-5 bg-white rounded-lg flex flex-col justify-center items-center relative">

            <div> <p className="text-[20px] text-green-700 font-semibold">Account Creation Successfully.</p><p className="text-[20px] text-red-700 font-semibold">Please verified your email from<br></br> your email.</p></div>
                  <Link to="/signin" className="absolute bg-green-700 px-4 py-1 text-white font-semibold grow-0 self-end  mt-[140px] rounded">Login</Link>
            </div>

          </div>
        } 


            <div className="w-fit bg-green-400 p-8 py-12  rounded-xl">
                <form onSubmit={getUserEmailPassw} >
                    <h2 className="text-3xl font-bold text-center text-white mb-7">Sign Up</h2>
                    <input className="mb-5 w-[360px] bg-white text-black  py-[3px] px-4 rounded" type="text" name="name" key="1" placeholder="User Name" required />
                    <br />
                    <input className="mb-5 bg-white text-black w-[360px] py-[3px] px-4 rounded" type="email" name="email" key="2" placeholder="User Email" required/>
                    <br />
                    <div className="flex relative">
                        <input key="2" className="mb-5 w-[360px] py-[3px] px-4 bg-white text-black rounded" type={showPassword ? "text":"password" } name="password" id="" placeholder="Password" required />
                       <div onClick={()=>setShowPassword(!showPassword)} className="text-gray-500 absolute text-[1.5rem] top-[3px] left-[90%]">
                        { showPassword ? <AiFillEyeInvisible/> : <AiFillEye/>}
                       </div>

                    </div>
                    <div>
                      {userCreateError && <p className="text-red-700 font-semibold mb-4">{userCreateError}</p>}
                    </div>

                    <div className="mb-2 h-[16px]  flex  items-center">
                      <input className=" w-[16px] mt-[2px] h-[16px] mr-2 rounded" type="checkbox" name="checkTC" key="3"  /><br /><p className="text-white">accept our term and condition </p>
                    </div>

                    
                      {
                      termsAccept && <div className="mb-2 text-red-700 font-semibold py-[3px] px-4" ><p>{termsAccept}</p> </div>
                      }
                   
                    
                    <input className="mb-5 mt-2 w-[360px] py-[5px] px-4 rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-semibold text-white" type="submit" value="Sign Up" required/>
               </form>
               <div className="text-center mb-2">
                    <p className="text-black">Already have on account? <Link to="/signin" className="text-white border-b-2 border-white">Login</Link></p>
               </div>
              

            </div>
        </div>
    );
};

export default SignUp;