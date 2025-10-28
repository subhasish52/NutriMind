import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { User, Dumbbell, Activity, Trophy, ShoppingBag, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <User size={48} className="text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-2">{user?.name}</h1>
            <p className="text-muted-foreground">{user?.email}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Membership Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{user?.membershipPlan}</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Fitness Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {user?.fitnessGoals.map((goal, index) => (
                    <span key={index} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                      {goal}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Link to="/subscription">
              <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all cursor-pointer h-full">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <ShoppingBag className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Track Subscription</h3>
                    <p className="text-sm text-muted-foreground">View and manage your plan</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/health-tracking">
              <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all cursor-pointer h-full">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Activity className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Health Tracking</h3>
                    <p className="text-sm text-muted-foreground">Monitor your progress</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/train-with-ai">
              <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all cursor-pointer h-full">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Dumbbell className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Train With AI</h3>
                    <p className="text-sm text-muted-foreground">AI-guided workouts</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/gamify">
              <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all cursor-pointer h-full">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Trophy className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Gamify Progress</h3>
                    <p className="text-sm text-muted-foreground">Earn rewards & badges</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          <Button 
            onClick={handleLogout}
            className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg"
          >
            <LogOut className="mr-2" />
            Logout
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
