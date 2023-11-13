import { Link, useNavigate} from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {FcGoogle} from "react-icons/fc";
import { useContext, useState } from "react";
import { context } from "../../contextProvider/ContextProvider";

const Signin = () => {
    const [showPassword,setShowPassword]=useState(false);
    const [signinError,setSignError]=useState(null);
    const [googleErrorMsg,setGoogleErrorMsg]=useState(null);
    const [signinSuccess,setSigninSuccess]=useState(null);


    const {signinUser,signWithGoogle}=useContext(context);
    const navigate=useNavigate();

    const successfullySignin=()=>{
        return navigate("/");
    }

    //signin user............
    const SigninUser=(e)=>{
      e.preventDefault();

      setSigninSuccess(null);
      setSignError(null);

      const email=e.target.email.value;
      const password=e.target.password.value;

      //signinUser from firebase use email password.....
      signinUser(email,password)
        .then(()=>{
             successfullySignin();
        })
        .catch(error=>{
          setSignError(error.message);
        })
    }

     //signinUser from firebase use email password.....
     const signinGoogle=()=>{
       signWithGoogle()
         .then(()=>{
          successfullySignin();
         })
         .catch((error)=>{
            setGoogleErrorMsg(error.message);
         })
     }

    return (
        <div className="w-full h-screen  flex justify-center items-center"
        style={{ backgroundImage: `url('https://i.ibb.co/GkkKspX/pexels-photo-753626.jpg')`,backgroundRepeat:"no-repeat", backgroundPosition:"center",backgroundSize:"cover" }}
        >

      {false && <div className="w-full h-screen absolute bg-gray-600/70 z-10 flex justify-center items-center">
            <div className="w-[400px] h-[200px] p-5 bg-white rounded-lg flex flex-col justify-center items-center relative">

            <div> <p className="text-[20px] text-green-700 font-semibold">Forgot password successfully.</p><p className="text-[20px] text-red-700 font-semibold">Please reset your password from<br></br> your email.</p></div>
                  <Link  className="absolute bg-green-700 px-4 py-1 text-white font-semibold grow-0 self-end  mt-[140px] rounded">close</Link>
            </div>

          </div>
        }


          
            <div className="w-fit bg-green-400 p-8 py-11  rounded-xl">
                <form onSubmit={SigninUser} >
                    <h2 className="text-3xl font-bold text-center text-white mb-7">Login</h2>
                    <input  className="mb-5 w-[360px]  py-[3px] px-4 bg-white text-black rounded" type="email" name="email" key="1" id="" placeholder="User Email" required />
                    <br />
                    <div className="flex relative">
                        <input key="2" className="mb-5 w-[360px] py-[3px] px-4 bg-white text-black rounded" type={showPassword ? "text":"password" } name="password" id="" placeholder="Password" required />
                       <div onClick={()=>setShowPassword(!showPassword)} className="absolute text-gray-500 text-[1.5rem] top-[3px] left-[90%]">
                        { showPassword ? <AiFillEyeInvisible/> : <AiFillEye/>}
                       </div>

                    </div>
                    {
                      signinError &&  <div className="mb-4">
                        <p className="text-red-700 font-semibold mb-4">{signinError}</p>
                      </div>
                       
                     
                    }

                    <div  className="mb-4 text-center text-white">
                        <Link >Forgot Password</Link>
                    </div>
                    <input className="mb-5 w-[360px] py-[5px] px-4 rounded cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-semibold text-white" type="submit" value="Sign in" />
               </form>
               <div className="text-center  mb-2">
                    <p className="text-black">Don't have an account? <Link to="/signup" className="text-white border-b-2 border-white">Sign Up</Link></p>
               </div>
              
              <div className="flex items-center mb-5">
                <hr className="grow" /><p className="px-1 text-white">OR</p><hr className="grow" />
              </div>
              <div>
                <div onClick={signinGoogle}  className="mb-4 w-[360px] py-[4px] px-4 rounded bg-white text-white cursor-pointer flex"><FcGoogle className="text-[1.7rem]"></FcGoogle><div className="w-full text-center"><p className="text-gray-500">Login with Google</p></div></div>
              </div>
              {
                   googleErrorMsg && <div>
                         <p className="text-red-700 font-semibold mb-4">{googleErrorMsg}</p></div>
              }
              {
                   signinSuccess && <div>
                         <p className="text-green-700 font-semibold mb-4">Successfully login</p></div>
              }
                    



            </div>
        </div>  
    );
};

export default Signin;