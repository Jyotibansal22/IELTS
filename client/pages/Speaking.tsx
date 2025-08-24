import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Mic, 
  MicOff, 
  Play, 
  Square, 
  Volume2,
  Star,
  Clock,
  TrendingUp,
  Award,
  Brain,
  Zap,
  RotateCcw,
  Waveform,
  Globe,
  Heart,
  Users,
  Target,
  Sparkles,
  BookOpen,
  MessageSquare,
  Copy,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  HeadphonesIcon,
  Activity
} from "lucide-react";
import Layout from "@/components/Layout";

const speakingParts = [
  {
    id: "part1",
    title: "Part 1: Introduction",
    duration: "4-5 minutes",
    description: "General questions about yourself, family, work, studies, and interests",
    questions: [
      "Can you tell me your full name?",
      "Where are you from?",
      "What do you do for work/study?",
      "Do you enjoy your work/studies?",
      "What do you like to do in your free time?"
    ]
  },
  {
    id: "part2", 
    title: "Part 2: Cue Card",
    duration: "3-4 minutes",
    description: "Speak for 1-2 minutes on a given topic after 1 minute preparation",
    topic: "Describe a memorable journey you have taken",
    points: [
      "Where you went",
      "Who you went with", 
      "What you did there",
      "Why it was memorable"
    ]
  },
  {
    id: "part3",
    title: "Part 3: Follow-up Discussion", 
    duration: "4-5 minutes",
    description: "Abstract discussion related to Part 2 topic",
    questions: [
      "How has travel changed in recent years?",
      "What are the benefits of traveling?",
      "Do you think space travel will be common in the future?",
      "How does tourism affect local communities?"
    ]
  }
];

const roleplayScenarios = [
  {
    id: "hotel",
    title: "🏨 Hotel Booking",
    description: "Book a hotel room for your upcoming business trip",
    difficulty: "Intermediate",
    situation: "You need to book a hotel room in London for 3 nights. Discuss your requirements with the receptionist."
  },
  {
    id: "presentation",
    title: "📊 Graph Explanation",
    description: "Explain a complex chart to your colleague",
    difficulty: "Advanced",
    situation: "Present quarterly sales data showing regional performance differences to your team."
  },
  {
    id: "debate",
    title: "🎯 Social Issue Debate",
    description: "Discuss environmental policies in a formal setting",
    difficulty: "Expert",
    situation: "Participate in a panel discussion about renewable energy adoption in developing countries."
  }
];

const accentAnalysis = {
  detectedAccent: "Hindi (North Indian)",
  motherTongueInfluence: 72,
  neutralizationProgress: 68,
  specificIssues: [
    { sound: "/θ/ (th)", severity: "High", example: "thing → ting", improvement: 45 },
    { sound: "/v/ vs /w/", severity: "Medium", example: "very → wery", improvement: 78 },
    { sound: "Word stress", severity: "Medium", example: "comforTAble → COMfortable", improvement: 62 }
  ]
};

const stressAnalysis = {
  confidenceLevel: 74,
  stressLevel: "Medium",
  hesitationCount: 12,
  pauseFrequency: "Above Average",
  recommendations: [
    "Practice deep breathing before complex questions",
    "Use filler phrases naturally (well, you know, I mean)",
    "Slow down speech when discussing abstract topics"
  ]
};

const vocabularyBooster = [
  { original: "very big problem", suggested: "significant concern", level: "Band 8", context: "Academic" },
  { original: "good thing", suggested: "beneficial aspect", level: "Band 7.5", context: "Formal" },
  { original: "a lot of people", suggested: "numerous individuals", level: "Band 8+", context: "Academic" }
];

const feedback = {
  pronunciation: { score: 7.5, issues: ["'th' sounds", "word stress in 'comfortable'"] },
  fluency: { score: 7.0, issues: ["frequent pauses", "some hesitation"] },
  vocabulary: { score: 8.0, strengths: ["good range", "appropriate word choice"] },
  grammar: { score: 7.5, issues: ["subject-verb agreement", "article usage"] },
  overall: 7.5,
  potential: 8.5,
  improvement: "+1 band possible in 3 weeks"
};

