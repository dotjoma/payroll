import { useEffect } from "react";
import { Head } from "@inertiajs/react";
import AdminAuthLayout from "@/Layouts/Admin/AdminAuthLayout";
import { Sidebar } from "@/Layouts/Admin/Sidebar";
import { Footer } from "@/Layouts/Admin/Footer";

export default function Directory({ auth }) {
    // Disable body scroll when component mounts
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <AdminAuthLayout user={auth.user}>
            <Head title="Admin Dashboard" />

            <div className="flex flex-col sm:flex-row h-screen overflow-hidden">
                {/* Sidebar */}
                <Sidebar />
                {/* Main Content */}
                <div className="flex-grow pb-10 sm:w-3/4 md:w-4/5 lg:w-5/6 bg-white dark:bg-gray-800 overflow-y-auto">
                    <div className="p-6 text-gray-900 dark:text-gray-100">
                        Employee Management
                        <div style={{ height: "1000px" }}></div>
                        <Footer />
                    </div>
                </div>
            </div>
        </AdminAuthLayout>
    );
}
