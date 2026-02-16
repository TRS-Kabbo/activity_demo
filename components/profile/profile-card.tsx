"use client";

import { Student } from "@/lib/data";
import { Trophy, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProfileCardProps {
  student: Student;
}

export function ProfileCard({ student }: ProfileCardProps) {
  return (
    <div className="glass-card p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <div className="h-24 w-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
            {student.name.charAt(0).toUpperCase()}
          </div>
          <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
            <Trophy className="h-4 w-4 text-white" />
          </div>
        </div>

        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">
          {student.name}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            #{student.rank}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">Rank</span>
        </div>

        <div className="flex items-center gap-4 mb-4 text-sm">
          <div>
            <p className="text-slate-500 dark:text-slate-400">Total Points</p>
            <p className="font-bold text-slate-900 dark:text-slate-100">
              {student.points}
            </p>
          </div>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800"></div>
          <div>
            <p className="text-slate-500 dark:text-slate-400">Monthly</p>
            <p className="font-bold text-slate-900 dark:text-slate-100">
              {student.monthlyPoints}
            </p>
          </div>
        </div>

        {student.trend === "up" && (
          <div className="flex items-center gap-1 text-green-500 text-xs mb-4">
            <TrendingUp className="h-3 w-3" />
            <span>Trending up</span>
          </div>
        )}

        <button className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 transform group-hover:scale-105">
          View Progress
        </button>
      </div>
    </div>
  );
}
