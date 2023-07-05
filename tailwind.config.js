/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                fancy: "#121028",
                elFancy: "#181538",
                textFancy: "#9a93cb",
                badgeFancy: "#39325d",
                lightBlue: "#6b5dd3",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
