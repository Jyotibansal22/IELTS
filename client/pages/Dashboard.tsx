import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { 
  BarChart3, 
  TrendingUp, 
  Trophy, 
  Target, 
  Calendar,
  Users,
  Star,
  Award,
  Clock,
  Zap,
  Globe,
  Download,
  Share2
} from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import Layout from "@/components/Layout";

// Mock data for charts
const progressData = [
  { month: "Jan", speaking: 6.0, writing: 5.5, reading: 6.5, listening: 6.0 },
  { month: "Feb", speaking: 6.5, writing: 6.0, reading: 7.0, listening: 6.5 },
  { month: "Mar", speaking: 7.0, writing: 6.5, reading: 7.5, listening: 7.0 },
  { month: "Apr", speaking: 7.5, writing: 7.0, reading: 8.0, listening: 7.5 },
];

const skillsRadarData = [
  { skill: "Pronunciation", score: 7.5, fullMark: 9 },
  { skill: "Fluency", score: 7.0, fullMark: 9 },
  { skill: "Vocabulary", score: 8.0, fullMark: 9 },
  { skill: "Grammar", score: 7.5, fullMark: 9 },
  { skill: "Coherence", score: 7.0, fullMark: 9 },
  { skill: "Task Response", score: 7.5, fullMark: 9 },
];

const practiceTimeData = [
  { day: "Mon", time: 45 },
  { day: "Tue", time: 60 },
  { day: "Wed", time: 30 },
  { day: "Thu", time: 75 },
  { day: "Fri", time: 50 },
  { day: "Sat", time: 90 },
  { day: "Sun", time: 40 },
];

const moduleDistribution = [
  { name: "Speaking", value: 35, color: "hsl(var(--ielts-blue))" },
  { name: "Writing", value: 25, color: "hsl(var(--ielts-teal))" },
  { name: "Reading", value: 25, color: "hsl(var(--ielts-green))" },
  { name: "Listening", value: 15, color: "hsl(var(--ielts-orange))" },
];

const achievements = [
  { title: "First Practice", description: "Completed your first speaking practice", icon: Star, earned: true },
  { title: "Week Warrior", description: "Practiced for 7 consecutive days", icon: Calendar, earned: true },
  { title: "Band 7 Hero", description: "Achieved Band 7 in any module", icon: Award, earned: true },
  { title: "Grammar Master", description: "Perfect grammar score in writing", icon: Trophy, earned: false },
  { title: "Pronunciation Pro", description: "95%+ pronunciation accuracy", icon: Zap, earned: false },
  { title: "Global Learner", description: "Top 10% worldwide", icon: Globe, earned: false },
];

const chartConfig = {
  speaking: {
    label: "Speaking",
    color: "hsl(var(--ielts-blue))",
  },
  writing: {
    label: "Writing", 
    color: "hsl(var(--ielts-teal))",
  },
  reading: {
    label: "Reading",
    color: "hsl(var(--ielts-green))",
  },
  listening: {
    label: "Listening",
    color: "hsl(var(--ielts-orange))",
  },
};

export default function Dashboard() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-ielts-blue/5 to-ielts-teal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Performance Dashboard
              </h1>
              <p className="text-muted-foreground">
                Track your progress and achieve your IELTS goals
              </p>
            </div>
            <div className="flex gap-3 mt-4 sm:mt-0">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button variant="outline">
                <Share2 className="w-4 h-4 mr-2" />
                Share Progress
              </Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Band Score</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-ielts-blue">7.5</div>
                <p className="text-xs text-muted-foreground">
                  <TrendingUp className="w-3 h-3 inline mr-1" />
                  +0.5 from last month
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Target Band Score</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-ielts-teal">8.0</div>
                <div className="mt-2">
                  <Progress value={93.75} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">93.75% achieved</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Practice Hours</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-ielts-green">47.5</div>
                <p className="text-xs text-muted-foreground">
                  This month
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Global Rank</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-ielts-orange">Top 15%</div>
                <p className="text-xs text-muted-foreground">
                  Among 50,000+ learners
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Progress Over Time */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Band Score Progress</CardTitle>
                <CardDescription>Your improvement across all modules over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px]">
                  <LineChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[0, 9]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Line type="monotone" dataKey="speaking" stroke="var(--color-speaking)" strokeWidth={2} />
                    <Line type="monotone" dataKey="writing" stroke="var(--color-writing)" strokeWidth={2} />
                    <Line type="monotone" dataKey="reading" stroke="var(--color-reading)" strokeWidth={2} />
                    <Line type="monotone" dataKey="listening" stroke="var(--color-listening)" strokeWidth={2} />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Skills Radar */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Skills Assessment</CardTitle>
                <CardDescription>Detailed breakdown of your language skills</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{}} className="h-[300px]">
                  <RadarChart data={skillsRadarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="skill" />
                    <PolarRadiusAxis angle={90} domain={[0, 9]} />
                    <Radar
                      name="Current Score"
                      dataKey="score"
                      stroke="hsl(var(--ielts-blue))"
                      fill="hsl(var(--ielts-blue))"
                      fillOpacity={0.1}
                      strokeWidth={2}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </RadarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Practice Time */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Weekly Practice Time</CardTitle>
                <CardDescription>Minutes practiced each day</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{}} className="h-[200px]">
                  <BarChart data={practiceTimeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="time" fill="hsl(var(--ielts-blue))" />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Module Distribution */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Practice Distribution</CardTitle>
                <CardDescription>Time spent per module</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{}} className="h-[200px]">
                  <PieChart>
                    <Pie
                      data={moduleDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {moduleDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Your learning milestones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.slice(0, 4).map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className={`flex items-center space-x-3 p-2 rounded-lg ${achievement.earned ? 'bg-ielts-blue/10' : 'bg-gray-50'}`}>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${achievement.earned ? 'bg-ielts-blue text-white' : 'bg-gray-200 text-gray-400'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium ${achievement.earned ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {achievement.title}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {achievement.description}
                        </p>
                      </div>
                      {achievement.earned && (
                        <Badge variant="secondary" className="bg-ielts-blue/10 text-ielts-blue">
                          Earned
                        </Badge>
                      )}
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Recommendations */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle>AI Recommendations</CardTitle>
              <CardDescription>Personalized suggestions to improve your band score</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-ielts-blue/5 rounded-xl border border-ielts-blue/20">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-ielts-blue rounded-lg flex items-center justify-center mr-3">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Focus on Fluency</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Practice speaking for 15+ minutes daily to improve your fluency score from 7.0 to 7.5</p>
                </div>

                <div className="p-4 bg-ielts-teal/5 rounded-xl border border-ielts-teal/20">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-ielts-teal rounded-lg flex items-center justify-center mr-3">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Writing Structure</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Work on essay organization and coherence to reach your target band 8.0 in writing</p>
                </div>

                <div className="p-4 bg-ielts-green/5 rounded-xl border border-ielts-green/20">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-ielts-green rounded-lg flex items-center justify-center mr-3">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">Time Management</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Practice reading passages under time pressure to improve your reading speed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
