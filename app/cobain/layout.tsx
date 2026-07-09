export default function DashboardLayout({children}: {children: React.ReactNode}){
    return (
        <html>
            <body>
                <h1>Layout Atas</h1>
                <main>{children}</main>
                <h1>Layout Bawah</h1>
            </body>
        </html>   
    )
}