import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, CreditCard, RefreshCw, Check } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

const plans = [
  {
    name: "PRO PLAN",
    price: "₹999",
    period: "/MNTH",
    features: [
      "Access To All Exercise Videos",
      "Progress Tracking",
      "Supportive Online Community",
      "Advanced, Personalized Workout Plans",
      "Comprehensive Nutrition Coaching",
      "Weekly Check-Ins With Trainer",
      "Body Composition Analysis",
    ],
  },
  {
    name: "CUSTOM PLAN",
    price: "₹1499",
    period: "/MNTH",
    features: [
      "All Pro Plan Features",
      "Fully Customized Workout & Nutrition",
      "Priority Customer Support",
      "Exclusive Gear Discounts",
    ],
  },
  {
    name: "BEGINNER PLAN",
    price: "₹499",
    period: "/MNTH",
    features: [
      "Access To Exercise Videos",
      "Progress Tracking",
      "Community Support",
      "Personalized Workout Plans",
      "Basic Nutrition Guidance",
    ],
  },
];

const Subscription = () => {
  const { user } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-center">
            Track & Buy <span className="text-primary">Subscription</span>
          </h1>

          <Tabs defaultValue="track" className="w-full">

            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="track">Track Subscription</TabsTrigger>
              <TabsTrigger value="buy">Buy Subscription</TabsTrigger>
            </TabsList>

            <TabsContent value="track" className="space-y-8">
              <Card className="bg-card/50 border-primary/20">
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
                      { date: 'Jan 1, 2025', plan: 'Pro Plan', amount: '₹999', status: 'Active' },
                      { date: 'Jan 1, 2024', plan: 'Pro Plan', amount: '₹999', status: 'Completed' },
                      { date: 'Jan 1, 2023', plan: 'Beginner Plan', amount: '₹499', status: 'Completed' },
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
            </TabsContent>

            <TabsContent value="buy" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map((plan, index) => (
                  <Card
                    key={index}
                    className={`bg-card/50 border-2 transition-all cursor-pointer ${
                      selectedPlan === plan.name
                        ? 'border-primary shadow-lg shadow-primary/20'
                        : 'border-primary/20 hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedPlan(plan.name)}
                  >
                    <CardHeader>
                      <CardTitle className="text-2xl text-center">{plan.name}</CardTitle>
                      <div className="text-center">
                        <div className="text-4xl font-bold">
                          {plan.price}
                          <span className="text-lg text-muted-foreground">{plan.period}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="w-full mt-6"
                        variant={selectedPlan === plan.name ? 'default' : 'outline'}
                      >
                        {selectedPlan === plan.name ? 'Selected' : 'Select Plan'}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {selectedPlan && (
                <Card className="bg-card/50 border-primary/20">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-4">Complete Your Purchase</h3>
                      <p className="text-muted-foreground mb-6">
                        You have selected: <span className="text-primary font-semibold">{selectedPlan}</span>
                      </p>
                      <Button size="lg" className="bg-primary hover:bg-primary/90">
                        Proceed to Payment
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Subscription;
