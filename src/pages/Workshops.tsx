
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarCheck2, MapPin, Clock, Users } from "lucide-react";

// Sample workshop data - in a real app, this would come from an API
const workshops = [
  {
    id: 1,
    title: "Dual Career Planning Workshop",
    date: new Date(2024, 3, 15),
    location: "Oslo, Norway",
    time: "10:00 - 16:00",
    capacity: "20 participants",
    type: "Planning",
  },
  {
    id: 2,
    title: "Time Management for Athletes",
    date: new Date(2024, 3, 22),
    location: "Stockholm, Sweden",
    time: "09:00 - 15:00",
    capacity: "15 participants",
    type: "Skills",
  },
  {
    id: 3,
    title: "Academic Success Strategies",
    date: new Date(2024, 4, 5),
    location: "Helsinki, Finland",
    time: "13:00 - 17:00",
    capacity: "25 participants",
    type: "Academic",
  },
];

const Workshops = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedWorkshops, setSelectedWorkshops] = useState(workshops);

  // Filter workshops based on selected date
  const handleSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      const filtered = workshops.filter(
        (workshop) =>
          format(workshop.date, "yyyy-MM-dd") ===
          format(selectedDate, "yyyy-MM-dd")
      );
      setSelectedWorkshops(filtered.length > 0 ? filtered : workshops);
    } else {
      setSelectedWorkshops(workshops);
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-primary/5 via-primary/10 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Workshops & Events
          </h1>
          <p className="text-xl text-primary/80 mb-8">
            Join our specialized workshops designed to help athletes balance their
            sporting and academic careers.
          </p>
        </div>
      </section>

      {/* Calendar and Workshops Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <div className="bg-white/90 backdrop-blur-sm border border-primary/10 rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Select Date
              </h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleSelect}
                className="rounded-md border shadow"
              />
            </div>

            {/* Workshops List */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Available Workshops
              </h2>
              {selectedWorkshops.map((workshop) => (
                <Card key={workshop.id} className="animate-fade-in border-primary/10">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-bold text-primary">
                        {workshop.title}
                      </CardTitle>
                      <Badge variant="outline" className="border-primary/20 text-primary">
                        {workshop.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <CalendarCheck2 className="w-5 h-5 text-primary" />
                        <span className="text-primary/80">{format(workshop.date, "MMMM d, yyyy")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span className="text-primary/80">{workshop.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="text-primary/80">{workshop.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        <span className="text-primary/80">{workshop.capacity}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshops;
