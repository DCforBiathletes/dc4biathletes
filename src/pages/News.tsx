import { Newspaper, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

const newsArticles = [
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

const News = () => {
  return (
    <div className="min-h-screen bg-[#06374f]">
      {/* Hero Section - Added mt-16 to push content below fixed navbar */}
      <section className="pt-24 pb-20 px-4 relative">
        {/* Hero Image Container */}
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/68663ed8-5147-47c9-9b3a-cb6468b2e6e1.png"
            alt="Athletes posing together"
            className="w-full h-full object-cover object-top"
          />
          {/* Overlay - updated to use 15% black transparency instead of 30% */}
          <div className="absolute inset-0 bg-black/15"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest News & Updates
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Stay informed about our program, success stories, and upcoming events
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {newsArticles.map((article) => (
              <Card key={article.id} className="bg-white/80 backdrop-blur-sm border-primary/10 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover rounded-l-lg"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                        {article.category}
                      </Badge>
                      <div className="flex items-center text-sm text-primary/60">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-primary mb-4">{article.title}</h2>
                    <div className="prose text-primary/80 max-w-none mb-6">
                      <p className="whitespace-pre-line">{article.content}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" className="text-white" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive className="text-white">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" className="text-white" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>

      {/* Mailchimp Newsletter Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Newspaper className="w-12 h-12 text-accent" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Subscribe to our newsletter to receive the latest news and updates
          </p>
          
          {/* Mailchimp Form */}
          <div className="mx-auto max-w-xl glass-card p-6">
            <div id="mc_embed_signup">
              <form 
                action="https://dc4biathletes.us17.list-manage.com/subscribe/post?u=193d42e6c5c9b06a1d2722e36&amp;id=d5ffff5d0a&amp;f_id=0097cce3f0" 
                method="post" 
                id="mc-embedded-subscribe-form" 
                name="mc-embedded-subscribe-form" 
                className="validate" 
                target="_blank"
              >
                <div id="mc_embed_signup_scroll">
                  <div className="indicates-required text-white text-sm mb-2 text-right">
                    <span className="asterisk text-accent">*</span> indicates required
                  </div>
                  <div className="mc-field-group mb-4">
                    <label htmlFor="mce-EMAIL" className="block text-white mb-2">
                      Email Address <span className="asterisk text-accent">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="EMAIL" 
                      className="required email w-full px-4 py-2 rounded-lg border border-primary/20 focus:outline-none focus:ring-2 focus:ring-accent/20" 
                      id="mce-EMAIL" 
                      required 
                    />
                  </div>
                  <div id="mce-responses" className="clear">
                    <div className="response hidden" id="mce-error-response"></div>
                    <div className="response hidden" id="mce-success-response"></div>
                  </div>
                  <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                    <input type="text" name="b_193d42e6c5c9b06a1d2722e36_d5ffff5d0a" tabIndex={-1} />
                  </div>
                  <div className="flex justify-center mt-4">
                    <button 
                      type="submit" 
                      name="subscribe" 
                      id="mc-embedded-subscribe" 
                      className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          {/* Add the Mailchimp script */}
          <script 
            type="text/javascript" 
            src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
            async
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function($) {
                  window.fnames = new Array();
                  window.ftypes = new Array();
                  fnames[0]='EMAIL';
                  ftypes[0]='email';
                  fnames[1]='FNAME';
                  ftypes[1]='text';
                  fnames[2]='LNAME';
                  ftypes[2]='text';
                }(jQuery));
                var $mcj = jQuery.noConflict(true);
              `
            }}
          ></script>
        </div>
      </section>
    </div>
  );
};

export default News;
