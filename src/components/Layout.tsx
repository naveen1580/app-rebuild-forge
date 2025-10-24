import { Home, Bell, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="border-2 border-foreground px-3 py-1 font-bold text-sm">
              LOGO
            </div>
          </Link>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate("/")}
              className="p-2 hover:bg-accent rounded-md transition-colors"
            >
              <Home className="h-5 w-5 text-foreground" />
            </button>
            <button className="p-2 hover:bg-accent rounded-md transition-colors">
              <Bell className="h-5 w-5 text-foreground" />
            </button>
            <button className="p-2 hover:bg-primary/10 rounded-md transition-colors">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="h-5 w-5 text-primary" />
              </div>
            </button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
