const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none text-foreground/80">
          <p className="mb-6">
            This privacy policy outlines how DC4Biathletes collects, uses, and protects 
            your personal information when you use our website and services.
          </p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information We Collect</h2>
          <p className="mb-4">
            We may collect personal information such as your name, email address, and 
            contact details when you interact with our services.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How We Use Your Information</h2>
          <p className="mb-4">
            Your information is used to provide and improve our services, communicate 
            with you, and ensure the security of our platform.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Data Protection</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact us 
            through our contact page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;