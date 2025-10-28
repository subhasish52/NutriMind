import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Heart, TrendingUp, Zap } from 'lucide-react';

const HealthTracking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-center">
            Health <span className="text-primary">Tracking</span>
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-card/50 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <Heart className="text-primary" size={32} />
                  <span className="text-3xl font-bold">72</span>
                </div>
                <p className="text-muted-foreground">Heart Rate (bpm)</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <Activity className="text-primary" size={32} />
                  <span className="text-3xl font-bold">8,543</span>
                </div>
                <p className="text-muted-foreground">Steps Today</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <Zap className="text-primary" size={32} />
                  <span className="text-3xl font-bold">420</span>
                </div>
                <p className="text-muted-foreground">Calories Burned</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="text-primary" size={32} />
                  <span className="text-3xl font-bold">85%</span>
                </div>
                <p className="text-muted-foreground">Weekly Goal</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/50 border-primary/20 mb-8">
            <CardHeader>
              <CardTitle>Weekly Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-between gap-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                  const height = Math.random() * 100 + 50;
                  return (
                    <div key={day} className="flex-1 flex flex-col items-center gap-2">
                      <div 
                        className="w-full bg-primary/20 hover:bg-primary/40 transition-colors rounded-t-lg"
                        style={{ height: `${height}%` }}
                      ></div>
                      <span className="text-sm text-muted-foreground">{day}</span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle>Recent Workouts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Chest & Triceps', duration: '45 min', calories: 350 },
                    { name: 'Leg Day', duration: '60 min', calories: 420 },
                    { name: 'Cardio HIIT', duration: '30 min', calories: 280 },
                  ].map((workout, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                      <div>
                        <p className="font-semibold">{workout.name}</p>
                        <p className="text-sm text-muted-foreground">{workout.duration}</p>
                      </div>
                      <p className="text-primary font-bold">{workout.calories} cal</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle>Body Measurements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { label: 'Weight', value: '75 kg', change: '-2 kg' },
                    { label: 'Body Fat', value: '18%', change: '-3%' },
                    { label: 'Muscle Mass', value: '62 kg', change: '+1.5 kg' },
                  ].map((measurement, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                      <p className="font-semibold">{measurement.label}</p>
                      <div className="text-right">
                        <p className="font-bold">{measurement.value}</p>
                        <p className="text-sm text-green-500">{measurement.change}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HealthTracking;
