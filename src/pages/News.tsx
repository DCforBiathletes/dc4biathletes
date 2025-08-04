
import React from "react";
import NewsHero from "@/components/news/NewsHero";
import NewsGrid from "@/components/news/NewsGrid";
import NewsletterSection from "@/components/news/NewsletterSection";
import { NewsArticle } from "@/components/news/NewsCard";

// News articles data
const newsArticles: NewsArticle[] = [
  {
    id: 2,
    title: "Gathering Insights from Biathletes at the Biathlon Development Camp in Lillehammer",
    date: "2025-04-15",
    category: "Research",
    excerpt: "A team of researchers recently travelled to Lillehammer (NOR) to collaborate with the Biathlon Development Camp - a key part of the Erasmus+ funded project DC4Biathletes.",
    content: `A team of researchers recently travelled to Lillehammer (NOR) to collaborate with the Biathlon Development Camp - a key part of the Erasmus+ funded project DC4Biathletes. The aim? To better understand the challenges and opportunities faced by young biathletes who are balancing both sport and education.

During our time at the camp, we conducted interviews with several dedicated coaches and held focus groups with passionate and motivated athletes. These conversations provided rich insights into the real-life experiences of managing training, competition, and academic demands.

The results have been both inspiring and eye-opening. These findings are now helping to develop a dedicated platform that will support young biathletes in navigating their dual careers more effectively, giving them the tools they need to thrive in both areas.

Stay tuned: this is just the beginning of something truly impactful for the next generation of biathletes.`,
    image: "/lovable-uploads/68663ed8-5147-47c9-9b3a-cb6468b2e6e1.png",
  },
  {
    id: 1,
    title: "DC4Biathletes at the IBU Youth and Junior World Championships in Östersund",
    date: "2025-03-10",
    category: "Events",
    excerpt: "From 1 to 3 March 2025, the DC4Biathletes project was actively promoted at the IBU Youth and Junior World Championships (YJWCH) in Östersund, Sweden.",
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
  }
];

const News: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#06374f]">
      <NewsHero 
        title="Latest News & Updates"
        subtitle="Stay informed about our program, success stories, and upcoming events"
        backgroundImage="/lovable-uploads/68663ed8-5147-47c9-9b3a-cb6468b2e6e1.png"
      />
      
      <NewsGrid articles={newsArticles} />
      
      <NewsletterSection />
    </div>
  );
};

export default News;
