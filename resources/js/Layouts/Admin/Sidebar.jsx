import { Link, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

export const Sidebar = () => {
    const { url, props } = usePage();
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const [isEmployeeSubMenuOpen, setIsEmployeeSubMenuOpen] =
        React.useState(false);
    const [isAdministrationSubMenuOpen, setIsAdministrationSubMenuOpen] =
        React.useState(false);

    useEffect(() => {
        // Check URL for submenu state
        const urlParams = new URLSearchParams(window.location.search);
        setIsEmployeeSubMenuOpen(urlParams.get("employee") === "open");
    }, [url]); // Re-run when URL changes

    useEffect(() => {
        // Check URL for submenu state
        const urlParams = new URLSearchParams(window.location.search);
        setIsAdministrationSubMenuOpen(
            urlParams.get("administration") === "open"
        );
    }, [url]); // Re-run when URL changes

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        setIsEmployeeSubMenuOpen(false);
        setIsAdministrationSubMenuOpen(false);
    };

    const toggleAdministrationSubMenu = () => {
        setIsAdministrationSubMenuOpen(!isAdministrationSubMenuOpen);
        setIsEmployeeSubMenuOpen(false);
    };

    const toggleEmployeeSubMenu = () => {
        setIsEmployeeSubMenuOpen(!isEmployeeSubMenuOpen);
        setIsAdministrationSubMenuOpen(false);
    };

    const isActive = (path) => {
        return url.startsWith(path) || url === path;
    };

    const getAdministrationSubmenuUrl = (baseUrl) => {
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set("administration", "open");
        return `${baseUrl}?${urlParams.toString()}`;
    };

    const getSubmenuUrl = (baseUrl) => {
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set("employee", "open");
        return `${baseUrl}?${urlParams.toString()}`;
    };

    return (
        <>
            {/* Burger Icon */}
            <div className="sm:hidden p-4 fixed top-0 left-0 z-20">
                <button
                    onClick={toggleSidebar}
                    className="text-gray-800 dark:text-gray-200"
                >
                    {isSidebarOpen ? (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    )}
                </button>
            </div>
            <div
                className={`${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } transform transition-transform duration-300 ease-in-out fixed sm:static top-0 left-0 h-full z-10 w-64 sm:w-1/4 md:w-1/5 lg:w-1/6 bg-gray-200 dark:bg-gray-700 p-4 sm:translate-x-0 overflow-y-auto`}
                style={{ height: "100vh" }}
            >
                <ul className="mt-10 sm:mt-0">
                    <li className="mb-2">
                        <Link
                            href={route("admin.dashboard")}
                            className={`block py-2 px-4 rounded ${
                                isActive("/admin/dashboard")
                                    ? "text-hero-header-light hover:bg-gray-300  font-bold dark:bg-gray-600"
                                    : "hover:bg-gray-300 dark:hover:bg-gray-600"
                            }`}
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li className="mb-2">
                        <button
                            onClick={toggleAdministrationSubMenu}
                            className="flex items-center justify-between text-sm sm:text-base w-full py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 rounded"
                        >
                            Administration
                            <svg
                                className={`w-4 h-4 transition-transform duration-200 ${
                                    isAdministrationSubMenuOpen
                                        ? "rotate-180"
                                        : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                isAdministrationSubMenuOpen
                                    ? "max-h-40"
                                    : "max-h-0"
                            }`}
                        >
                            <ul className="ml-4 mt-2">
                                <p className="text-sm border-b border-gray-400 mb-1">
                                    Accounts
                                </p>
                                <li>
                                    <Link
                                        href={getAdministrationSubmenuUrl(
                                            route(
                                                "admin.administration.account.employee"
                                            )
                                        )}
                                        className={`block py-2 px-4 rounded ${
                                            isActive(
                                                "/admin/administration/account/employee"
                                            )
                                                ? "text-hero-header-light hover:bg-gray-300  font-bold dark:bg-gray-600"
                                                : "hover:bg-gray-300 dark:hover:bg-gray-600"
                                        }`}
                                    >
                                        Employee
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={getAdministrationSubmenuUrl(
                                            route(
                                                "admin.administration.account.admin"
                                            )
                                        )}
                                        className={`block py-2 px-4 rounded ${
                                            isActive(
                                                "/admin/administration/account/admin"
                                            )
                                                ? "text-hero-header-light hover:bg-gray-300  font-bold dark:bg-gray-600"
                                                : "hover:bg-gray-300 dark:hover:bg-gray-600"
                                        }`}
                                    >
                                        Admin
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-2">
                        <button
                            onClick={toggleEmployeeSubMenu}
                            className="flex items-center justify-between text-sm sm:text-base w-full py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 rounded"
                        >
                            Employees
                            <svg
                                className={`w-4 h-4 transition-transform duration-200 ${
                                    isEmployeeSubMenuOpen ? "rotate-180" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                isEmployeeSubMenuOpen ? "max-h-40" : "max-h-0"
                            }`}
                        >
                            <ul className="ml-4 mt-2">
                                <li>
                                    <Link
                                        href={getSubmenuUrl(
                                            route("admin.employee.directory")
                                        )}
                                        className={`block py-2 px-4 rounded ${
                                            isActive(
                                                "/admin/employee/directory"
                                            )
                                                ? "text-hero-header-light hover:bg-gray-300  font-bold dark:bg-gray-600"
                                                : "hover:bg-gray-300 dark:hover:bg-gray-600"
                                        }`}
                                    >
                                        Directory
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 rounded"
                                    >
                                        Sublink 2
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 rounded"
                                    >
                                        Sublink 3
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-2">
                        <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 rounded"
                        >
                            Payroll
                        </a>
                    </li>
                    <li className="mb-2">
                        <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 rounded"
                        >
                            Time & Attendance
                        </a>
                    </li>
                    <li className="mb-2">
                        <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 rounded"
                        >
                            Performance
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
