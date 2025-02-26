
import { Building2 } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      name: "Institute of Sport",
      role: "Coordinator",
      description: "The Institute of Sport in Warsaw was established in 1977 as an independent research unit and has held the status of a National Research Institute since 2015. It employs around 80 people, including 20 researchers. Its motto, \"Science for sport, sport for science,\" reflects its mission to integrate scientific innovations into sports.\nThe Institute runs about 20 projects on education, sports governance, athlete support, data analysis, and training innovations. Since 2016, it has led the Team100 program, helping young athletes balance sports and education. It also coordinates Erasmus+ Sport projects.\nIts activities include sports research, diagnostics, consultancy for sports organizations, measurement tool development, certification of sports equipment, and training programs for coaches and managers.",
      logoUrl: "/placeholder.svg"
    },
    {
      name: "University of Ljubljana",
      description: "[Description pending]",
      logoUrl: "/placeholder.svg"
    },
    {
      name: "International Biathlon Union",
      description: "The International Biathlon Union (IBU) is the international governing body for the Olympic sport of biathlon, recognized by the International Olympic Committee (IOC). Headquartered in Anif, Austria, the IBU is a non-profit organization overseeing competition organization and sport regulation worldwide. In collaboration with its 63 member national federations, the IBU promotes and develops biathlon participation through competitions, events, programs, and educational initiatives.",
      logoUrl: "/placeholder.svg"
    },
    {
      name: "European Federation of Sport Psychology",
      description: "[Description pending]",
      logoUrl: "/placeholder.svg"
    },
    {
      name: "Re:vise Hub",
      role: "Digital Development",
      description: "Re:vise Hub is a pioneering digital agency based in Espoo, Finland, empowering organizations through innovative digital solutions. With a focus on delivering exceptional digital experiences, Re:vise Hub combines creative design with cutting-edge technology to create impactful digital products that help organizations achieve their goals.",
      webLink: "https://revise-hub.com",
      logoUrl: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-[#E5DEFF]">
      <section className="relative py-32 bg-primary/90 before:absolute before:inset-0 before:z-0 before:bg-black/40">
        <div className="absolute inset-0 z-[-1]">
          <img
            src="/lovable-uploads/619c457c-792b-45d0-b4af-d399947f8b92.png"
            alt="Partners meeting"
            className="w-full h-full object-cover"
          />
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
                  <div className="w-20 h-20 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                    <Building2 className="w-10 h-10 text-primary" />
                  </div>
                  <div>
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
                    <p className="text-primary/80 whitespace-pre-line">{partner.description}</p>
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
