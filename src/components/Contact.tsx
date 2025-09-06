import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Globe, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-academic-gray-light">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I welcome opportunities to discuss research collaborations, speaking engagements, 
            and academic positions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-card-academic border-0">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-foreground">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-academic-blue-light rounded-lg">
                    <Mail className="w-5 h-5 text-academic-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">your.email@university.edu</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-academic-blue-light rounded-lg">
                    <Phone className="w-5 h-5 text-academic-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-academic-blue-light rounded-lg">
                    <MapPin className="w-5 h-5 text-academic-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Office</p>
                    <p className="font-medium text-foreground">Business School, Room 302</p>
                    <p className="text-sm text-muted-foreground">[University Name]</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-academic-blue-light rounded-lg">
                    <Globe className="w-5 h-5 text-academic-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">SSRN Profile</p>
                    <p className="font-medium text-academic-blue hover:text-academic-blue-dark cursor-pointer">
                      View Publications
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-card-academic border-0">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-foreground">
                  Academic Profiles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="border-academic-blue text-academic-blue hover:bg-academic-blue-light">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-academic-blue text-academic-blue hover:bg-academic-blue-light">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-academic-blue text-academic-blue hover:bg-academic-blue-light">
                    <Globe className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card-academic border-0">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-foreground">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input 
                        placeholder="Your full name"
                        className="border-border focus:ring-academic-blue focus:border-academic-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input 
                        type="email"
                        placeholder="your.email@example.com"
                        className="border-border focus:ring-academic-blue focus:border-academic-blue"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Institution
                    </label>
                    <Input 
                      placeholder="Your university or organization"
                      className="border-border focus:ring-academic-blue focus:border-academic-blue"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input 
                      placeholder="Research collaboration, speaking opportunity, etc."
                      className="border-border focus:ring-academic-blue focus:border-academic-blue"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      rows={6}
                      placeholder="Please describe your inquiry in detail..."
                      className="border-border focus:ring-academic-blue focus:border-academic-blue"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-academic hover:bg-academic-blue-dark text-white shadow-elegant"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;