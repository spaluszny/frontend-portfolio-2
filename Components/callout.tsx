import { ReactNode } from "react";

interface CalloutProps{
    children?: ReactNode;
    type?: "default";
}

export function Callout({
    children,
    type = 'default',
    ...props
}: CalloutProps){
    return <div className="bg-[rgba(214,211,206,0.2)] dark:bg-[#1e293b] rounded-lg p-5 font-sans font-light" {...props}>{children}</div>
}