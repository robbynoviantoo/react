import localFont from "next/font/local";

export const degular = localFont({
    src: [
        {
            path: './fonts/Degular-Regular.otf',
            weight: '400',
            style: 'normal'
        },
        {
            path: './fonts/Degular-SemiBold.otf',
            weight: '600',
            style: 'normal'
        },
        {
            path: './fonts/Degular-Bold.otf',
            weight: '700',
            style: 'normal'
        },
    ],
    variable: '--font-degular'
})