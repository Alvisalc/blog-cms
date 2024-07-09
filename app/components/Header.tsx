import Link from "next/link";
import React from "react";

interface Props {
    title: string;
    tags?: boolean;
}

export const Header = ({title = "", tags = false}: Props) => {
    return (
        <header className="py-14 px-4 text-center border-b">
            <h2 className="text-3xl">{title}</h2>

            {/* check if the page is tag page */}
            {tags && (
                <div>
                    <Link href="/tag">#tags</Link>
                </div>
                )
            }
        </header>
    )
}