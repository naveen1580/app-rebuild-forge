import { useState } from "react";
import { useParams } from "react-router-dom";
import { User, Copy, Edit2, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const UserProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("basic");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Profile Header */}
      <div className="bg-white rounded-lg p-8 mb-6">
        <div className="flex items-start gap-6">
          <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <User className="w-16 h-16 text-primary" />
          </div>
          
          <div className="flex-1">
            <h1 className="text-2xl font-semibold text-foreground mb-2">Dave Richards</h1>
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <span>dave@mail.com</span>
              <button onClick={() => copyToClipboard("dave@mail.com")} className="p-1 hover:bg-muted rounded">
                <Copy className="h-4 w-4" />
              </button>
            </div>
            <p className="text-muted-foreground">+91 8332883854</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="bg-white rounded-lg">
        <div className="border-b border-border px-8">
          <TabsList className="bg-transparent h-auto p-0 gap-8">
            <TabsTrigger 
              value="basic" 
              className="relative bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none border-0 px-0 pb-4 pt-4 text-muted-foreground data-[state=active]:text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 data-[state=active]:after:bg-[hsl(var(--orange-indicator))]"
            >
              Basic info
            </TabsTrigger>
            <TabsTrigger 
              value="education" 
              className="relative bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none border-0 px-0 pb-4 pt-4 text-muted-foreground data-[state=active]:text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 data-[state=active]:after:bg-[hsl(var(--orange-indicator))]"
            >
              Education & skills
            </TabsTrigger>
            <TabsTrigger 
              value="experience" 
              className="relative bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none border-0 px-0 pb-4 pt-4 text-muted-foreground data-[state=active]:text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 data-[state=active]:after:bg-[hsl(var(--orange-indicator))]"
            >
              Experience
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="p-8">
          <TabsContent value="basic" className="mt-0">
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-foreground">Basic Details</h2>
                <button className="p-2 hover:bg-muted rounded-md">
                  <Edit2 className="h-4 w-4 text-primary" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label className="text-sm text-muted-foreground font-normal mb-2 block">First name</Label>
                  <Input placeholder="e.g. John" className="bg-input border-0" />
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground font-normal mb-2 block">Last name</Label>
                  <Input placeholder="e.g. Doe" className="bg-input border-0" />
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground font-normal mb-2 block">Email ID</Label>
                  <Input placeholder="e.g. myedutech@mail.com" className="bg-input border-0" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label className="text-sm text-muted-foreground font-normal mb-2 block">Date of Birth</Label>
                  <Select>
                    <SelectTrigger className="bg-input border-0">
                      <SelectValue placeholder="YYYY" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2000">2000</SelectItem>
                      <SelectItem value="1999">1999</SelectItem>
                      <SelectItem value="1998">1998</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground font-normal mb-2 block">Gender</Label>
                  <Select>
                    <SelectTrigger className="bg-input border-0">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground font-normal mb-2 block">Alternate Phone no.</Label>
                  <div className="flex gap-2">
                    <div className="w-12 h-10 bg-input rounded-md flex items-center justify-center text-xl">
                      🇮🇳
                    </div>
                    <Input placeholder="e.g. 9876543210" className="bg-input border-0 flex-1" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <Label className="text-sm text-muted-foreground font-normal mb-2 block">Address</Label>
                  <Textarea placeholder="Enter here" className="bg-input border-0 min-h-[100px]" />
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground font-normal mb-2 block">Pincode</Label>
                  <Input placeholder="Enter here" className="bg-input border-0" />
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground font-normal mb-2 block">Domicile state</Label>
                  <Select>
                    <SelectTrigger className="bg-input border-0">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label className="text-sm text-muted-foreground font-normal mb-2 block">Domicile country</Label>
                  <Select>
                    <SelectTrigger className="bg-input border-0">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="usa">USA</SelectItem>
                      <SelectItem value="uk">UK</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="education" className="mt-0">
            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-foreground">Education Details</h2>
                  <button className="p-2 hover:bg-muted rounded-md">
                    <Edit2 className="h-4 w-4 text-primary" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="text-sm text-muted-foreground font-normal mb-2 block">School / College</Label>
                    <Input placeholder="e.g. Lincoln College" className="bg-input border-0" />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label className="text-sm text-muted-foreground font-normal mb-2 block">Highest degree or equivalent</Label>
                      <Input placeholder="e.g. Bachelors in Technology" className="bg-input border-0" />
                    </div>
                    <div>
                      <Label className="text-sm text-muted-foreground font-normal mb-2 block">Year of completion</Label>
                      <Select>
                        <SelectTrigger className="bg-input border-0">
                          <SelectValue placeholder="YYYY" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2024">2024</SelectItem>
                          <SelectItem value="2023">2023</SelectItem>
                          <SelectItem value="2022">2022</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-sm text-muted-foreground font-normal mb-2 block">Grade</Label>
                      <Input placeholder="Enter here" className="bg-input border-0" />
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm text-muted-foreground font-normal mb-2 block">Course</Label>
                    <Input placeholder="e.g. Computer science engineering" className="bg-input border-0" />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-foreground">Skills & Projects</h2>
                  <button className="p-2 hover:bg-muted rounded-md">
                    <Edit2 className="h-4 w-4 text-primary" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm text-muted-foreground font-normal mb-2 block">Skills</Label>
                    <Textarea placeholder="Enter here" className="bg-input border-0 min-h-[120px]" />
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground font-normal mb-2 block">Projects</Label>
                    <Textarea placeholder="Enter here" className="bg-input border-0 min-h-[120px]" />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="experience" className="mt-0">
            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-foreground">Work Experience</h2>
                  <button className="p-2 hover:bg-muted rounded-md">
                    <Edit2 className="h-4 w-4 text-primary" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm text-muted-foreground font-normal mb-2 block">Domain</Label>
                      <Input placeholder="e.g. Technology" className="bg-input border-0" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm text-muted-foreground font-normal mb-2 block">Sub-domain</Label>
                        <Input placeholder="e.g. MERN Stack" className="bg-input border-0" />
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground font-normal mb-2 block">Experience</Label>
                        <Select>
                          <SelectTrigger className="bg-input border-0">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-1">0-1 years</SelectItem>
                            <SelectItem value="1-3">1-3 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="5+">5+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm text-muted-foreground font-normal mb-2 block">Domain</Label>
                      <Input placeholder="e.g. Technology" className="bg-input border-0" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm text-muted-foreground font-normal mb-2 block">Sub-domain</Label>
                        <Input placeholder="e.g. MERN Stack" className="bg-input border-0" />
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground font-normal mb-2 block">Experience</Label>
                        <Select>
                          <SelectTrigger className="bg-input border-0">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-1">0-1 years</SelectItem>
                            <SelectItem value="1-3">1-3 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="5+">5+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-foreground">LinkedIn</h2>
                    <button className="p-2 hover:bg-muted rounded-md">
                      <Edit2 className="h-4 w-4 text-primary" />
                    </button>
                  </div>
                  <Input placeholder="linkedin.com/in/linkdn" className="bg-input border-0" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-foreground">Resume</h2>
                    <button className="p-2 hover:bg-muted rounded-md">
                      <Edit2 className="h-4 w-4 text-primary" />
                    </button>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-input rounded-md">
                    <FileText className="h-5 w-5 text-primary" />
                    <span className="text-sm flex-1">myresume.pdf</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default UserProfile;
