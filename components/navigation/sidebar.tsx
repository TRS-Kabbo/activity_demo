"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, Shield, Moon, Sun } from "lucide-react";
import { useTheme } from "../ui/theme-provider";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Leaderboard", href: "/", icon: Home },
  { name: "Profiles", href: "/profiles", icon: Users },
  { name: "Admin", href: "/admin/login", icon: Shield },
];

export function Sidebar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex h-screen w-64 flex-col fixed left-0 top-0 glass-card border-r">
      <div className="flex h-16 items-center justify-center border-b border-slate-200/50 dark:border-slate-800/50">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          DCC IT Club
        </h1>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              )}
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-slate-200/50 dark:border-slate-800/50 p-4">
        <button
          onClick={toggleTheme}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
        >
          {theme === "dark" ? (
            <>
              <Sun className="h-5 w-5" />
              Light Mode
            </>
          ) : (
            <>
              <Moon className="h-5 w-5" />
              Dark Mode
            </>
          )}
        </button>
      </div>
    </div>
  );
}
