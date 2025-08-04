import { Calendar, ArrowLeft, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "DC4Biathletes Project Officially Launched",
      excerpt: "The innovative dual career program for young biathletes has been officially launched, combining academic excellence with athletic performance.",
      content: "The DC4Biathletes project has officially launched its innovative dual career program, designed specifically for young biathlon athletes who aspire to excel both in their sport and academic pursuits.",
      date: "2025-01-04",
      author: "DC4Biathletes Team",
      category: "Project Launch",
      image: "/lovable-uploads/70b3aab8-8456-4835-a4f3-616cf7898fd3.png"
    },
    {
      id: 2,
      title: "First Research Findings Published",
      excerpt: "Initial research results show promising outcomes for athletes participating in the dual career program.",
      content: "Our research team has published the first findings from the dual career study, showing significant positive impacts on both athletic performance and academic achievement among participating athletes.",
      date: "2025-01-04",
      author: "Research Team",
      category: "Research",
      image: "/lovable-uploads/e8356e16-b869-4484-837a-8bba2f9f567d.png"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Project Launch":
        return "bg-primary text-primary-foreground";
      case "Research":
        return "bg-emerald-100 text-emerald-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-primary/5 to-accent/5">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Latest News & Updates
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Stay informed about the latest developments in the DC4Biathletes project
          </p>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 border border-primary/10 flex flex-col">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-t-lg overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 flex-grow flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {article.content}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-auto">
                    <User className="w-4 h-4" />
                    {article.author}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Subscribe to our newsletter to receive the latest news and updates about the DC4Biathletes project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;