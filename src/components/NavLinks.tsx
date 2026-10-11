import { Suspense } from "react";
import NavLinkItem from "./shared/NavLinkItems";


interface Nav {
    id: string,
    nameBn: string,
    icon: string,
    slug: string
}

const NavLinksPage = async () => {

    const res = await fetch(
        `https://api.abcz.workers.dev/api/bazardor/categories`,
        { cache: "force-cache" }
    );

    const data: Nav[] = await res.json();

    return (
        <div className="flex flex-wrap gap-3 py-10 md:py-4">

            {
                data.map((n: Nav) =>

                    <Suspense key={n.id} fallback={<div>{n.icon} {n.nameBn}</div>}>

                        <NavLinkItem
                            href={`/bazardor/category/${n.slug}`}
                            icon={n.icon}
                            nameBn={n.nameBn}
                        />

                    </Suspense>

                )
            }

        </div>
    );
};

export default NavLinksPage;