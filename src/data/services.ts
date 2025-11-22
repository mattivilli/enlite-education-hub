export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "curriculum-content",
    title: "Curriculum Content Development",
    description: "Comprehensive curriculum-aligned content creation from Nursery to Grade 12, tailored to various educational boards and learning outcomes.",
    icon: "BookOpen",
    features: [
      "CBSE, ICSE, State Board alignment",
      "Custom textbooks and workbooks",
      "Assessment and practice materials",
      "Teacher guides and answer keys",
      "Age-appropriate content design"
    ]
  },
  {
    id: "book-publishing",
    title: "Book Publishing & Print Solutions",
    description: "End-to-end book publishing services from manuscript to printed books, with professional design and quality production.",
    icon: "Book",
    features: [
      "Professional writing and editing",
      "Creative layout and design",
      "Illustration and graphics",
      "Quality print production",
      "Distribution support"
    ]
  },
  {
    id: "digital-resources",
    title: "Digital Learning Resources",
    description: "Engaging digital content including videos, interactive PDFs, worksheets, and multimedia resources to enhance learning experiences.",
    icon: "Video",
    features: [
      "Educational video content",
      "Interactive digital worksheets",
      "Animated concept explanations",
      "Question banks and quizzes",
      "Parent and teacher resources"
    ]
  },
  {
    id: "qr-integration",
    title: "QR-Code Integrated Content",
    description: "Innovative QR code integration that connects printed books to secure digital content, creating a seamless print-to-digital experience.",
    icon: "QrCode",
    features: [
      "Secure QR code generation",
      "Video tutorials and demos",
      "Additional practice materials",
      "Downloadable resources",
      "Regular content updates"
    ]
  }
];
