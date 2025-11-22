import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-light via-background to-accent-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Enlite Education</h1>
              <p className="text-lg text-muted-foreground">
                Transforming education through quality content and innovative learning solutions
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Founded over a decade ago, Enlite Education began with a simple mission: to create
                  educational content that truly makes a difference in students' lives. What started as
                  a small team of passionate educators has grown into a leading content development
                  company serving hundreds of schools across India.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that quality education starts with quality content. Every textbook we
                  create, every digital resource we develop, and every QR code we integrate is
                  designed with one goal in mind: to make learning more engaging, accessible, and
                  effective for students from Nursery to Grade 12.
                </p>
              </div>

              {/* Mission & Vision */}
              <div className="grid md:grid-cols-2 gap-8 pt-8">
                <div className="p-6 rounded-lg bg-primary-light border border-primary/20">
                  <Target className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">
                    To provide curriculum-aligned, high-quality educational content that empowers
                    schools, teachers, and students to achieve academic excellence through innovative
                    print and digital resources.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-accent-light border border-accent/20">
                  <Eye className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                  <p className="text-sm text-muted-foreground">
                    To be India's most trusted educational content partner, setting the standard for
                    blended learning solutions that combine the best of traditional and modern
                    teaching methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values & Stats */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Why Schools Trust Us</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Curriculum Expertise</h3>
                  <p className="text-sm text-muted-foreground">
                    Deep understanding of CBSE, ICSE, and State Board curricula
                  </p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
                  <p className="text-sm text-muted-foreground">
                    50+ subject experts, educators, and instructional designers
                  </p>
                </div>
                <div className="text-center">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                  <p className="text-sm text-muted-foreground">
                    Rigorous review process ensuring accuracy and relevance
                  </p>
                </div>
              </div>

              {/* Milestones */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-center mb-8">Our Journey</h3>
                <div className="space-y-4">
                  {[
                    { year: "2013", event: "Enlite Education founded in Hyderabad" },
                    { year: "2015", event: "Published first series of textbooks for primary grades" },
                    { year: "2017", event: "Introduced QR-code integrated learning" },
                    { year: "2019", event: "Expanded to serve 200+ schools across South India" },
                    { year: "2021", event: "Launched comprehensive digital resource library" },
                    { year: "2024", event: "Serving 500+ schools with 200+ published titles" },
                  ].map((milestone, index) => (
                    <div key={index} className="flex gap-4 items-start p-4 rounded-lg bg-background border border-border">
                      <div className="font-bold text-primary text-lg min-w-[60px]">{milestone.year}</div>
                      <div className="text-muted-foreground">{milestone.event}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
