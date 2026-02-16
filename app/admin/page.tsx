"use client";

import { students } from "@/lib/data";
import { StudentList } from "@/components/admin/student-list";
import { Shield, Users, TrendingUp, Award } from "lucide-react";

export default function AdminPage() {
  const totalPoints = students.reduce((sum, student) => sum + student.points, 0);
  const avgPoints = Math.round(totalPoints / students.length);
  const activeThisWeek = students.filter(s => s.weeklyPoints > 0).length;

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <Shield className="h-8 w-8 text-indigo-500" />
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Admin Dashboard
          </h1>
        </div>
        <p className="text-slate-600 dark:text-slate-400">
          Manage students and update their progress
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                Total Students
              </p>
              <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                {students.length}
              </p>
            </div>
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Users className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                Active This Week
              </p>
              <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                {activeThisWeek}
              </p>
            </div>
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                Average Points
              </p>
              <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                {avgPoints}
              </p>
            </div>
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
              <Award className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                Total Points
              </p>
              <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                {totalPoints}
              </p>
            </div>
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">Σ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Student List */}
      <StudentList students={students} />
    </div>
  );
}
