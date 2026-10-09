
const SignupPage=()=> {
  return (
    <div className="min-h-screen bg-base-200 px-4 py-12">
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

            <form className="space-y-4">

              <fieldset className="fieldset">
                <label className="label">
                  <span className="label-text">নাম</span>
                </label>

                <input
                  type="text"
                  placeholder="যেমন: রহিম উদ্দিন"
             
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

          </div>
        </div>
      </div>
    </div>
  );
}
export default SignupPage