import { motion } from "framer-motion";
import { Calendar, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import blogMuscleBuilding from "@/assets/blog-muscle-building.jpg";
import blogBalancedDiet from "@/assets/blog-balanced-diet.jpg";
import blogHiitTraining from "@/assets/blog-hiit-training.jpg";
import blogHomeWorkouts from "@/assets/blog-home-workouts.jpg";
import blogMotivation from "@/assets/blog-motivation.jpg";

const blogPosts = [
  {
    id: "muscle-building",
    title: "5 Essential Exercises For Building Muscle",
    category: "Strength Training",
    date: "August 14",
    author: "Sam Cole",
    image: blogMuscleBuilding,
  },
  {
    id: "mastering-diet",
    title: "The Ultimate Guide To A Balanced Diet",
    category: "Nutrition",
    date: "August 10",
    image: blogBalancedDiet,
  },
  {
    id: "hiit-training",
    title: "The Benefits Of HIIT Training",
    category: "Cardio",
    date: "August 8",
    image: blogHiitTraining,
  },
  {
    id: "home-workouts",
    title: "Home Workouts For Busy People",
    category: "Home Workouts",
    date: "August 5",
    image: blogHomeWorkouts,
  },
  {
    id: "staying-motivated",
    title: "How To Always Stay Motivated",
    category: "Motivation",
    date: "August 2",
    image: blogMotivation,
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-between items-center mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              nutrimind.ai <span className="text-primary">Blog Posts</span>
            </h2>
            <p className="text-muted-foreground">
              Discover Essential Tips To Maximize Your Workout Results And Reach Your Fitness Goals Faster.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-2 bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 group"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" /> {blogPosts[0].date}
                </span>
                <span className="flex items-center">
                  <User className="h-4 w-4 mr-1" /> {blogPosts[0].category}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{blogPosts[0].title}</h3>
              <Link to={`/blog/${blogPosts[0].id}`}>
                <Button variant="link" className="text-primary p-0">
                  Learn More →
                </Button>
              </Link>
            </div>
          </motion.div>

          {blogPosts.slice(1, 5).map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 group"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                  <span className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" /> {post.date}
                  </span>
                  <span className="flex items-center">
                    <User className="h-3 w-3 mr-1" /> {post.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                <Link to={`/blog/${post.id}`}>
                  <Button variant="link" className="text-primary p-0 text-sm">
                    Learn More →
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" size="lg">
            View All →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
