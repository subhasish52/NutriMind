import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import blogNutrition from '@/assets/blog-balanced-diet.jpg';
import blogHIIT from '@/assets/blog-hiit-training.jpg';
import blogMotivation from '@/assets/blog-motivation.jpg';
import blogMuscle from '@/assets/blog-muscle-building.jpg';
import blogHome from '@/assets/blog-home-workouts.jpg';

const BlogDetail = () => {
  const { id } = useParams();

  const blogPosts: Record<string, any> = {
    'mastering-diet': {
      title: 'Mastering Your Diet: A Complete Guide to Balanced Nutrition',
      category: 'Nutrition',
      date: 'Dec 15, 2024',
      author: 'Dr. Sarah Mitchell',
      image: blogNutrition,
      content: `
        <h2>Understanding Nutrition Basics</h2>
        <p>Proper nutrition is the foundation of any successful fitness journey. Whether your goal is to lose weight, build muscle, or simply maintain a healthy lifestyle, understanding the basics of nutrition is crucial.</p>

        <h3>Macronutrients: The Building Blocks</h3>
        <p>Your body needs three primary macronutrients:</p>
        <ul>
          <li><strong>Proteins:</strong> Essential for muscle repair and growth. Aim for 0.8-1g per pound of body weight.</li>
          <li><strong>Carbohydrates:</strong> Your body's primary energy source. Focus on complex carbs from whole grains and vegetables.</li>
          <li><strong>Fats:</strong> Important for hormone production and nutrient absorption. Choose healthy fats from nuts, avocados, and fish.</li>
        </ul>

        <h3>Meal Planning Strategies</h3>
        <p>Creating a sustainable meal plan doesn't have to be complicated. Start by:</p>
        <ol>
          <li>Calculating your daily caloric needs based on your goals</li>
          <li>Distributing macronutrients appropriately</li>
          <li>Planning meals around whole, unprocessed foods</li>
          <li>Preparing meals in advance to stay consistent</li>
        </ol>

        <h3>Hydration Matters</h3>
        <p>Don't forget about water! Proper hydration is crucial for optimal performance and recovery. Aim for at least 8-10 glasses per day, more if you're exercising intensely.</p>

        <h3>Common Nutrition Mistakes</h3>
        <p>Avoid these common pitfalls:</p>
        <ul>
          <li>Severely restricting calories</li>
          <li>Eliminating entire food groups unnecessarily</li>
          <li>Not eating enough protein</li>
          <li>Ignoring micronutrients</li>
        </ul>
      `,
    },
    'hiit-training': {
      title: 'HIIT Training: Maximum Results, Minimum Time',
      category: 'Training',
      date: 'Dec 12, 2024',
      author: 'Coach Michael Chen',
      image: blogHIIT,
      content: `
        <h2>What is HIIT?</h2>
        <p>High-Intensity Interval Training (HIIT) is a workout strategy that alternates between intense bursts of activity and fixed periods of less-intense activity or rest.</p>

        <h3>Benefits of HIIT</h3>
        <ul>
          <li><strong>Time-Efficient:</strong> Get an effective workout in 20-30 minutes</li>
          <li><strong>Burns More Fat:</strong> Increased metabolic rate for hours after exercise</li>
          <li><strong>Improves Cardiovascular Health:</strong> Enhances heart and lung function</li>
          <li><strong>No Equipment Needed:</strong> Can be done anywhere with bodyweight exercises</li>
        </ul>

        <h3>Sample HIIT Workout</h3>
        <p>Try this beginner-friendly HIIT routine:</p>
        <ol>
          <li>Warm-up: 5 minutes of light cardio</li>
          <li>30 seconds high-intensity exercise (burpees, jumping jacks, or sprints)</li>
          <li>90 seconds low-intensity recovery (walking or light jogging)</li>
          <li>Repeat for 15-20 minutes</li>
          <li>Cool down: 5 minutes of stretching</li>
        </ol>

        <h3>Safety Tips</h3>
        <p>While HIIT is effective, it's important to:</p>
        <ul>
          <li>Start gradually if you're new to intense exercise</li>
          <li>Maintain proper form to prevent injuries</li>
          <li>Allow adequate recovery between sessions</li>
          <li>Listen to your body and adjust intensity as needed</li>
        </ul>
      `,
    },
    'staying-motivated': {
      title: 'Staying Motivated: Psychology of Fitness Success',
      category: 'Motivation',
      date: 'Dec 10, 2024',
      author: 'Dr. Emma Williams',
      image: blogMotivation,
      content: `
        <h2>The Psychology of Motivation</h2>
        <p>Staying motivated is often more challenging than the workouts themselves. Understanding the psychology behind motivation can help you maintain consistency.</p>

        <h3>Set SMART Goals</h3>
        <p>Make your goals:</p>
        <ul>
          <li><strong>Specific:</strong> "Lose 10 pounds" instead of "get in shape"</li>
          <li><strong>Measurable:</strong> Track your progress with concrete metrics</li>
          <li><strong>Achievable:</strong> Set realistic targets</li>
          <li><strong>Relevant:</strong> Align with your values and lifestyle</li>
          <li><strong>Time-bound:</strong> Set deadlines to create urgency</li>
        </ul>

        <h3>Build Habits, Not Motivation</h3>
        <p>Motivation fluctuates, but habits are reliable. Create a routine that makes fitness automatic:</p>
        <ol>
          <li>Schedule workouts at the same time each day</li>
          <li>Prepare your gym clothes the night before</li>
          <li>Start with small, manageable commitments</li>
          <li>Use habit stacking (pair exercise with existing habits)</li>
        </ol>

        <h3>Find Your Why</h3>
        <p>Connect your fitness journey to deeper values. Are you training to:</p>
        <ul>
          <li>Have more energy for your children?</li>
          <li>Improve your confidence?</li>
          <li>Prevent health issues?</li>
          <li>Achieve a specific athletic goal?</li>
        </ul>

        <h3>Celebrate Small Wins</h3>
        <p>Acknowledge every step forward, no matter how small. This positive reinforcement builds momentum and keeps you engaged.</p>
      `,
    },
    'muscle-building': {
      title: 'Building Muscle: Science-Based Training Principles',
      category: 'Strength',
      date: 'Dec 8, 2024',
      author: 'Coach Alex Thompson',
      image: blogMuscle,
      content: `
        <h2>The Science of Muscle Growth</h2>
        <p>Building muscle (hypertrophy) is a systematic process that requires understanding key principles of training and recovery.</p>

        <h3>Progressive Overload</h3>
        <p>The foundation of muscle growth is progressively increasing the demands on your muscles. This can be achieved by:</p>
        <ul>
          <li>Increasing weight lifted</li>
          <li>Adding more repetitions</li>
          <li>Increasing training volume</li>
          <li>Improving exercise technique</li>
        </ul>

        <h3>Optimal Training Volume</h3>
        <p>Research suggests 10-20 sets per muscle group per week for optimal growth. This can be distributed across 2-3 sessions per muscle group.</p>

        <h3>The Importance of Recovery</h3>
        <p>Muscles grow during recovery, not during workouts. Ensure you're getting:</p>
        <ul>
          <li>7-9 hours of quality sleep</li>
          <li>Adequate protein (0.8-1g per pound of body weight)</li>
          <li>1-2 rest days per week</li>
          <li>Proper nutrition and hydration</li>
        </ul>

        <h3>Exercise Selection</h3>
        <p>Focus on compound movements that work multiple muscle groups:</p>
        <ol>
          <li>Squats, deadlifts, and lunges for legs</li>
          <li>Bench press, rows, and pull-ups for upper body</li>
          <li>Overhead press for shoulders</li>
          <li>Core exercises for stability</li>
        </ol>

        <h3>Nutrition for Muscle Growth</h3>
        <p>To build muscle effectively, maintain a slight caloric surplus (200-300 calories above maintenance) with adequate protein intake.</p>
      `,
    },
    'home-workouts': {
      title: 'Home Workouts: Train Effectively Without Equipment',
      category: 'Lifestyle',
      date: 'Dec 5, 2024',
      author: 'Trainer Sarah Martinez',
      image: blogHome,
      content: `
        <h2>The Rise of Home Fitness</h2>
        <p>You don't need a gym membership or expensive equipment to get an effective workout. Home training can be just as effective with the right approach.</p>

        <h3>Essential Bodyweight Exercises</h3>
        <p>Master these fundamental movements:</p>
        <ul>
          <li><strong>Push-ups:</strong> Chest, shoulders, triceps</li>
          <li><strong>Squats:</strong> Legs and glutes</li>
          <li><strong>Planks:</strong> Core strength and stability</li>
          <li><strong>Lunges:</strong> Leg strength and balance</li>
          <li><strong>Burpees:</strong> Full-body conditioning</li>
        </ul>

        <h3>Creating a Home Workout Space</h3>
        <p>You don't need much space, but consider:</p>
        <ol>
          <li>A clear area for movement (6x6 feet minimum)</li>
          <li>An exercise mat for comfort</li>
          <li>Optional: resistance bands, dumbbells, or a pull-up bar</li>
          <li>Good ventilation and lighting</li>
        </ol>

        <h3>Sample Full-Body Home Workout</h3>
        <p>Complete 3 rounds of:</p>
        <ul>
          <li>20 push-ups (or modified on knees)</li>
          <li>30 bodyweight squats</li>
          <li>15 burpees</li>
          <li>45-second plank hold</li>
          <li>20 alternating lunges</li>
          <li>Rest 2 minutes between rounds</li>
        </ul>

        <h3>Staying Accountable at Home</h3>
        <p>Working out at home requires discipline. Try these strategies:</p>
        <ul>
          <li>Set a specific workout schedule</li>
          <li>Use fitness apps or online classes</li>
          <li>Create a dedicated workout playlist</li>
          <li>Find an accountability partner</li>
        </ul>
      `,
    },
  };

  const post = id ? blogPosts[id] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <div className="mb-6">
            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

          <div className="flex items-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="prose prose-invert prose-lg max-w-none
            prose-headings:text-foreground prose-headings:font-bold
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
            prose-ul:text-muted-foreground prose-ul:my-6
            prose-ol:text-muted-foreground prose-ol:my-6
            prose-li:my-2
            prose-strong:text-foreground prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 pt-8 border-t border-primary/20">
            <Link to="/blog">
              <Button size="lg" className="w-full md:w-auto">
                Read More Articles
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
