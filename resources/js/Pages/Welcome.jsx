import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, Head } from "@inertiajs/react";
import { useEffect, useState, useRef } from "react";

export default function Welcome({ auth }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isProjectsVisible, setIsProjectsVisible] = useState(false);
    const projectsRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsProjectsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (projectsRef.current) {
            observer.observe(projectsRef.current);
        }

        return () => {
            clearTimeout(timer);
            if (projectsRef.current) {
                observer.unobserve(projectsRef.current);
            }
        };
    }, []);

    return (
        <div className="overflow-hidden bg-gray-50">
            <Head title="Home" />
            <nav className="bg-nav-bg-light flex items-center justify-between px-5 py-4 border-b border-gray-300">
                <Link
                    href="/"
                    className="text-xl font-bold text-nav-links-light transition"
                >
                    K Tech
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center space-x-4">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="rounded-md px-3 py-2 text-nav-links-light ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="rounded-md px-2 hover:bg-nav-links-bg-hover-light hover:text-white/70 text-nav-links-light ring-1 ring-transparent transition focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Log in
                            </Link>
                        </>
                    )}
                </div>
            </nav>
            <section
                className="py-8 md:py-12 lg:py-16 h-screen flex items-center justify-center bg-gray-100"
                style={{ height: "100vh" }}
            >
                <div className="py-12 bg-gray-50">
                    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 sm:px-6 lg:px-8">
                        {/* Hero Content */}
                        <div className="md:w-1/2 text-center md:text-left">
                            <h1
                                className={`text-4xl font-bold text-hero-header-light mb-4 transition-opacity duration-1000 ${
                                    isLoaded ? "opacity-100" : "opacity-0"
                                }`}
                            >
                                Karla TechNova Solutions
                            </h1>
                            <p
                                className={`text-lg text-hero-text-light mb-6 transition-all duration-1000 ease-out ${
                                    isLoaded
                                        ? "opacity-100 translate-x-0"
                                        : "opacity-0 -translate-x-full"
                                }`}
                            >
                                Empowering businesses with seamless payroll
                                solutions. We streamline processes, enhance
                                accuracy, and drive efficiency, allowing you to
                                focus on what matters most - your people and
                                your growth.
                            </p>
                            <Link
                                href="/"
                                className={`bg-hero-btn-bg-light text-hero-btn-text-light py-2 px-6 transition-all duration-1000 ease-out delay-300 ${
                                    isLoaded
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-full"
                                }`}
                            >
                                Get Started
                            </Link>
                        </div>

                        {/* Hero Image */}
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <img
                                src="/assets/images/background.webp"
                                alt="Payroll System"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section
                ref={projectsRef}
                className="bg-gray-50 py-16 min-h-screen flex flex-col justify-center"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2
                        className={`text-hero-header-light text-4xl font-bold text-center mb-6 transition-opacity duration-1000 ${
                            isProjectsVisible ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        Our Projects
                    </h2>
                    <p
                        className={`text-xl text-hero-text-light text-center mb-12 max-w-3xl mx-auto transition-opacity duration-1000 delay-300 ${
                            isProjectsVisible ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        At{" "}
                        <span className="font-bold">
                            Karla TechNova Solutions
                        </span>
                        , we're dedicated to revolutionizing payroll management.
                        Our innovative projects are designed to streamline
                        processes, ensure compliance, and empower both
                        businesses and employees.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Payroll Automation",
                                description:
                                    "Streamlining payroll processes for increased efficiency and accuracy, reducing manual errors and saving time.",
                            },
                            {
                                title: "Tax Compliance",
                                description:
                                    "Ensuring accurate tax calculations and reporting, staying up-to-date with the latest regulations across multiple jurisdictions.",
                            },
                            {
                                title: "Employee Self-Service",
                                description:
                                    "Empowering employees with easy access to their payroll information, leave management, and performance data.",
                            },
                            {
                                title: "Time and Attendance Tracking",
                                description:
                                    "Integrating advanced time tracking solutions with payroll for seamless workforce management.",
                            },
                            {
                                title: "Analytics Dashboard",
                                description:
                                    "Providing insightful analytics and reporting tools for better decision-making and resource allocation.",
                            },
                            {
                                title: "Multi-Currency Support",
                                description:
                                    "Facilitating global payroll management with support for multiple currencies and international regulations.",
                            },
                        ].map((project, index) => (
                            <div
                                key={index}
                                className={`bg-gray-50 p-6 rounded-lg shadow-md transition-all duration-1000 ease-out ${
                                    isProjectsVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-full"
                                }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                <h3 className="text-hero-header-light text-xl font-semibold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-hero-text-light">
                                    {project.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <footer className="bg-foot-bg-light p-5 text-center border-t border-gray-300">
                <p className="text-foot-text-light text-sm sm:text-base md:text-lg lg:text-xl">
                    &copy; 2024 Karla TechNova Solutions. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
