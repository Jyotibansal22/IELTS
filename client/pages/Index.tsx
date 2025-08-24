import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mic, 
  PenTool, 
  Headphones, 
  BookOpen, 
  BarChart3, 
  Brain,
  ArrowRight,
  Star,
  Users,
  Award,
  Zap,
  Globe,
  Sparkles
} from "lucide-react";
import Layout from "@/components/Layout";

const modules = [
  {
    id: "speaking",
    title: "Speaking Module",
    icon: Mic,
    description: "AI-powered speaking practice with pronunciation feedback and band score prediction",
    features: ["Pronunciation Feedback", "Fluency Analysis", "Accent Adaptation AI", "Speech Twin Technology"],
    color: "from-ielts-navy to-ielts-blue",
    path: "/speaking"
  },
  {
    id: "writing",
    title: "Writing Module",
    icon: PenTool,
    description: "Comprehensive writing evaluation for Task 1 and Task 2 with visual feedback",
    features: ["Grammar & Vocabulary Check", "Visual Essay Feedback", "Smart Vocabulary Booster", "Band Score Breakdown"],
    color: "from-ielts-green to-emerald-500",
    path: "/writing"
  },
  {
    id: "listening",
    title: "Listening Module", 
    icon: Headphones,
    description: "IELTS-style listening tests with adaptive difficulty and instant evaluation",
    features: ["Practice Tests", "Adaptive Difficulty", "Instant Evaluation", "Score Conversion"],
    color: "from-ielts-amber to-yellow-500",
    path: "/listening"
  },
  {
    id: "reading",
    title: "Reading Module",
    icon: BookOpen,
    description: "Reading comprehension with AI-generated questions from any passage",
    features: ["Multiple Question Types", "AI Question Generator", "Instant Checking", "Difficulty Levels"],
    color: "from-ielts-orange to-orange-500",
    path: "/reading"
  },
  {
    id: "dashboard",
    title: "Performance Dashboard",
    icon: BarChart3,
    description: "Track your progress with detailed analytics and personalized recommendations",
    features: ["Progress Tracking", "Global Benchmarking", "Study Recommendations", "Gamification"],
    color: "from-ielts-blue to-blue-500",
    path: "/dashboard"
  },
  {
    id: "features",
    title: "Smart Features",
    icon: Brain,
    description: "Advanced AI features including multilingual feedback and immersive roleplay",
    features: ["Multilingual Feedback", "Voice & Text Modes", "PDF Reports", "Immersive Roleplay"],
    color: "from-pink-500 to-rose-500",
    path: "/features"
  }
];

const stats = [
  { label: "Active Learners", value: "50K+", icon: Users },
  { label: "Practice Tests", value: "1000+", icon: BookOpen },
  { label: "Band Score Accuracy", value: "95%", icon: Award },
  { label: "Languages Supported", value: "15+", icon: Globe }
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-background via-ielts-navy/5 to-ielts-blue/10">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered IELTS Preparation
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Master IELTS with{" "}
              <span className="bg-gradient-to-r from-ielts-navy to-ielts-blue bg-clip-text text-transparent">
                AI Intelligence
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Advanced AI-powered platform for comprehensive IELTS preparation. Get personalized feedback, 
              real-time analysis, and achieve your target band score with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-ielts-navy to-ielts-blue hover:from-ielts-navy/90 hover:to-ielts-blue/90">
                Start Free Practice <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Demo <Zap className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-ielts-navy to-ielts-blue rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modules Section */}
      <div className="py-24 bg-gradient-to-b from-background to-ielts-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete IELTS Preparation Suite
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Six powerful modules designed to help you excel in every aspect of the IELTS exam
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <Card key={module.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/50 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{module.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {module.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 mb-6">
                      {module.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-muted-foreground">
                          <Star className="w-3 h-3 text-ielts-teal mr-2 fill-current" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full group-hover:bg-gradient-to-r group-hover:from-ielts-blue group-hover:to-ielts-teal transition-all duration-300">
                      <Link to={module.path}>
                        Start Practice <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features Highlight */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose IELTS PREP AI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge AI technology meets proven IELTS methodology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-ielts-navy to-ielts-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Analysis</h3>
              <p className="text-muted-foreground">Advanced algorithms provide real-time feedback on pronunciation, grammar, and coherence</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-ielts-green to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Accurate Band Prediction</h3>
              <p className="text-muted-foreground">95% accuracy in predicting your IELTS band score across all four skills</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-ielts-amber to-ielts-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multilingual Support</h3>
              <p className="text-muted-foreground">Get feedback in your native language for better understanding and faster improvement</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-ielts-navy to-ielts-blue">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Achieve Your Target Band Score?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful IELTS candidates who improved their scores with AI-powered preparation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-ielts-navy hover:bg-gray-50">
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
