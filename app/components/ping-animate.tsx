export function PingAnimate({ className, color = 'green', size = '2' }: { className?: string, color?: string, size?: string }) {
    return (
        <span className={`relative flex size-${size} ${className}`}>
            <span className={`absolute inline-flex h-full w-full animate-ping rounded-full bg-${color}-400 opacity-75`}></span>
            <span className={`relative inline-flex size-2 rounded-full bg-${color}-500`}></span>
        </span>
    )
}