import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { books } from "@/data/books";
import { BookOpen } from "lucide-react";

const Catalog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-light via-background to-accent-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Catalog</h1>
              <p className="text-lg text-muted-foreground">
                Explore our comprehensive collection of textbooks and learning materials
              </p>
            </div>
          </div>
        </section>

        {/* Books Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {books.map((book) => (
                <Card key={book.id} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardHeader>
                    {/* Book Cover Placeholder */}
                    <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-4">
                      <BookOpen className="h-16 w-16 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{book.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2 text-sm">
                      <Badge variant="secondary">{book.grade}</Badge>
                      <Badge variant="outline">{book.subject}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{book.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {book.tags.map((tag, index) => (
                        <Badge key={index} variant="default" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Note */}
            <div className="max-w-4xl mx-auto mt-12 p-6 rounded-lg bg-muted border border-border text-center">
              <p className="text-sm text-muted-foreground">
                This is a sample selection from our catalog. We have 200+ titles covering all grades and subjects.
                <br />
                <span className="font-semibold text-foreground">
                  Contact us to request a complete catalog or discuss custom content needs.
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
