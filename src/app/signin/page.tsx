'use client'

import { toast } from "react-toastify";
import { authClient } from "../lib/auth-client";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const SigninPage=()=> {
  const router=useRouter();
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });

    if (error) {
      toast.error("Sign in failed!");
      console.log(error);
      return;
    }

    if (data) {
      toast.success("Sign in successful!");
      router.push("/");
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleGithubSignIn = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="min-h-screen bg-base-200 px-4 py-12">
      <div className="mx-auto max-w-lg">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-base-content">
            সাইন ইন
          </h1>

          <p className="mt-2 text-base-content/60">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>

        <div className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body gap-4">

            <form onSubmit={onSubmit} className="space-y-4">
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
                  required
                />
              </fieldset>

              <button
                type="submit"
                className="btn w-full border-0 bg-emerald-600 text-white hover:bg-emerald-700"
              >
                সাইন ইন
              </button>
            </form>

            <div className="flex items-center my-4">
              <hr className="w-1/2 border-t border-gray-400" />
              <p className="px-3 text-gray-500 text-sm">অথবা</p>
              <hr className="w-1/2 border-t border-gray-400" />
            </div>

            <div className="flex gap-3 items-center justify-center">
              <button onClick={handleGoogleSignIn} className="btn bg-gray-300">
                <span><FcGoogle size={24} /></span>
                Sign In With Google
              </button>

              <button onClick={handleGithubSignIn} className="btn bg-gray-300">
                <span><FaGithub size={24} /></span>
                Sign In With Github
              </button>
            </div>

            <p className="flex items-center justify-center">
              অ্যাকাউন্ট আছে?
              <Link href={`/signin`} className="text-green-700">
                সাইন ইন করুন
              </Link>
            </p>
 <p className="text-center py-3">
          <Link href={`/`}>← হোম পেজে ফিরে যান</Link>
        </p>
          </div>
        </div>

       

      </div>
    </div>
  );
}

export default SigninPage;