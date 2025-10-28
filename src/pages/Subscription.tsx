import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, CreditCard, RefreshCw } from 'lucide-react';

const Subscription = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-center">
            Track & Buy <span className="text-primary">Subscription</span>
          </h1>

          <Card className="bg-card/50 border-primary/20 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Active Subscription</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Current Plan</p>
                  <p className="text-2xl font-bold text-primary">{user?.membershipPlan}</p>
                </div>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <CreditCard className="text-primary" size={32} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-background/50 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="text-primary" size={20} />
                    <p className="text-sm text-muted-foreground">Start Date</p>
                  </div>
                  <p className="text-lg font-semibold">January 1, 2025</p>
                </div>

                <div className="p-4 bg-background/50 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="text-primary" size={20} />
                    <p className="text-sm text-muted-foreground">End Date</p>
                  </div>
                  <p className="text-lg font-semibold">December 31, 2025</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="flex-1 bg-primary hover:bg-primary/90">
                  <RefreshCw className="mr-2" size={20} />
                  Renew Subscription
                </Button>
                <Button variant="outline" className="flex-1 border-primary/50 hover:bg-primary/10">
                  Upgrade Plan
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Subscription History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { date: 'Jan 1, 2025', plan: 'Pro Plan', amount: '$59', status: 'Active' },
                  { date: 'Jan 1, 2024', plan: 'Pro Plan', amount: '$59', status: 'Completed' },
                  { date: 'Jan 1, 2023', plan: 'Beginner Plan', amount: '$29', status: 'Completed' },
                ].map((record, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-primary/20"
                  >
                    <div>
                      <p className="font-semibold">{record.plan}</p>
                      <p className="text-sm text-muted-foreground">{record.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">{record.amount}</p>
                      <p className={`text-sm ${record.status === 'Active' ? 'text-green-500' : 'text-muted-foreground'}`}>
                        {record.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Subscription;
