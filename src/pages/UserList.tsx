import { useState } from "react";
import { Eye, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import AddUserModal from "@/components/AddUserModal";
import { toast } from "sonner";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Dave Richards", email: "dave@mail.com" },
    { id: 2, name: "Abhishek Hari", email: "hari@mail.com" },
    { id: 3, name: "Nishta Gupta", email: "nishta@mail.com" },
  ]);

  const handleAddUser = (userData: { name: string; email: string; contact: string }) => {
    const newUser = {
      id: users.length + 1,
      name: userData.name,
      email: userData.email,
    };
    setUsers([...users, newUser]);
    toast.success("User added successfully");
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
    toast.success("User deleted successfully");
  };

  const handleViewUser = (id: number) => {
    navigate(`/user/${id}`);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-normal text-foreground">Users</h1>
        <Button 
          onClick={() => setIsModalOpen(true)}
          className="bg-primary hover:bg-primary/90 text-white"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </div>

      <div className="bg-white rounded-lg border border-border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="text-left py-3 px-6 text-sm font-normal text-muted-foreground">
                Sr. No.
              </th>
              <th className="text-left py-3 px-6 text-sm font-normal text-muted-foreground">
                User name
              </th>
              <th className="text-left py-3 px-6 text-sm font-normal text-muted-foreground">
                E-mail
              </th>
              <th className="text-left py-3 px-6 text-sm font-normal text-muted-foreground">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                <td className="py-4 px-6 text-sm text-foreground">{index + 1}</td>
                <td className="py-4 px-6 text-sm text-foreground">{user.name}</td>
                <td className="py-4 px-6 text-sm text-foreground">{user.email}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleViewUser(user.id)}
                      className="p-1.5 hover:bg-primary/10 rounded-md transition-colors"
                    >
                      <Eye className="h-4 w-4 text-muted-foreground hover:text-primary" />
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="p-1.5 hover:bg-destructive/10 rounded-md transition-colors"
                    >
                      <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AddUserModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onAdd={handleAddUser}
      />
    </div>
  );
};

export default UserList;
