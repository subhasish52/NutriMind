import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import TrainWithUs from "./pages/TrainWithUs";
import TrainWithAI from "./pages/TrainWithAI";
import FindGym from "./pages/FindGym";
import BlogPage from "./pages/BlogPage";
import Contact from "./pages/Contact";
import GymPackages from "./pages/GymPackages";
import OurServices from "./pages/OurServices";
import Subscription from "./pages/Subscription";
import HealthTracking from "./pages/HealthTracking";
import Gamify from "./pages/Gamify";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <AuthProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/train-with-us" element={<TrainWithUs />} />
              <Route path="/train-with-ai" element={<ProtectedRoute><TrainWithAI /></ProtectedRoute>} />
              <Route path="/find-gym" element={<FindGym />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gym-packages" element={<GymPackages />} />
              <Route path="/our-services" element={<ProtectedRoute><OurServices /></ProtectedRoute>} />
              <Route path="/subscription" element={<ProtectedRoute><Subscription /></ProtectedRoute>} />
              <Route path="/health-tracking" element={<ProtectedRoute><HealthTracking /></ProtectedRoute>} />
              <Route path="/gamify" element={<ProtectedRoute><Gamify /></ProtectedRoute>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
