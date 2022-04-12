import { Button } from "@mui/material"
import Link from "next/link"
interface CustomLinkProps {
    href: URL | string,
    children: React.ReactNode,
    className?: string,
    button?: boolean
}
export const CustomLink = ({href, children, className, button}: CustomLinkProps) => {
    return (
        <Link href={href} passHref>
            {button 
                ? <Button className={className}>{children}</Button>
                : <a className={className}>{children}</a>
            }
        </Link>
    )
}