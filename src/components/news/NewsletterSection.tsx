import React from "react";
import { Newspaper } from "lucide-react";

const NewsletterSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-6">
          <Newspaper className="w-12 h-12 text-white" />
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
  );
};

export default NewsletterSection;
