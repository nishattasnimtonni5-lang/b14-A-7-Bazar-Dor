'use client'

import { redirect } from "next/navigation"
import { authClient } from "../lib/auth-client"
import { toast, ToastContainer } from "react-toastify"

const SignupPage=()=> {
 
  const onSubmit =async(e:React.SubmitEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const formData=new FormData(e.target);
    console.log("Form data ",[...formData.entries()]);
    const user =Object.fromEntries(formData.entries()) as{name:string,email:string,image:string,password:string}
    
     const {data,error}= await authClient.signUp.email({
     ...user,
      callbackURL:"/"
    })
  
    
    if(data){
    redirect("/")
    }
    if (error) {
            
            if (error.code === 'USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL') {
                toast.error("This email already has an account.");
            } else {
                toast.error(error.message || "Failed to sign up.");
            }
        }
  }
  const handleGoogleSignIn = async () => {
      await authClient.signIn.social({
        provider: "google",
      });
    };
   const handleGithubSignIn = async () => {
   await authClient.signIn.social({
        provider: "github",
      });
    }
  return (
    <div className="min-h-screen bg-base-200 px-4 py-12">
      <ToastContainer/>
      <div className="mx-auto max-w-md">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-base-content">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="mt-2 text-base-content/60">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>

        <div className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body gap-4">

            <form
            onSubmit={onSubmit}
            className="space-y-4">

              <fieldset className="fieldset">
                <label className="label">
                  <span className="label-text">নাম</span>
                </label>

                <input
                  type="text"
                  placeholder="যেমন: রহিম উদ্দিন"
             name="name"
                  className="input input-bordered w-full"
                  required
                />
              </fieldset>

              <fieldset className="fieldset">
                <label className="label">
                  <span className="label-text">ইমেইল</span>
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                       autoComplete="off"
                  className="input input-bordered w-full"
                  required
                />
              </fieldset>

              <fieldset className="fieldset">
                <label className="label">
                  <span className="label-text">পাসওয়ার্ড</span>
                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="কমপক্ষে ৮ অক্ষর"
                       autoComplete="new-password"
                  className="input input-bordered w-full"
                  minLength={8}
                  required
                />
              </fieldset>

              <fieldset className="fieldset">
                <label className="label">
                  <span className="label-text">
                    পাসওয়ার্ড নিশ্চিত করুন
                  </span>
                </label>

                <input
                  type="password"
                  placeholder="আবার লিখুন"
                  className="input input-bordered w-full"
                  minLength={8}
                  required
                />
              </fieldset>

              <button

                type="submit"
                className="btn w-full border-0 bg-emerald-500 text-white hover:bg-emerald-600"
              >
                অ্যাকাউন্ট তৈরি করুন
              </button>
 
            </form>
<button onClick={handleGoogleSignIn} className="btn ">Sign In With Google</button>
      <button onClick={handleGithubSignIn} className="btn ">Sign In With Github</button>
    
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignupPage