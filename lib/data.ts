export interface Student {
  id: number;
  name: string;
  points: number;
  weeklyPoints: number;
  monthlyPoints: number;
  rank: number;
  trend: "up" | "down" | "neutral";
  avatar: string;
}

export const students: Student[] = [
  {
    id: 1,
    name: "na dekhe president, vai",
    points: 850,
    weeklyPoints: 120,
    monthlyPoints: 450,
    rank: 1,
    trend: "up",
    avatar: "/avatars/user1.jpg",
  },
  {
    id: 2,
    name: "commerce er gs, vai",
    points: 720,
    weeklyPoints: 150,
    monthlyPoints: 520,
    rank: 2,
    trend: "up",
    avatar: "/avatars/user2.jpg",
  },
  {
    id: 3,
    name: "haray jaowa vp, vai",
    points: 640,
    weeklyPoints: 90,
    monthlyPoints: 380,
    rank: 3,
    trend: "down",
    avatar: "/avatars/user3.jpg",
  },
  {
    id: 4,
    name: "Coding Master",
    points: 580,
    weeklyPoints: 110,
    monthlyPoints: 290,
    rank: 4,
    trend: "up",
    avatar: "/avatars/user4.jpg",
  },
  {
    id: 5,
    name: "Algorithm Expert",
    points: 520,
    weeklyPoints: 85,
    monthlyPoints: 240,
    rank: 5,
    trend: "neutral",
    avatar: "/avatars/user5.jpg",
  },
  {
    id: 6,
    name: "Debug Ninja",
    points: 480,
    weeklyPoints: 95,
    monthlyPoints: 210,
    rank: 6,
    trend: "up",
    avatar: "/avatars/user6.jpg",
  },
  {
    id: 7,
    name: "React Warrior",
    points: 445,
    weeklyPoints: 70,
    monthlyPoints: 185,
    rank: 7,
    trend: "down",
    avatar: "/avatars/user7.jpg",
  },
  {
    id: 8,
    name: "Python Pro",
    points: 410,
    weeklyPoints: 80,
    monthlyPoints: 175,
    rank: 8,
    trend: "neutral",
    avatar: "/avatars/user8.jpg",
  },
];

export type TimeFilter = "weekly" | "monthly" | "all-time";

export function getFilteredStudents(filter: TimeFilter): Student[] {
  const sortedStudents = [...students];
  
  switch (filter) {
    case "weekly":
      return sortedStudents
        .sort((a, b) => b.weeklyPoints - a.weeklyPoints)
        .map((student, index) => ({
          ...student,
          rank: index + 1,
        }));
    case "monthly":
      return sortedStudents
        .sort((a, b) => b.monthlyPoints - a.monthlyPoints)
        .map((student, index) => ({
          ...student,
          rank: index + 1,
        }));
    case "all-time":
    default:
      return sortedStudents
        .sort((a, b) => b.points - a.points)
        .map((student, index) => ({
          ...student,
          rank: index + 1,
        }));
  }
}
