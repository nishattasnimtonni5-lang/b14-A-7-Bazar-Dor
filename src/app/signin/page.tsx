const signinPage=()=> {
  return (
    <div className="min-h-screen bg-base-200 px-4 py-12">
      <div className="mx-auto max-w-lg">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-base-content">
            সাইন ইন
          </h1>

          <p className="mt-2 text-base-content/60">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>

        {/* Login Card */}
        <div className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body gap-4">

            <form className="space-y-4">

              {/* Email */}
              <fieldset className="fieldset">
                <label className="label">
                  <span className="label-text">ইমেইল</span>
                </label>

                <input
                  type="email"
                  name="login-email"
                  placeholder="you@example.com"
                  autoComplete="off"
                  className="input input-bordered w-full"
                  required
                />
              </fieldset>

              {/* Password */}
              <fieldset className="fieldset">
                <label className="label">
                  <span className="label-text">পাসওয়ার্ড</span>
                </label>

                <input
                  type="password"
                  name="login-password"
                  placeholder="কমপক্ষে ৮ অক্ষর"
                  autoComplete="new-password"
                  className="input input-bordered w-full"
                  required
                />
              </fieldset>

              {/* Login Button */}
              <button
                type="submit"
                className="btn w-full border-0 bg-emerald-600 text-white hover:bg-emerald-700"
              >
                সাইন ইন
              </button>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
export default signinPage