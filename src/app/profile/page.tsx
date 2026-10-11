"use client";

import Link from "next/link";
import React, { useState } from "react";
import { authClient } from "../lib/auth-client";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [show, setShow] = useState(false);

  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
    };

    await authClient.updateUser({
      ...newUserData,
    });
  };

  const handleShowForm = () => {
    setShow(!show);
  };

  return (
    <div className="mt-5">
      <div className="flex flex-col items-center gap-2 relative">
        <button
          onClick={handleShowForm}
          className="flex items-center gap-2"
        >
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
              <img
                alt="Tailwind-CSS-Avatar-component"
                src={user?.image || "/default-avatar.png"}
              />
            </div>
          </div>

          <span>{user?.name}</span>
          <span className="text-xs">▼</span>
        </button>

        {show && (
          <div className="absolute top-12 right-0 z-50 w-80 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-xl">
            <div className="flex flex-col gap-2 border-b border-base-300 pb-4">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img
                    alt="Profile"
                    src={user?.image || "/default-avatar.png"}
                  />
                </div>
              </div>

              <h2 className="text-lg font-semibold">
                {user?.name}
              </h2>

              <p className="text-sm opacity-60 break-all">
                {user?.email}
              </p>
            </div>

            <button
              onClick={handleShowForm}
              className="mt-3 w-full rounded-lg px-3 py-2 text-left hover:bg-base-200"
            >
              👤 Edit Profile
            </button>
          </div>
        )}

        {show && (
          <form
            onSubmit={handleUpdateProfile}
            className="mt-3"
          >
            <fieldset className="fieldset rounded-box w-80">
              <label className="label">নাম</label>
              <input
                name="name"
                type="text"
                className="input w-full"
                placeholder="Name"
                defaultValue={user?.name || ""}
              />

              <label className="label">ImageURL</label>
              <input
                name="image"
                type="url"
                className="input w-full"
                placeholder="Image"
                defaultValue={user?.image || ""}
              />

              <button
                type="submit"
                className="btn text-white bg-red-700 mt-4"
              >
                Update Profile
              </button>
            </fieldset>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;