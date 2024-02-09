/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    ],
    darkMode: ["class", '[data-theme="dark"]'],
    theme: {
        extend: {
            height: {
                video: "471px",
                short: "526px",
                productImg: "331px",
            },
            colors: {
                primary: "#3d4057",
                secondary: "#eee",
                accent: "#9b52dc",
                neutral: "#ffffff",
                base100: "#4f4f4f",
                info: "#0866ff",
                success: "#98D77a",
                warning: "#f8cf60",
                error: "#d77b7b",
                cardBg: "#FBFBFB",
            },
            fontFamily: {
                "attila-sans": ["Attila Sans Classic Basic", "sans-serif"],
                "open-sans": ["Open Sans", "sans-serif"],
            },
        },
    },
    plugins: [
        require("daisyui"),
        function ({ addUtilities }) {
            const newUtilities = {
                ".translate3d": {
                    transform: "translate3d(0, 0, 0)",
                },
                ".outline-none": {
                    outline: "0px transparent",
                },
                ".outline-offset-none": {
                    outlineOffset: "0px",
                },
            };
            addUtilities(newUtilities);
        },
    ],
    daisyui: {
        themes: ["light", "dark"],
    },
};
