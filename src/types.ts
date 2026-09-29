export const PROGRAM = {
  "Upper A": [
    { name: "Barbell Bench Press", low: 3, high: 5, sets: 4 },
    { name: "Weighted Pull-Up", low: 5, high: 8, sets: 4 },
    { name: "Incline DB Press", low: 8, high: 12, sets: 3 },
    { name: "Chest-Supported Row", low: 8, high: 12, sets: 3 },
    { name: "Cable Lateral Raise", low: 12, high: 20, sets: 4 },
    { name: "Incline DB Curl", low: 8, high: 12, sets: 3 },
    { name: "Cable Woodchoppers (Core)", low: 10, high: 15, sets: 3 },
  ],
  "Lower A": [
    { name: "Back Squat", low: 6, high: 8, sets: 4 },
    { name: "Romanian Deadlift", low: 8, high: 10, sets: 3 },
    { name: "Walking Lunge", low: 10, high: 12, sets: 3 },
    { name: "Seated Leg Curl", low: 10, high: 15, sets: 3 },
    { name: "Standing Calf Raise", low: 10, high: 15, sets: 4 },
  ],
  "Upper B": [
    { name: "Seated DB Shoulder Press", low: 6, high: 8, sets: 4 },
    { name: "Pendlay / Barbell Row", low: 5, high: 8, sets: 4 },
    { name: "Lat Pulldown", low: 8, high: 12, sets: 3 },
    { name: "Face Pulls", low: 15, high: 20, sets: 3 },
    { name: "DB Lateral Raise", low: 12, high: 15, sets: 4 },
    { name: "EZ-Bar Curl", low: 8, high: 12, sets: 3 },
    { name: "Hanging Leg Raises (Core)", low: 10, high: 15, sets: 3 },
  ],
  "Lower B": [
    { name: "Deadlift / Trap Bar", low: 3, high: 5, sets: 3 },
    { name: "Front Squat", low: 8, high: 10, sets: 3 },
    { name: "Leg Extension", low: 12, high: 15, sets: 3 },
    { name: "Seated Calf Raise", low: 10, high: 15, sets: 4 },
    { name: "Dead Bugs (Deep Core)", low: 10, high: 15, sets: 3 },
  ],
}

export type WorkoutType = keyof typeof PROGRAM;

export interface Exercise {
  name: string;
  low: number;
  high: number;
  sets: number;
}

export interface SetLog {
  reps: number;
  weight: number;
}

export interface ExerciseLog {
  exerciseName: string;
  sets: SetLog[];
  notes?: string;
}

export interface WorkoutSession {
  id: string;
  workoutType: WorkoutType;
  date: string;
  exercises: ExerciseLog[];
  completed: boolean;
}

export interface PersonalRecord {
  exerciseName: string;
  weight: number;
  reps: number;
  date: string;
  workoutType: WorkoutType;
}
