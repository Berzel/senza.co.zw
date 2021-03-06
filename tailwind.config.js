const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './resources/views/**/*.blade.php',
        './resources/js/**/*.js',
    ],

    theme: {
        screens: {
            'sm': '576px',
            'md': '768px',
            'lg': '992px',
            'xl': '1100px',
        },
        container: {
            center: true,
            padding: '0.75rem',
        },
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                radio: ['Radio Canada', ...defaultTheme.fontFamily.serif]
            },
        },
    },

    plugins: [
        // require('@tailwindcss/forms')
    ],
};
