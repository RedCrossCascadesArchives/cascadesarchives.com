const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'red-cross-gray': {
                    DEFAULT: '#6E6F71',
                    '50': '#E2E2E3',
                    '100': '#D5D5D6',
                    '200': '#BBBCBD',
                    '300': '#A1A2A4',
                    '400': '#87888B',
                    '500': '#6E6F71',
                    '600': '#555657',
                    '700': '#3C3C3D',
                    '800': '#232323',
                    '900': '#09090A'
                },
                'red-cross-red': {
                    DEFAULT: '#EA2923',
                    '50': '#FEF5F5',
                    '100': '#FCDEDD',
                    '200': '#F7B1AF',
                    '300': '#F38480',
                    '400': '#EE5652',
                    '500': '#EA2923',
                    '600': '#C71813',
                    '700': '#98130F',
                    '800': '#6A0D0A',
                    '900': '#3B0706'
                },
                'red-cross-sand': {
                    50: '#FBFBFA',
                    100: '#F8F7F5',
                    200: '#EDEAE5',
                    300: '#E1DDD6',
                    400: '#CBC4B7',
                    500: '#B5AA98',
                    600: '#A39989',
                    700: '#6D665B',
                    800: '#514D44',
                    900: '#36332E',
                },
                'red-cross-khaki': {
                    50: '#FEFDFB',
                    100: '#FCFBF7',
                    200: '#F8F5EA',
                    300: '#F3EFDE',
                    400: '#EAE3C5',
                    500: '#E1D7AC',
                    600: '#CBC29B',
                    700: '#878167',
                    800: '#65614D',
                    900: '#444134',
                },
            }
        },
    },

    variants: {
        extend: {
            //opacity: ['disabled'],
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
