"use client";

import Link from "next/link";
import React, { useState } from "react";
import { authClient } from "../lib/auth-client";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleUpdateProfile = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newUserData = Object.fromEntries(
      formData.entries()
    ) as {
      name: string;
      image: string;
    };

    await authClient.updateUser({
      ...newUserData,
    });

    setShowForm(false);
  };

  const handleSignOut = async () => {
    await authClient.signOut();
    setShow(false);
  };

  return (
    <div className="relative flex justify-center mt-5">
      <div className="relative">

        <button
          onClick={() => {
            setShow(!show);
            setShowForm(false);
          }}
          className="flex items-center gap-2 rounded-full px-3 py-2 hover:bg-base-200 transition"
        >
          <div className="avatar">
            <div className="w-10 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
              <img
                alt="Profile"
                src={user?.image || "/default-avatar.png"}
              />
            </div>
          </div>

          <span className="font-medium">
            {user?.name || "User"}
          </span>

          <span className="text-xs">▼</span>
        </button>

        {show && (
          <div className="absolute right-0 top-14 z-50 w-80 max-w-[90vw] rounded-2xl border border-base-300 bg-base-100 shadow-2xl">

            <div className="flex items-center gap-3 border-b border-base-300 p-5">
              <div className="avatar">
                <div className="w-14 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
                  <img
                    alt="Profile"
                    src={user?.image || "/default-avatar.png"}
                  />
                </div>
              </div>

              <div className="min-w-0">
                <h2 className="font-semibold text-lg truncate">
                  {user?.name || "User"}
                </h2>

                <p className="text-sm opacity-60 break-all">
                  {user?.email}
                </p>
              </div>
            </div>

            <div className="p-3">

              <Link
                href="/profile"
                onClick={() => setShow(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-base-200 transition"
              >
                <span className="text-xl">👤</span>
                <span>আমার প্রোফাইল</span>
              </Link>

              <button
                onClick={() => setShowForm(!showForm)}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 hover:bg-base-200 transition"
              >
                <span className="text-xl">✏️</span>
                <span>Edit Profile</span>
              </button>

              {showForm && (
                <form
                  onSubmit={handleUpdateProfile}
                  className="mt-3 rounded-xl border border-base-300 p-3"
                >
                  <label className="label">
                    নাম
                  </label>

                  <input
                    name="name"
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Name"
                    defaultValue={user?.name || ""}
                    required
                  />

                  <label className="label mt-2">
                    Image URL
                  </label>

                  <input
                    name="image"
                    type="url"
                    className="input input-bordered w-full"
                    placeholder="Image URL"
                    defaultValue={user?.image || ""}
                  />

                  <button
                    type="submit"
                    className="btn btn-primary mt-4 w-full"
                  >
                    Update Profile
                  </button>
                </form>
              )}

              <div className="my-2 border-t border-base-300" />

              <button
                onClick={handleSignOut}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-error hover:bg-error/10 transition"
              >
                <span className="text-xl">↩</span>
                <span>সাইন আউট</span>
              </button>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProfilePage;