"use client";

import { students } from "@/lib/data";
import { ProfileCard } from "@/components/profile/profile-card";
import { Users } from "lucide-react";

export default function ProfilesPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <Users className="h-8 w-8 text-indigo-500" />
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
            Student Profiles
          </h1>
        </div>
        <p className="text-slate-600 dark:text-slate-400">
          View detailed profiles and progress of all club members
        </p>
      </div>

      {/* Profile Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {students.map((student, index) => (
          <div
            key={student.id}
            style={{
              animation: `fadeIn 0.5s ease-in-out ${index * 0.1}s both`,
            }}
          >
            <ProfileCard student={student} />
          </div>
        ))}
      </div>
    </div>
  );
}
