import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Award, Target, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

const Gamify = () => {
  const badges = [
    { name: '7 Day Streak', icon: Flame, color: 'text-orange-500', earned: true },
    { name: 'First Workout', icon: Trophy, color: 'text-yellow-500', earned: true },
    { name: '100 Workouts', icon: Award, color: 'text-blue-500', earned: true },
    { name: 'Goal Crusher', icon: Target, color: 'text-green-500', earned: false },
    { name: '30 Day Streak', icon: Flame, color: 'text-red-500', earned: false },
    { name: 'Master Trainer', icon: Trophy, color: 'text-purple-500', earned: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-center">
            Gamify Your <span className="text-primary">Progress</span>
          </h1>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-card/50 border-primary/20">
              <CardContent className="pt-6 text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="text-primary" size={40} />
                </div>
                <p className="text-4xl font-bold mb-2">1,250</p>
                <p className="text-muted-foreground">Total Points</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20">
              <CardContent className="pt-6 text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flame className="text-primary" size={40} />
                </div>
                <p className="text-4xl font-bold mb-2">7</p>
                <p className="text-muted-foreground">Day Streak</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20">
              <CardContent className="pt-6 text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary" size={40} />
                </div>
                <p className="text-4xl font-bold mb-2">3/6</p>
                <p className="text-muted-foreground">Badges Earned</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/50 border-primary/20 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Your Badges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {badges.map((badge, index) => (
                  <motion.div
                    key={badge.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div
                      className={`p-6 rounded-lg border-2 text-center transition-all ${
                        badge.earned
                          ? 'bg-primary/10 border-primary/50'
                          : 'bg-background/30 border-border/30 opacity-50'
                      }`}
                    >
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 ${
                          badge.earned ? 'bg-primary/20' : 'bg-muted'
                        }`}
                      >
                        <badge.icon className={badge.earned ? badge.color : 'text-muted-foreground'} size={32} />
                      </div>
                      <p className="font-semibold">{badge.name}</p>
                      {!badge.earned && (
                        <p className="text-xs text-muted-foreground mt-1">Locked</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Leaderboard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { rank: 1, name: 'Modi', points: 1250, isYou: true },
                  { rank: 2, name: 'Sarah', points: 1180, isYou: false },
                  { rank: 3, name: 'Mike', points: 1050, isYou: false },
                  { rank: 4, name: 'Emma', points: 980, isYou: false },
                  { rank: 5, name: 'John', points: 920, isYou: false },
                ].map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center justify-between p-4 rounded-lg ${
                      user.isYou ? 'bg-primary/20 border-2 border-primary' : 'bg-background/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                          user.rank === 1
                            ? 'bg-yellow-500 text-black'
                            : user.rank === 2
                            ? 'bg-gray-400 text-black'
                            : user.rank === 3
                            ? 'bg-amber-600 text-black'
                            : 'bg-muted text-foreground'
                        }`}
                      >
                        {user.rank}
                      </div>
                      <p className="font-semibold">
                        {user.name} {user.isYou && '(You)'}
                      </p>
                    </div>
                    <p className="text-primary font-bold">{user.points} pts</p>
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

export default Gamify;
