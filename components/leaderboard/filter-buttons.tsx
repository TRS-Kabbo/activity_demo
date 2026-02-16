"use client";

import { TimeFilter } from "@/lib/data";
import { cn } from "@/lib/utils";

interface FilterButtonsProps {
  activeFilter: TimeFilter;
  onFilterChange: (filter: TimeFilter) => void;
}

const filters: { label: string; value: TimeFilter }[] = [
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
  { label: "All-time", value: "all-time" },
];

export function FilterButtons({ activeFilter, onFilterChange }: FilterButtonsProps) {
  return (
    <div className="flex gap-2 p-1 glass-card rounded-xl w-fit">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={cn(
            "px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
            activeFilter === filter.value
              ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg transform scale-105"
              : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
