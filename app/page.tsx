"use client";

import { useState } from "react";
import { getFilteredStudents, TimeFilter } from "@/lib/data";
import { LeaderboardTable } from "@/components/leaderboard/leaderboard-table";
import { FilterButtons } from "@/components/leaderboard/filter-buttons";
import { Trophy } from "lucide-react";

export default function Home() {
  const [filter, setFilter] = useState<TimeFilter>("all-time");
  const students = getFilteredStudents(filter);

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <Trophy className="h-8 w-8 text-indigo-500" />
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Leaderboard
          </h1>
        </div>
        <p className="text-slate-600 dark:text-slate-400">
          Track the top performers in Dhaka Commerce College Science & IT Club
        </p>
      </div>

      {/* Filter Buttons */}
      <FilterButtons activeFilter={filter} onFilterChange={setFilter} />

      {/* Leaderboard Table */}
      <LeaderboardTable students={students} filter={filter} />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Total Students</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {students.length}
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <span className="text-xl font-bold text-white">↑</span>
            </div>
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Active This Week</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {students.filter(s => s.weeklyPoints > 0).length}
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
              <span className="text-xl font-bold text-white">★</span>
            </div>
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Top Score</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {students[0]?.points || 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
