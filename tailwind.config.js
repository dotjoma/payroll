import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "custom-white": "#F9F7F7",
                "custom-light-blue": "#DBE2EF",
                "custom-blue": "#3F72AF",
                "custom-dark-blue": "#112D4E",

                // Custom Colors 'Light Theme
                "nav-bg-light": "#f0f0f0",
                "nav-links-light": "#333333",
                "nav-links-bg-hover-light": "#a29bfe",

                "hero-header-light": "#6c5ce7",
                "hero-text-light": "#333333",
                "hero-bg-light": "#f0f0f0",
                "hero-btn-bg-light": "#a29bfe",
                "hero-btn-text-light": "#ffffff",

                "foot-bg-light": "#f0f0f0",
                "foot-text-light": "#333333",
            },
        },
    },

    plugins: [forms],
};
