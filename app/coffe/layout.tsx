export default function CoffeLayout({children}: {children: React.ReactNode}){
    return (
        <main className="w-full min-h-screen relative">{children}</main>
    )
}