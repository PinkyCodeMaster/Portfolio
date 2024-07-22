// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export const content = ['./**/*.html'];
export const theme = {
    extend: {
        colors: {
            primary: '#251C31',
            secondary: '#693B93',
            accent: '#D9D9D9',
            highlight: '#2C1250',
            'light-radial': '#763CAC',
            'dark-radial': '#320F85',
            'darkest-radial': '#000000',
            'lightest-radial': '#CCD6F6',
            'purple-radial': '#4F228D',
        },
        gradientColorStops: {
            'linear-start': '#FFFFFF',
            'linear-end': '#693B93',
            'radial-start': '#763CAC',
            'radial-end': '#320F85',
        },
    },
};
export const plugins = [];
