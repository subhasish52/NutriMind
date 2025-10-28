import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Calendar, User, Search } from "lucide-react";

const blogPosts = [
  {
    title: "5 Essential Exercises For Building Muscle",
    category: "Strength Training",
    date: "August 14",
    excerpt: "Discover the most effective exercises for building lean muscle mass and improving overall strength.",
  },
  {
    title: "The Ultimate Guide To A Balanced Diet",
    category: "Nutrition",
    date: "August 10",
    excerpt: "Learn how to create a balanced nutrition plan that supports your fitness goals.",
  },
  {
    title: "The Benefits Of HIIT Training",
    category: "Cardio",
    date: "August 8",
    excerpt: "Explore the science behind High-Intensity Interval Training and its incredible benefits.",
  },
  {
    title: "Home Workouts For Busy People",
    category: "Home Workouts",
    date: "August 5",
    excerpt: "Effective workout routines you can do at home with minimal equipment.",
  },
  {
    title: "How To Always Stay Motivated",
    category: "Motivation",
    date: "August 2",
    excerpt: "Practical tips and strategies to maintain your motivation on your fitness journey.",
  },
  {
    title: "Nutrition For Muscle Recovery",
    category: "Nutrition",
    date: "July 28",
    excerpt: "What to eat before and after workouts for optimal recovery and results.",
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">
              FitMaker <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Stay informed with the latest fitness tips, workout guides, and nutrition advice.
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input placeholder="Search articles..." className="pl-10" />
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary" />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" /> {post.date}
                    </span>
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-1" /> {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="link" className="text-primary p-0">
                    Read More →
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
