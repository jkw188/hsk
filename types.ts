export enum HSKLevel {
  HSK1 = 'HSK 1',
  HSK2 = 'HSK 2',
  HSK3 = 'HSK 3',
  HSK4 = 'HSK 4',
  HSK5 = 'HSK 5',
  HSK6 = 'HSK 6',
}

export enum LessonType {
  GRAMMAR = 'Grammar',
  VOCABULARY = 'Vocabulary',
  EXERCISE = 'Exercise',
}

export interface Lesson {
  id: string;
  title: string;
  type: LessonType;
  content: string; // Markdown content
}

export interface Module {
  id: string;
  level: HSKLevel;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}