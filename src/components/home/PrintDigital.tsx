import { Book, Smartphone, QrCode } from "lucide-react";

const PrintDigital = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Print + Digital Excellence
            </h2>
            <p className="text-lg text-muted-foreground">
              The perfect blend of traditional textbooks and modern digital resources
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Print Books */}
            <div className="text-center space-y-4 p-6 rounded-lg bg-gradient-to-b from-primary-light to-transparent border border-primary/20">
              <div className="inline-flex p-4 bg-primary rounded-full">
                <Book className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Quality Print Books</h3>
              <p className="text-sm text-muted-foreground">
                Professionally designed textbooks with clear layouts, engaging visuals, and
                curriculum-aligned content that students can rely on.
              </p>
            </div>

            {/* QR Integration */}
            <div className="text-center space-y-4 p-6 rounded-lg bg-gradient-to-b from-accent-light to-transparent border border-accent/20">
              <div className="inline-flex p-4 bg-accent rounded-full">
                <QrCode className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold">QR Code Integration</h3>
              <p className="text-sm text-muted-foreground">
                Simply scan QR codes in the book to instantly access videos, additional
                exercises, and interactive content.
              </p>
            </div>

            {/* Digital Resources */}
            <div className="text-center space-y-4 p-6 rounded-lg bg-gradient-to-b from-primary-light to-transparent border border-primary/20">
              <div className="inline-flex p-4 bg-primary rounded-full">
                <Smartphone className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Digital Resources</h3>
              <p className="text-sm text-muted-foreground">
                Access a rich library of videos, PDFs, worksheets, and interactive materials
                that complement the printed textbooks.
              </p>
            </div>
          </div>

          {/* Benefits List */}
          <div className="mt-12 p-8 rounded-lg bg-muted border border-border">
            <h3 className="text-xl font-semibold mb-4">Why This Approach Works</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="inline-flex h-6 w-6 rounded-full bg-primary/20 items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-sm">
                  <strong>Better Retention:</strong> Students engage with content through multiple modalities
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex h-6 w-6 rounded-full bg-primary/20 items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-sm">
                  <strong>Flexible Learning:</strong> Access digital content anytime, anywhere
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex h-6 w-6 rounded-full bg-primary/20 items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-sm">
                  <strong>Cost-Effective:</strong> One book unlocks both print and digital resources
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex h-6 w-6 rounded-full bg-primary/20 items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-sm">
                  <strong>Regular Updates:</strong> Digital content is continuously enhanced and updated
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintDigital;
