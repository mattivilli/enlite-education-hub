export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Priya Sharma",
    role: "Principal",
    organization: "Delhi Public School, Hyderabad",
    content: "Enlite Education's textbooks have transformed our curriculum delivery. The QR-code integration is brilliant - students love accessing videos and extra practice materials instantly!",
    rating: 5
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    role: "Academic Director",
    organization: "Narayana Group of Schools",
    content: "We've partnered with Enlite for three years now. Their attention to curriculum alignment and quality content creation is unmatched. Highly recommend for any educational institution.",
    rating: 5
  },
  {
    id: "3",
    name: "Anjali Reddy",
    role: "Mathematics Teacher",
    organization: "Oakridge International School",
    content: "The teacher guides and digital resources make lesson planning so much easier. My students are more engaged, and the assessment materials are comprehensive.",
    rating: 5
  }
];
