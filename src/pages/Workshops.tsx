
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarCheck2, MapPin, Clock, Users, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newWorkshop, setNewWorkshop] = useState({
    title: "",
    location: "",
    time: "",
    capacity: "",
    type: "",
  });
  const { toast } = useToast();

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

  const handleCreateWorkshop = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) {
      toast({
        title: "Please select a date",
        variant: "destructive",
      });
      return;
    }

    const workshop = {
      id: workshops.length + 1,
      date: date,
      ...newWorkshop,
    };

    workshops.push(workshop);
    setSelectedWorkshops([...workshops]);
    setIsDialogOpen(false);
    setNewWorkshop({
      title: "",
      location: "",
      time: "",
      capacity: "",
      type: "",
    });

    toast({
      title: "Workshop created",
      description: "The new workshop has been added to the calendar.",
    });
  };

  return (
    <div className="min-h-screen pt-16 bg-[#E5DEFF]">
      <section className="py-20 px-4 bg-[#0698d6]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Workshops & Events
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Join our specialized workshops designed to help athletes balance their
            sporting and academic careers.
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm border border-primary/10 rounded-2xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-primary">
                  Select Date
                </h2>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-accent hover:bg-accent/90 text-white">
                      <Plus className="w-4 h-4 mr-2" /> New Event
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-primary">Create New Workshop</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleCreateWorkshop} className="space-y-4">
                      <div>
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          value={newWorkshop.title}
                          onChange={(e) =>
                            setNewWorkshop({ ...newWorkshop, title: e.target.value })
                          }
                          className="border-primary/20 focus:border-accent"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={newWorkshop.location}
                          onChange={(e) =>
                            setNewWorkshop({ ...newWorkshop, location: e.target.value })
                          }
                          className="border-primary/20 focus:border-accent"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">Time</Label>
                        <Input
                          id="time"
                          value={newWorkshop.time}
                          onChange={(e) =>
                            setNewWorkshop({ ...newWorkshop, time: e.target.value })
                          }
                          placeholder="e.g., 10:00 - 16:00"
                          className="border-primary/20 focus:border-accent"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="capacity">Capacity</Label>
                        <Input
                          id="capacity"
                          value={newWorkshop.capacity}
                          onChange={(e) =>
                            setNewWorkshop({ ...newWorkshop, capacity: e.target.value })
                          }
                          placeholder="e.g., 20 participants"
                          className="border-primary/20 focus:border-accent"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="type">Type</Label>
                        <Input
                          id="type"
                          value={newWorkshop.type}
                          onChange={(e) =>
                            setNewWorkshop({ ...newWorkshop, type: e.target.value })
                          }
                          placeholder="e.g., Planning, Skills, Academic"
                          className="border-primary/20 focus:border-accent"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-accent text-white hover:bg-accent/90">
                        Create Workshop
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleSelect}
                className="rounded-md border shadow"
              />
            </div>

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
                        <CalendarCheck2 className="w-5 h-5 text-accent" />
                        <span className="text-primary/80">{format(workshop.date, "MMMM d, yyyy")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-accent" />
                        <span className="text-primary/80">{workshop.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-accent" />
                        <span className="text-primary/80">{workshop.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-accent" />
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
