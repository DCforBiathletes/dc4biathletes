
import { ArrowLeft, Calendar } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const NewsDetail = () => {
  const { id } = useParams();
  
  // This is a placeholder article that would normally be fetched based on the ID
  const article = {
    id: 1,
    title: "DC4Biathletes at the IBU Youth and Junior World Championships in Östersund",
    date: "2025-03-10",
    category: "Events",
    content: `From 1 to 3 March 2025, the DC4Biathletes project was actively promoted at the IBU Youth and Junior World Championships (YJWCH) in Östersund, Sweden. The initiative aimed to raise awareness about the importance of dual careers in biathlon and encourage athletes aged 18 and older to participate in the project's survey.

The event provided a valuable opportunity to connect with young biathletes, coaches, and support teams worldwide. A dedicated DC4Biathletes stand was set up, featuring roll-ups, beach flags, and stickers, along with the recognized IBU Academy branding. Dagmara Gerasimuk, IBU Development Director, and Anna Kitzbichler, IBU Education Manager, were present at the stand to engage with athletes through one-on-one conversations and to give athletes access to the survey via tablets or their smartphones.

To ensure maximum outreach, multiple communication channels were utilized, including:
• Personal interactions and discussions with athletes, coaches, and team officials.
• Announcements through the official event WhatsApp group.
• Using personal connections within the biathlon community.
• Presentation during workshops organized by the IBU Sustainability Department.

To encourage participation, small incentives were provided to athletes who engaged with the project and completed the survey. As a result, 110 responses from 31 different countries were collected over the three days.

The visit to Östersund marked a significant step in promoting the DC4Biathletes project within the biathlon community, enhancing awareness of dual career challenges, and gathering valuable data to improve support for young athletes.`,
    image: "/lovable-uploads/ba54deb2-a7c1-4636-b8b9-5844630c315b.png",
  };

  return (
    <div className="min-h-screen pt-16 bg-[#06374f]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/news">
          <Button variant="ghost" className="text-white mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to News
          </Button>
        </Link>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                {article.category}
              </Badge>
              <div className="flex items-center text-sm text-primary/60">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(article.date).toLocaleDateString()}
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">{article.title}</h1>
            
            <div className="prose prose-lg max-w-none text-primary/80">
              <p className="whitespace-pre-line">{article.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
