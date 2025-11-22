import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, FileText, Cog, Truck } from "lucide-react";

const Solutions = () => {
  const steps = [
    {
      icon: Search,
      title: "Discovery & Consultation",
      description: "We understand your school's unique needs, curriculum requirements, and learning objectives.",
    },
    {
      icon: FileText,
      title: "Content Planning",
      description: "Our team creates a detailed content plan aligned with your curriculum and pedagogical approach.",
    },
    {
      icon: Cog,
      title: "Production & Development",
      description: "Expert writers, designers, and developers bring the content to life with quality and precision.",
    },
    {
      icon: Truck,
      title: "Delivery & Support",
      description: "Timely delivery of print and digital materials with ongoing support and content updates.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-light via-background to-accent-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Solutions for Schools</h1>
              <p className="text-lg text-muted-foreground">
                Partner with Enlite Education for complete curriculum solutions tailored to your institution
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Options */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">How Schools Partner With Us</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg bg-gradient-to-b from-primary-light to-transparent border border-primary/20">
                  <h3 className="text-xl font-semibold mb-3">Adopt Our Books</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Choose from our ready-made, curriculum-aligned book series across grades and subjects.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Quick implementation</li>
                    <li>• Proven content quality</li>
                    <li>• QR-integrated resources</li>
                    <li>• Teacher support materials</li>
                  </ul>
                </div>

                <div className="p-6 rounded-lg bg-gradient-to-b from-accent-light to-transparent border border-accent/20">
                  <h3 className="text-xl font-semibold mb-3">Custom Content</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get bespoke textbooks and materials designed specifically for your school's brand and curriculum.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• School-branded materials</li>
                    <li>• Customized curriculum</li>
                    <li>• Unique pedagogical approach</li>
                    <li>• Full IP ownership options</li>
                  </ul>
                </div>

                <div className="p-6 rounded-lg bg-gradient-to-b from-primary-light to-transparent border border-primary/20">
                  <h3 className="text-xl font-semibold mb-3">Digital Extensions</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Add QR-based digital content to your existing textbooks for enhanced learning experiences.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Video explanations</li>
                    <li>• Interactive worksheets</li>
                    <li>• Assessment tools</li>
                    <li>• Regular content updates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">How It Works</h2>
                <p className="text-muted-foreground">Our simple 4-step process for partnering schools</p>
              </div>

              <div className="space-y-8">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex gap-6 items-start">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                          {index + 1}
                        </div>
                        {index < steps.length - 1 && (
                          <div className="w-0.5 h-16 bg-border mt-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="h-6 w-6 text-primary" />
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Partnering With Enlite</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Curriculum-aligned content ensuring learning objectives are met",
                  "Experienced team of educators and subject matter experts",
                  "Print and digital resources in one integrated solution",
                  "Flexible partnership models to suit different school needs",
                  "Ongoing support and content updates",
                  "Competitive pricing with bulk order discounts",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted">
                    <span className="inline-flex h-6 w-6 rounded-full bg-primary/20 items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                    </span>
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Let's Build Something Great Together</h2>
              <p className="text-lg opacity-90">
                Schedule a consultation to discuss how Enlite Education can support your school's academic goals.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
