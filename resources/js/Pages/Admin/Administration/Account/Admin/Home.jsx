import { useEffect } from "react";
import { Head } from "@inertiajs/react";
import AdminAuthLayout from "@/Layouts/Admin/AdminAuthLayout";
import { Sidebar } from "@/Layouts/Admin/Sidebar";
import { Footer } from "@/Layouts/Admin/Footer";

export default function Home({ auth, adminAccounts }) {
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
                        <h2 className="text-2xl font-semibold mb-4">
                            Admin Accounts
                        </h2>
                        <table className="min-w-full bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden">
                            <thead className="bg-gray-200 dark:bg-gray-600">
                                <tr>
                                    <th className="py-3 px-4 text-left">
                                        Name
                                    </th>
                                    <th className="py-3 px-4 text-left">
                                        Email
                                    </th>
                                    <th className="py-3 px-4 text-left">
                                        Role
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {adminAccounts.map((account) => (
                                    <tr
                                        key={account.id}
                                        className="border-b border-gray-200 dark:border-gray-600"
                                    >
                                        <td className="py-3 px-4">
                                            {account.name}
                                        </td>
                                        <td className="py-3 px-4">
                                            {account.email}
                                        </td>
                                        <td className="py-3 px-4">
                                            {account.role}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Footer />
                    </div>
                </div>
            </div>
        </AdminAuthLayout>
    );
}
