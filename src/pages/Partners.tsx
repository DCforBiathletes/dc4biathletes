
import { Building2 } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      name: "Institute of Sport",
      role: "Coordinator",
      description: "The Institute of Sport in Warsaw was established in 1977 as an independent research unit and has held the status of a National Research Institute since 2015. It employs around 80 people, including 20 researchers. Its motto, \"Science for sport, sport for science,\" reflects its mission to integrate scientific innovations into sports.\nThe Institute runs about 20 projects on education, sports governance, athlete support, data analysis, and training innovations. Since 2016, it has led the Team100 program, helping young athletes balance sports and education. It also coordinates Erasmus+ Sport projects.\nIts activities include sports research, diagnostics, consultancy for sports organizations, measurement tool development, certification of sports equipment, and training programs for coaches and managers.",
      logoUrl: "/lovable-uploads/77d89634-8212-43fa-9ec8-07b6623bb61e.png",
      webLink: "https://www.insp.pl"
    },
    {
      name: "University of Ljubljana",
      description: "The University of Ljubljana is Slovenia's premier educational and research institution, with a rich tradition dating back to 1919. It consists of 23 faculties and 3 art academies, offering education in the humanities, social sciences, natural sciences, and technical studies. With over 40,000 students, it ranks among the largest universities in Europe and has been consistently recognized for academic excellence and innovation in research and education.",
      logoUrl: "/lovable-uploads/1fc87e4b-96da-474a-b069-96e25f9605b4.png",
      webLink: "https://www.uni-lj.si/eng/"
    },
    {
      name: "International Biathlon Union",
      description: "The International Biathlon Union (IBU) is the international governing body for the Olympic sport of biathlon, recognized by the International Olympic Committee (IOC). Headquartered in Anif, Austria, the IBU is a non-profit organization overseeing competition organization and sport regulation worldwide. In collaboration with its 63 member national federations, the IBU promotes and develops biathlon participation through competitions, events, programs, and educational initiatives.",
      webLink: "https://www.biathlonworld.com",
      logoUrl: "/lovable-uploads/34835c7a-957c-43af-b326-feddc1e3d3e5.png"
    },
    {
      name: "European Federation of Sport Psychology",
      description: "FEPSAC (European Federation of Sport Psychology) is an organisation that promotes the development and application of sport and exercise psychology across Europe. It facilitates research, education, and professional practice in the field by organising conferences, publishing resources, and supporting collaboration among sport psychologists. FEPSAC also works to enhance the role of psychology in sports performance, athlete well-being, and coaching.",
      logoUrl: "/lovable-uploads/8843b318-eb4b-4e98-91b7-9f5f894cd1e3.png",
      webLink: "https://www.fepsac.com"
    },
    {
      name: "Re:vise Hub",
      role: "Digital Development",
      description: "Re:vise Hub is a pioneering digital agency based in Espoo, Finland, empowering organizations through innovative digital solutions. With a focus on delivering exceptional digital experiences, Re:vise Hub combines creative design with cutting-edge technology to create impactful digital products that help organizations achieve their goals.",
      webLink: "https://revise-hub.com",
      logoUrl: "/lovable-uploads/2a462c3e-dc4f-4675-8db5-94b0d34cd2ab.png"
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-[#06374f]">
      <section className="relative py-32">
        {/* Hero Image Container */}
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/619c457c-792b-45d0-b4af-d399947f8b92.png"
            alt="Partners meeting"
            className="w-full h-full object-cover"
          />
          {/* Overlay - removed colored overlay, keeping only a subtle shadow for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Partners</h1>
          <p className="text-xl text-white/90 mb-8">
            Working together to support dual careers in biathlon
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-6">
                  {partner.logoUrl ? (
                    <div className="w-40 h-20 flex items-center justify-center shrink-0">
                      <img 
                        src={partner.logoUrl} 
                        alt={`${partner.name} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                      <Building2 className="w-10 h-10 text-primary" />
                    </div>
                  )}
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-primary mb-1">
                      {partner.webLink ? (
                        <a 
                          href={partner.webLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-colors"
                        >
                          {partner.name}
                        </a>
                      ) : (
                        partner.name
                      )}
                    </h3>
                    {partner.role && (
                      <p className="text-accent mb-2 font-medium">{partner.role}</p>
                    )}
                    <p className="text-primary/80 whitespace-pre-line [text-wrap:balance]">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
