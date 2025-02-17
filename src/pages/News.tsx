
import { Newspaper, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Sample news data - in a real app, this would come from an API
const newsArticles = [
  {
    id: 1,
    title: "2024 Program Applications Now Open",
    date: "2024-03-15",
    category: "Announcements",
    excerpt: "Applications for the 2024-2025 academic year are now open. Apply before May 30th to secure your spot.",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Success Story: Maria's Journey",
    date: "2024-03-10",
    category: "Success Stories",
    excerpt: "Read about how Maria balanced her biathlon training while completing her engineering degree.",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "New Partnership with Alpine University",
    date: "2024-03-05",
    category: "Partnerships",
    excerpt: "We're excited to announce our new partnership with Alpine University, expanding educational opportunities.",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Winter Training Camp Highlights",
    date: "2024-02-28",
    category: "Events",
    excerpt: "Check out the highlights from our recent winter training camp in the Alps.",
    image: "/placeholder.svg",
  },
];

const News = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-primary/5 via-primary/10 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Latest News & Updates
          </h1>
          <p className="text-xl text-primary/80 mb-8">
            Stay informed about our program, success stories, and upcoming events
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <Card key={article.id} className="bg-white/80 backdrop-blur-sm border-primary/10 overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-sm text-primary/60">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-primary">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary/80 mb-4">{article.excerpt}</p>
                  <Button variant="link" className="text-accent hover:text-accent/80 p-0">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Newspaper className="w-12 h-12 text-accent" />
          </div>
          <h2 className="text-3xl font-bold text-primary mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-primary/80 mb-8">
            Subscribe to our newsletter to receive the latest news and updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg border border-primary/20 focus:outline-none focus:ring-2 focus:ring-accent/20"
            />
            <Button className="bg-accent hover:bg-accent/90 text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
