"use client";

import { authClient } from "@/app/lib/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

const UserInfoContent = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;
    const pathname = usePathname();

    console.log(user);

    const handleSignout = async () => {
        await authClient.signOut();
    };

    return (
        <div className="absolute right-4 top-4 flex items-center gap-3 text-sm">

            {user ? (

                <div className="flex flex-col items-center gap-2">

                    <Link href={"/profile"}>
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                                <img
                                    alt="Tailwind-CSS-Avatar-component"
                                    src={user?.image || "/default-avatar.png"}
                                />
                            </div>
                        </div>
                    </Link>

                    <h2>{user?.name}</h2>

                    <button
                        onClick={handleSignout}
                        className="btn btn-error btn-xs"
                    >
                        Signout
                    </button>

                </div>

            ) : (

                <div className="flex gap-4">

                    <Link href={"/signin"}>
                        <button
                            className={`btn transition-colors ${
                                pathname === "/signin"
                                    ? "bg-green-700 text-white"
                                    : "btn-ghost text-neutral-700 hover:text-green-700"
                            }`}
                        >
                            সাইন ইন
                        </button>
                    </Link>

                    <Link href={"/signup"}>
                        <button
                            className={`btn px-3 py-1.5 font-semibold transition-colors ${
                                pathname === "/signup"
                                    ? "bg-green-700 text-white"
                                    : "bg-gray-200 text-neutral-700 hover:bg-gray-300"
                            }`}
                        >
                            সাইন আপ
                        </button>
                    </Link>

                </div>

            )}

        </div>
    );
};

const UserInfo = () => {
    return (
        <Suspense fallback={<div />}>
            <UserInfoContent />
        </Suspense>
    );
};

export default UserInfo;