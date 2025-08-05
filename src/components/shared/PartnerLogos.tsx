import React from "react";

interface Logo {
  logoUrl: string;
  name: string;
}

interface PartnerLogosProps {
  partners: Logo[];
}

export const PartnerLogos: React.FC<PartnerLogosProps> = ({ partners }) => {
  return (
    <div className="mb-12">
      <p className="text-center text-primary/80 mb-6 text-sm font-medium">Our Partners</p>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {partners.map((partner, index) => (
          <div key={index} className="h-16 flex items-center">
            <img
              src={partner.logoUrl}
              alt={`${partner.name} Logo`}
              className="max-h-full w-auto max-w-[120px] object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};