import { degular } from "../font";

export function DegularText({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`${degular.className} ${className}`}>
            {children}
        </div>
    )
}