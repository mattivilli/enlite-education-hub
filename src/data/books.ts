export interface Book {
  id: string;
  title: string;
  grade: string;
  subject: string;
  description: string;
  tags: string[];
  imageUrl?: string;
}

export const books: Book[] = [
  {
    id: "math-nursery",
    title: "Numbers and Fun",
    grade: "Nursery",
    subject: "Mathematics",
    description: "Introduction to numbers, shapes, and basic counting through playful activities and colorful illustrations.",
    tags: ["With QR Content", "Activity-Based"]
  },
  {
    id: "english-kg1",
    title: "My First Words",
    grade: "KG-1",
    subject: "English",
    description: "Building vocabulary and phonics awareness through stories, rhymes, and interactive exercises.",
    tags: ["With QR Content", "Phonics-Based"]
  },
  {
    id: "science-grade3",
    title: "Young Scientists",
    grade: "Grade 3",
    subject: "Science",
    description: "Exploring the world of plants, animals, and simple experiments that spark curiosity and scientific thinking.",
    tags: ["With QR Content", "CBSE-Aligned", "Experiments"]
  },
  {
    id: "math-grade5",
    title: "Math Masters",
    grade: "Grade 5",
    subject: "Mathematics",
    description: "Advanced arithmetic, geometry, and problem-solving skills with step-by-step explanations and practice sets.",
    tags: ["With QR Content", "CBSE-Aligned"]
  },
  {
    id: "social-grade7",
    title: "Our World & History",
    grade: "Grade 7",
    subject: "Social Studies",
    description: "Comprehensive coverage of geography, history, and civics with maps, timelines, and engaging narratives.",
    tags: ["With QR Content", "ICSE-Aligned"]
  },
  {
    id: "science-grade10",
    title: "Physics & Chemistry Fundamentals",
    grade: "Grade 10",
    subject: "Science",
    description: "In-depth exploration of physical and chemical principles with diagrams, experiments, and board exam preparation.",
    tags: ["With QR Content", "CBSE-Aligned", "Board Exam Prep"]
  }
];
