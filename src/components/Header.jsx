import Vector from "./logos/Vector";
import Plus from "./logos/Plus";
import Record from "@/pages/record";
import dashboard from "@/pages/dashboard";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <div className="w-full bg-white">
      <div className="navbar bg-base-100 max-w-[1200px] h-[72px] m-auto ">
        <div className="flex-1 gap-6">
          <Vector />
          <Link href="/dashboard">
            <p class="btn btn-ghost text-base ">Dashboard</p>
          </Link>
          <Link href="/record">
            <p class="btn btn-ghost text-base ">Records</p>
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="flex w-[99px] h-[32px] bg-blue-600 rounded-xl items-center justify-center">
            <Plus />
            <p>Record</p>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
