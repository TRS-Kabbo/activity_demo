"use client";

import { Student, TimeFilter } from "@/lib/data";
import { TrendingUp, TrendingDown, Minus, Trophy, Medal, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface LeaderboardTableProps {
  students: Student[];
  filter: TimeFilter;
}

export function LeaderboardTable({ students, filter }: LeaderboardTableProps) {
  const getPoints = (student: Student) => {
    switch (filter) {
      case "weekly":
        return student.weeklyPoints;
      case "monthly":
        return student.monthlyPoints;
      default:
        return student.points;
    }
  };

  const getTrendIcon = (trend: Student["trend"]) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-5 w-5 text-green-500" />;
      case "down":
        return <TrendingDown className="h-5 w-5 text-red-500" />;
      default:
        return <Minus className="h-5 w-5 text-slate-400" />;
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-slate-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-700" />;
      default:
        return null;
    }
  };

  return (
    <div className="glass-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200/50 dark:border-slate-800/50">
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                Rank
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                Points
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                Trend
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/50 dark:divide-slate-800/50">
            {students.map((student, index) => (
              <tr
                key={student.id}
                className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors duration-200"
                style={{
                  animation: `fadeIn 0.5s ease-in-out ${index * 0.05}s both`,
                }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    {getRankIcon(student.rank)}
                    <span
                      className={cn(
                        "text-lg font-bold",
                        student.rank === 1 && "text-yellow-500",
                        student.rank === 2 && "text-slate-400",
                        student.rank === 3 && "text-amber-700",
                        student.rank > 3 && "text-slate-700 dark:text-slate-300"
                      )}
                    >
                      #{student.rank}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                      {student.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {student.name}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-lg font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                      {getPoints(student)}
                    </span>
                    <span className="ml-1 text-xs text-slate-500 dark:text-slate-400">
                      pts
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getTrendIcon(student.trend)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
