import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { z } from "zod";

const userSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  contact: z.string().trim().min(1, "Contact is required").max(20),
});

interface AddUserModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (user: { name: string; email: string; contact: string }) => void;
}

const AddUserModal = ({ open, onOpenChange, onAdd }: AddUserModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = () => {
    try {
      const validated = userSchema.parse(formData);
      onAdd({
        name: validated.name,
        email: validated.email,
        contact: validated.contact
      });
      setFormData({ name: "", email: "", contact: "" });
      setErrors({});
      onOpenChange(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-lg font-normal text-foreground">Add User</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div>
            <Label htmlFor="name" className="text-sm text-muted-foreground font-normal mb-2 block">
              Name of the user
            </Label>
            <Input
              id="name"
              placeholder="Type here"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-input border-0 focus-visible:ring-1 focus-visible:ring-primary"
            />
            {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email" className="text-sm text-muted-foreground font-normal mb-2 block">
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Type here"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-input border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <Label htmlFor="contact" className="text-sm text-muted-foreground font-normal mb-2 block">
                Contact
              </Label>
              <Input
                id="contact"
                placeholder="Type here"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="bg-input border-0 focus-visible:ring-1 focus-visible:ring-primary"
              />
              {errors.contact && <p className="text-sm text-destructive mt-1">{errors.contact}</p>}
            </div>
          </div>
        </div>
        
        <div className="flex justify-end gap-3 pt-4">
          <Button
            variant="ghost"
            onClick={() => onOpenChange(false)}
            className="text-muted-foreground hover:text-foreground"
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit} className="bg-primary hover:bg-primary/90">
            Add
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserModal;
