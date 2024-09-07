<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Admin/Dashboard');
    }

    public function directory()
    {
        return Inertia::render('Admin/Employee/Directory');
    }

    public function adminAccountsHome()
    {
        $adminAccounts = User::where('role', 'admin')->get();
        return Inertia::render('Admin/Administration/Account/Admin/Home', [
            'adminAccounts' => $adminAccounts
        ]);
    }

    public function employeeAccountsHome()
    {
        return Inertia::render('Admin/Administration/Account/Employee/Home');
    }
}
