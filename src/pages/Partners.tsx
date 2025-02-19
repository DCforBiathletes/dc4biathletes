
import { Building2 } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      name: "Institute of Sport",
      role: "Coordinator",
      description: "[Description pending]",
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
      description: "[Description pending]",
      logoUrl: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-[#E5DEFF]">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Partners</h1>
          <p className="text-xl text-primary/80 mb-8">
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
                    <h3 className="text-xl font-bold text-primary mb-1">{partner.name}</h3>
                    {partner.role && (
                      <p className="text-accent mb-2 font-medium">{partner.role}</p>
                    )}
                    <p className="text-primary/80">{partner.description}</p>
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