const globalBenchmark = {
  percentile: 78,
  totalCandidates: "142,847",
  regionRanking: 12,
  similarProfiles: 1247
};

export default function Speaking() {
  const [selectedPart, setSelectedPart] = useState("part1");
  const [isRecording, setIsRecording] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [activeFeature, setActiveFeature] = useState("practice");
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [waveformData, setWaveformData] = useState(Array(20).fill(0).map(() => Math.random() * 100));
  const intervalRef = useRef(null);

  const currentPart = speakingParts.find(part => part.id === selectedPart);

  useEffect(() => {
    if (isRecording) {
      intervalRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
        setWaveformData(Array(20).fill(0).map(() => Math.random() * 100));
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRecording]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const WaveformVisualization = () => (
    <div className="flex items-end justify-center space-x-1 h-16 bg-gradient-to-t from-ielts-blue/20 to-transparent rounded-lg p-2">
      {waveformData.map((height, index) => (
        <div
          key={index}
          className="bg-gradient-to-t from-ielts-blue to-ielts-teal rounded-sm transition-all duration-300"
          style={{ 
            height: `${Math.max(4, height * 0.6)}%`, 
            width: '4px',
            opacity: isRecording ? 1 : 0.3 
          }}
        />
      ))}
    </div>
  );

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-ielts-blue/5 to-ielts-teal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Enhanced Header */}
          <div className="text-center mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-ielts-blue/20 via-transparent to-ielts-teal/20 rounded-3xl blur-3xl" />
            <div className="relative">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-ielts-blue via-ielts-teal to-ielts-green rounded-3xl flex items-center justify-center shadow-2xl">
                    <Mic className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-ielts-orange to-yellow-400 rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-ielts-blue via-ielts-teal to-ielts-green bg-clip-text text-transparent mb-4">
                AI-Powered Speaking Lab
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Next-generation IELTS speaking practice with accent adaptation, stress analysis, and real-time AI coaching
              </p>
            </div>
          </div>

          {/* Feature Selector */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Button
                variant={activeFeature === "practice" ? "default" : "outline"}
                onClick={() => setActiveFeature("practice")}
                className="flex items-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Practice Mode</span>
              </Button>
              <Button
                variant={activeFeature === "roleplay" ? "default" : "outline"}
                onClick={() => setActiveFeature("roleplay")}
                className="flex items-center space-x-2"
              >
                <Users className="w-4 h-4" />
                <span>Roleplay Scenarios</span>
              </Button>
              <Button
                variant={activeFeature === "accent" ? "default" : "outline"}
                onClick={() => setActiveFeature("accent")}
                className="flex items-center space-x-2"
              >
                <Globe className="w-4 h-4" />
                <span>Accent Lab</span>
              </Button>
              <Button
                variant={activeFeature === "analytics" ? "default" : "outline"}
                onClick={() => setActiveFeature("analytics")}
                className="flex items-center space-x-2"
              >
                <Activity className="w-4 h-4" />
                <span>AI Analytics</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Practice Area */}
            <div className="lg:col-span-2 space-y-6">
              {activeFeature === "practice" && (
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl">{currentPart?.title}</CardTitle>
                        <CardDescription className="flex items-center mt-2">
                          <Clock className="w-4 h-4 mr-2" />
                          {currentPart?.duration}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-gradient-to-r from-ielts-blue to-ielts-teal text-white">
                        <Brain className="w-3 h-3 mr-1" />
                        AI Enhanced
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">{currentPart?.description}</p>

                    {/* Part Selector */}
                    <Tabs value={selectedPart} onValueChange={setSelectedPart}>
                      <TabsList className="grid w-full grid-cols-3">
                        {speakingParts.map((part) => (
                          <TabsTrigger key={part.id} value={part.id} className="text-xs sm:text-sm">
                            {part.title.split(':')[1]}
                          </TabsTrigger>
                        ))}
                      </TabsList>

                      {speakingParts.map((part) => (
                        <TabsContent key={part.id} value={part.id} className="mt-6">
                          {part.id === "part2" ? (
                            <div className="space-y-4">
                              <div className="bg-gradient-to-r from-ielts-blue/10 to-ielts-teal/10 p-6 rounded-xl border border-ielts-blue/20">
                                <h3 className="font-semibold text-lg mb-4">{part.topic}</h3>
                                <div className="space-y-2">
                                  <p className="text-sm text-muted-foreground">You should talk about:</p>
                                  <ul className="space-y-1">
                                    {part.points?.map((point, index) => (
                                      <li key={index} className="flex items-center text-sm">
                                        <Star className="w-3 h-3 text-ielts-teal mr-2 fill-current" />
                                        {point}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-4">
                              <div className="bg-gradient-to-r from-ielts-blue/10 to-ielts-teal/10 p-6 rounded-xl border border-ielts-blue/20">
                                <h3 className="font-semibold mb-4">
                                  Question {currentQuestion + 1} of {part.questions?.length}
                                </h3>
                                <p className="text-lg">{part.questions?.[currentQuestion]}</p>
                              </div>
                              
                              <div className="flex gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                                  disabled={currentQuestion === 0}
                                >
                                  Previous
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => setCurrentQuestion(Math.min((part.questions?.length || 1) - 1, currentQuestion + 1))}
                                  disabled={currentQuestion === (part.questions?.length || 1) - 1}
                                >
                                  Next
                                </Button>
                              </div>
                            </div>
                          )}
                        </TabsContent>
                      ))}
                    </Tabs>

                    {/* Enhanced Recording Controls */}
                    <div className="flex flex-col items-center space-y-6 py-8 bg-gradient-to-b from-transparent to-ielts-blue/5 rounded-xl">
                      <div className="relative">
                        <Button
                          size="lg"
                          className={`w-24 h-24 rounded-full text-white shadow-2xl transition-all duration-300 ${
                            isRecording 
                              ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 animate-pulse scale-110" 
                              : "bg-gradient-to-r from-ielts-blue to-ielts-teal hover:from-ielts-blue/90 hover:to-ielts-teal/90 hover:scale-105"
                          }`}
                          onClick={() => setIsRecording(!isRecording)}
                        >
                          {isRecording ? (
                            <Square className="w-10 h-10" />
                          ) : (
                            <Mic className="w-10 h-10" />
                          )}
                        </Button>
                        {isRecording && (
                          <div className="absolute -inset-4 rounded-full border-4 border-red-300/60 animate-ping" />
                        )}
                      </div>
                      
                      <div className="text-center">
                        <p className="text-lg font-medium">
                          {isRecording ? `Recording... ${formatTime(recordingTime)}` : "Click to start AI-powered recording"}
                        </p>
                        {isRecording && (
                          <p className="text-sm text-muted-foreground mt-1">
                            Real-time accent analysis & stress detection active
                          </p>
                        )}
                      </div>

                      {/* Enhanced Waveform */}
                      <div className="w-full max-w-md">
                        <WaveformVisualization />
                        <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                          <span>Audio Level</span>
                          <span>{isRecording ? "LIVE" : "IDLE"}</span>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button variant="outline" disabled={!isRecording}>
                          <Play className="w-4 h-4 mr-2" />
                          Playback
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={() => setShowFeedback(true)}
                          disabled={isRecording}
                          className="bg-gradient-to-r from-ielts-green/10 to-ielts-teal/10 border-ielts-teal/30"
                        >
                          <Brain className="w-4 h-4 mr-2" />
                          Get AI Analysis
                        </Button>
                        <Button variant="outline" className="bg-gradient-to-r from-ielts-orange/10 to-yellow-400/10 border-ielts-orange/30">
                          <HeadphonesIcon className="w-4 h-4 mr-2" />
                          Speech Twin
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeFeature === "roleplay" && (
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Users className="w-6 h-6 mr-3 text-ielts-blue" />
                      Immersive Roleplay Scenarios
                    </CardTitle>
                    <CardDescription>Practice real-world situations with AI interaction</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {roleplayScenarios.map((scenario) => (
                        <div 
                          key={scenario.id}
                          className="p-4 rounded-xl border-2 border-transparent hover:border-ielts-blue/30 transition-all cursor-pointer bg-gradient-to-r from-ielts-blue/5 to-ielts-teal/5"
                          onClick={() => setSelectedScenario(scenario)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-lg">{scenario.title}</h3>
                            <Badge variant="outline" className={`
                              ${scenario.difficulty === 'Beginner' ? 'border-green-300 text-green-700' : 
                                scenario.difficulty === 'Intermediate' ? 'border-yellow-300 text-yellow-700' : 
                                'border-red-300 text-red-700'}
                            `}>
                              {scenario.difficulty}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{scenario.description}</p>
                          <p className="text-xs bg-white/50 p-2 rounded italic">{scenario.situation}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeFeature === "accent" && (
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Globe className="w-6 h-6 mr-3 text-ielts-blue" />
                      Accent Adaptation Lab
                    </CardTitle>
                    <CardDescription>AI-powered accent neutralization and pronunciation improvement</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Accent Detection */}
                    <div className="bg-gradient-to-r from-ielts-blue/10 to-ielts-teal/10 p-6 rounded-xl">
                      <h3 className="font-semibold mb-4 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-ielts-blue" />
                        Detected Accent Profile
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span>Primary Accent:</span>
                          <Badge variant="secondary" className="bg-ielts-blue/20 text-ielts-blue">
                            {accentAnalysis.detectedAccent}
                          </Badge>
                        </div>
                        <div>
                          <div className="flex justify-between mb-2">
                            <span>Mother-tongue Influence</span>
                            <span className="font-semibold">{accentAnalysis.motherTongueInfluence}%</span>
                          </div>
                          <Progress value={accentAnalysis.motherTongueInfluence} className="h-3" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-2">
                            <span>Neutralization Progress</span>
                            <span className="font-semibold text-ielts-green">{accentAnalysis.neutralizationProgress}%</span>
                          </div>
                          <Progress value={accentAnalysis.neutralizationProgress} className="h-3" />
                        </div>
                      </div>
                    </div>

                    {/* Specific Issues */}
                    <div>
                      <h3 className="font-semibold mb-4 flex items-center">
                        <AlertCircle className="w-5 h-5 mr-2 text-ielts-orange" />
                        Focus Areas for Improvement
                      </h3>
                      <div className="space-y-3">
                        {accentAnalysis.specificIssues.map((issue, index) => (
                          <div key={index} className="p-4 bg-white/50 rounded-lg border">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium">{issue.sound}</span>
                              <Badge variant={issue.severity === 'High' ? 'destructive' : 'secondary'}>
                                {issue.severity}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{issue.example}</p>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs">Progress:</span>
                              <Progress value={issue.improvement} className="h-2 flex-1" />
                              <span className="text-xs font-medium">{issue.improvement}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {activeFeature === "analytics" && (
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Activity className="w-6 h-6 mr-3 text-ielts-blue" />
                      Advanced AI Analytics
                    </CardTitle>
                    <CardDescription>Comprehensive analysis of your speaking performance</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Stress Analysis */}
                    <div className="bg-gradient-to-r from-ielts-purple/10 to-pink-400/10 p-6 rounded-xl">
                      <h3 className="font-semibold mb-4 flex items-center">
                        <Heart className="w-5 h-5 mr-2 text-ielts-purple" />
                        Cognitive Load & Stress Analysis
                      </h3>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-ielts-purple">{stressAnalysis.confidenceLevel}%</div>
                          <div className="text-sm text-muted-foreground">Confidence Level</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-ielts-orange">{stressAnalysis.hesitationCount}</div>
                          <div className="text-sm text-muted-foreground">Hesitations</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm"><strong>Stress Level:</strong> {stressAnalysis.stressLevel}</p>
                        <p className="text-sm"><strong>Pause Frequency:</strong> {stressAnalysis.pauseFrequency}</p>
                      </div>
                    </div>

                    {/* Global Benchmarking */}
                    <div className="bg-gradient-to-r from-ielts-green/10 to-ielts-teal/10 p-6 rounded-xl">
                      <h3 className="font-semibold mb-4 flex items-center">
                        <Globe className="w-5 h-5 mr-2 text-ielts-green" />
                        Global Benchmarking
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-ielts-green">{globalBenchmark.percentile}%</div>
                          <div className="text-sm text-muted-foreground">Global Percentile</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-ielts-blue">#{globalBenchmark.regionRanking}</div>
                          <div className="text-sm text-muted-foreground">Regional Ranking</div>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <p className="text-sm text-center text-muted-foreground">
                        Your performance is better than <strong>{globalBenchmark.percentile}%</strong> of {globalBenchmark.totalCandidates} candidates worldwide
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Enhanced Sidebar */}
            <div className="space-y-6">
              {/* Smart Vocabulary Booster */}
              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Lightbulb className="w-5 h-5 mr-2 text-ielts-orange" />
                    Smart Vocabulary Booster
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {vocabularyBooster.map((item, index) => (
                    <div key={index} className="p-3 bg-white/70 rounded-lg border">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-red-600 line-through">{item.original}</span>
                          <Badge variant="outline" className="text-xs">{item.level}</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-green-600">{item.suggested}</span>
                          <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                            <Copy className="w-3 h-3" />
                          </Button>
                        </div>
                        <Badge variant="secondary" className="text-xs">{item.context}</Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Enhanced Feedback */}
              {showFeedback && (
                <Card className="bg-gradient-to-br from-ielts-blue/10 to-ielts-teal/10 border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <TrendingUp className="w-5 h-5 mr-2 text-ielts-blue" />
                      AI Performance Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Pronunciation</span>
                          <Badge variant="secondary">{feedback.pronunciation.score}/9</Badge>
                        </div>
                        <Progress value={feedback.pronunciation.score * 11.11} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Fluency</span>
                          <Badge variant="secondary">{feedback.fluency.score}/9</Badge>
                        </div>
                        <Progress value={feedback.fluency.score * 11.11} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Vocabulary</span>
                          <Badge variant="secondary">{feedback.vocabulary.score}/9</Badge>
                        </div>
                        <Progress value={feedback.vocabulary.score * 11.11} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Grammar</span>
                          <Badge variant="secondary">{feedback.grammar.score}/9</Badge>
                        </div>
                        <Progress value={feedback.grammar.score * 11.11} className="h-2" />
                      </div>
                    </div>

                    <Separator />

                    {/* Adaptive Band Predictor */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Current Band</span>
                        <div className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-ielts-blue" />
                          <span className="text-xl font-bold text-ielts-blue">{feedback.overall}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Potential Band</span>
                        <div className="flex items-center space-x-2">
                          <Target className="w-4 h-4 text-ielts-green" />
                          <span className="text-xl font-bold text-ielts-green">{feedback.potential}</span>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-ielts-green/20 to-ielts-teal/20 p-3 rounded-lg">
                        <p className="text-sm font-medium text-center">{feedback.improvement}</p>
                      </div>
                    </div>

                    <Button className="w-full" variant="outline">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      View Detailed Report
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* AI Features */}
              <Card className="bg-gradient-to-br from-ielts-purple/10 to-pink-400/10 border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Zap className="w-5 h-5 mr-2 text-ielts-purple" />
                    Next-Level AI Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-ielts-blue rounded-full animate-pulse" />
                      <span className="text-sm">Real-time accent adaptation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-ielts-teal rounded-full animate-pulse" />
                      <span className="text-sm">Cognitive stress monitoring</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-ielts-green rounded-full animate-pulse" />
                      <span className="text-sm">Speech twin technology</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-ielts-orange rounded-full animate-pulse" />
                      <span className="text-sm">Global benchmarking</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-ielts-purple rounded-full animate-pulse" />
                      <span className="text-sm">Immersive roleplay</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Progress */}
              <Card className="bg-gradient-to-br from-ielts-green/10 to-ielts-teal/10 border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-lg">Today's Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Practice Sessions</span>
                        <span>3/5</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Speaking Time</span>
                        <span>12/20 min</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Accuracy Score</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
