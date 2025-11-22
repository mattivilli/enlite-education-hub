import { School, Building2, Users, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const audiences = [
  {
    icon: School,
    title: "Schools",
    description: "Complete curriculum solutions, custom content, and digital resources for K-12 education.",
  },
  {
    icon: Building2,
    title: "Publishers",
    description: "Content development, editing, and design services for educational publishing houses.",
  },
  {
    icon: Users,
    title: "Teachers",
    description: "Comprehensive teacher guides, lesson plans, and classroom-ready materials.",
  },
  {
    icon: Heart,
    title: "Parents",
    description: "Quality textbooks and resources to support your child's learning journey at home.",
  },
];

const WhoWeServe = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering educators, institutions, and learners with quality content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{audience.title}</h3>
                  <p className="text-sm text-muted-foreground">{audience.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
