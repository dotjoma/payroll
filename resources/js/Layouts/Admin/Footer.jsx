import React from "react";

export const Footer = () => {
    return (
        <>
            <footer className="p-2 sm:p-3 md:p-4 mb-6 text-center text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
                <span className="block sm:inline">
                    © {new Date().getFullYear()} All Rights Reserved
                </span>
                <span className="hidden sm:inline"> | </span>
                <span className="block sm:inline">Developed by Joma</span>
                <div style={{ minHeight: "50px" }}></div>
            </footer>
        </>
    );
};
