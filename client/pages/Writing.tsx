import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { 
  PenTool, 
  Clock, 
  Target, 
  Award,
  Brain,
  Lightbulb,
  CheckCircle,
  AlertCircle,
  BookOpen,
  TrendingUp,
  Copy,
  RotateCcw,
  FileText,
  Sparkles,
  MessageSquare,
  Palette,
  Eye,
  Save,
  Send
} from "lucide-react";
import Layout from "@/components/Layout";

const writingTasks = [
  {
    id: "task1",
    title: "Task 1: Academic Report",
    type: "Academic",
    duration: "20 minutes",
    wordCount: "150+ words",
    description: "Describe, summarize or explain information in a graph, chart, table or diagram",
    prompt: `The chart below shows the percentage of households in owned and rented accommodation in England and Wales between 1918 and 2011.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`,
    sampleChart: "📊 [Household Accommodation Chart 1918-2011]"
  },
  {
    id: "task2",
    title: "Task 2: Essay Writing",
    type: "Academic", 
    duration: "40 minutes",
    wordCount: "250+ words",
    description: "Write an essay in response to a point of view, argument or problem",
    prompt: `Some people believe that universities should focus on providing academic skills, while others think that universities should also teach students practical life skills.

Discuss both views and give your own opinion.

Write at least 250 words.`
  }
];

const sampleEssay = `In today's competitive world, there is an ongoing debate about whether universities should focus solely on academic skills or also incorporate practical life skills into their curriculum. While both approaches have their merits, I believe that a balanced combination of academic and practical skills is essential for students' overall development.

Those who advocate for academic-focused education argue that universities are primarily institutions of higher learning designed to advance knowledge in specific fields. They contend that academic skills such as critical thinking, research methodology, and theoretical understanding form the foundation of intellectual growth. For instance, a student studying physics needs to master complex mathematical concepts and scientific principles to contribute meaningfully to the field. Furthermore, academic skills are transferable across disciplines and provide students with the analytical tools necessary for lifelong learning.

On the other hand, proponents of practical life skills education emphasize that universities should prepare students for real-world challenges beyond their academic specialization. They argue that skills like financial literacy, communication, time management, and emotional intelligence are crucial for personal and professional success. A recent graduate might excel academically but struggle with basic life tasks such as budgeting, networking, or conflict resolution. These practical skills often determine career advancement and personal well-being more than academic achievements alone.

In my opinion, universities should adopt an integrated approach that combines both academic rigor and practical skill development. Modern employers increasingly value candidates who can demonstrate not only subject expertise but also soft skills and adaptability. Educational institutions could achieve this balance by incorporating workshops, internships, and project-based learning into their academic programs. For example, business students could participate in real company consulting projects, while science students could engage in community outreach programs that require communication and leadership skills.

In conclusion, while academic skills remain fundamental to university education, the inclusion of practical life skills is equally important in preparing students for the complexities of modern life. Universities that successfully integrate both approaches will produce graduates who are not only knowledgeable but also capable of thriving in diverse environments.`;

const colorCodes = {
  grammar: { color: "bg-red-200 border-red-400", label: "Grammar Error", textColor: "text-red-700" },
  vocabulary: { color: "bg-yellow-200 border-yellow-400", label: "Vocabulary Enhancement", textColor: "text-yellow-700" },
  cohesion: { color: "bg-blue-200 border-blue-400", label: "Cohesion & Structure", textColor: "text-blue-700" },
  accuracy: { color: "bg-green-200 border-green-400", label: "Strong Point", textColor: "text-green-700" }
};

const feedback = {
  overall: 7.5,
  taskAchievement: 8.0,
  coherenceCohesion: 7.0,
  lexicalResource: 7.5,
  grammaticalRange: 7.5,
  wordCount: 312,
  timeSpent: "35 minutes",
  improvements: [
    {
      type: "grammar",
      text: "those who advocate",
      suggestion: "those who advocate for",
      explanation: "Missing preposition 'for' after 'advocate'"
    },
    {
      type: "vocabulary", 
      text: "very important",
      suggestion: "crucial/essential/vital",
      explanation: "Use more sophisticated vocabulary for higher band scores"
    },
    {
      type: "cohesion",
      text: "Furthermore, academic skills",
      suggestion: "Add transitional phrase at paragraph start",
      explanation: "Improve paragraph linking for better coherence"
    }
  ]
};

const vocabularyBooster = [
  { original: "very important", suggested: "crucial", level: "Band 8", context: "Academic" },
  { original: "good idea", suggested: "viable proposition", level: "Band 7.5", context: "Formal" },
  { original: "many people", suggested: "numerous individuals", level: "Band 8+", context: "Academic" },
  { original: "big problem", suggested: "significant challenge", level: "Band 7.5", context: "Formal" }
];

export default function Writing() {
  const [selectedTask, setSelectedTask] = useState("task2");
  const [userEssay, setUserEssay] = useState("");
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [analysisMode, setAnalysisMode] = useState("feedback");
  const [highlightedText, setHighlightedText] = useState("");

  const currentTask = writingTasks.find(task => task.id === selectedTask);

  const highlightText = (text) => {
    // This is a simplified version - in a real app, this would use NLP to identify issues
    const issues = [
      { text: "those who advocate", type: "grammar", start: 112, end: 129 },
      { text: "very important", type: "vocabulary", start: 580, end: 594 },
      { text: "In conclusion", type: "cohesion", start: 1450, end: 1463 },
      { text: "critical thinking", type: "accuracy", start: 285, end: 301 }
    ];

    let highlightedText = text;
    let offset = 0;

    issues.forEach(issue => {
      const before = highlightedText.substring(0, issue.start + offset);
      const highlighted = highlightedText.substring(issue.start + offset, issue.end + offset);
      const after = highlightedText.substring(issue.end + offset);
      
      const highlightClass = colorCodes[issue.type];
      highlightedText = `${before}<span class="px-1 rounded border-b-2 ${highlightClass.color} ${highlightClass.textColor} cursor-pointer" title="${highlightClass.label}">${highlighted}</span>${after}`;
      
      offset += highlightClass.color.length + highlightClass.textColor.length + 100; // Approximate offset for added HTML
    });

    return highlightedText;
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-ielts-teal/5 to-ielts-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-ielts-teal/20 via-transparent to-ielts-green/20 rounded-3xl blur-3xl" />
            <div className="relative">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-ielts-teal via-ielts-green to-emerald-500 rounded-3xl flex items-center justify-center shadow-2xl">
                    <PenTool className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-ielts-orange to-yellow-400 rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-ielts-teal via-ielts-green to-emerald-600 bg-clip-text text-transparent mb-4">
                AI Writing Lab
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Advanced writing analysis with visual feedback, color-coded highlighting, and intelligent vocabulary enhancement
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Writing Area */}
            <div className="lg:col-span-2 space-y-6">
              {/* Task Selection */}
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl">IELTS Writing Tasks</CardTitle>
                  <CardDescription>Choose your writing task and start practicing</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs value={selectedTask} onValueChange={setSelectedTask}>
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      {writingTasks.map((task) => (
                        <TabsTrigger key={task.id} value={task.id} className="text-sm">
                          {task.title}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {writingTasks.map((task) => (
                      <TabsContent key={task.id} value={task.id}>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <Badge variant="outline">{task.type}</Badge>
                              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                <Clock className="w-4 h-4" />
                                {task.duration}
                              </div>
                              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                <FileText className="w-4 h-4" />
                                {task.wordCount}
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-4">{task.description}</p>
                          
                          <div className="bg-gradient-to-r from-ielts-teal/10 to-ielts-green/10 p-6 rounded-xl border border-ielts-teal/20">
                            {task.sampleChart && (
                              <div className="bg-white/70 p-4 rounded-lg mb-4 text-center">
                                <div className="text-6xl mb-2">📊</div>
                                <p className="text-sm text-muted-foreground">{task.sampleChart}</p>
                              </div>
                            )}
                            <div className="whitespace-pre-line text-sm leading-relaxed">
                              {task.prompt}
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>

              {/* Writing Interface */}
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Your Essay</CardTitle>
                      <CardDescription>Write your response below</CardDescription>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant="secondary">
                        {userEssay.split(' ').filter(word => word.length > 0).length} words
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Save className="w-4 h-4 mr-2" />
                        Save Draft
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Textarea
                      placeholder="Start writing your essay here..."
                      value={userEssay}
                      onChange={(e) => setUserEssay(e.target.value)}
                      className="min-h-[400px] text-base leading-relaxed"
                    />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>Time spent: 0:00</span>
                      </div>
                      <div className="flex gap-3">
                        <Button variant="outline">
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                        <Button 
                          onClick={() => setShowAnalysis(true)}
                          className="bg-gradient-to-r from-ielts-teal to-ielts-green hover:from-ielts-teal/90 hover:to-ielts-green/90"
                          disabled={userEssay.length < 50}
                        >
                          <Brain className="w-4 h-4 mr-2" />
                          Get AI Analysis
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Visual Feedback Analysis */}
              {showAnalysis && (
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center text-xl">
                        <Palette className="w-5 h-5 mr-2 text-ielts-teal" />
                        Visual Essay Feedback
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant={analysisMode === "feedback" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setAnalysisMode("feedback")}
                        >
                          Analysis
                        </Button>
                        <Button
                          variant={analysisMode === "highlighted" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setAnalysisMode("highlighted")}
                        >
                          Highlighted Text
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {analysisMode === "highlighted" ? (
                      <div className="space-y-4">
                        {/* Color Legend */}
                        <div className="flex flex-wrap gap-4 p-4 bg-gray-50 rounded-lg">
                          {Object.entries(colorCodes).map(([key, value]) => (
                            <div key={key} className="flex items-center space-x-2">
                              <div className={`w-4 h-4 rounded border-2 ${value.color}`} />
                              <span className="text-sm">{value.label}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Highlighted Sample Text */}
                        <div 
                          className="p-6 bg-white rounded-lg border text-base leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: highlightText(sampleEssay) }}
                        />
                      </div>
                    ) : (
                      <div className="space-y-6">
                        {/* Band Scores */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="text-center p-4 bg-gradient-to-r from-ielts-blue/10 to-ielts-teal/10 rounded-lg">
                            <div className="text-2xl font-bold text-ielts-blue">{feedback.taskAchievement}</div>
                            <div className="text-xs text-muted-foreground">Task Achievement</div>
                          </div>
                          <div className="text-center p-4 bg-gradient-to-r from-ielts-teal/10 to-ielts-green/10 rounded-lg">
                            <div className="text-2xl font-bold text-ielts-teal">{feedback.coherenceCohesion}</div>
                            <div className="text-xs text-muted-foreground">Coherence & Cohesion</div>
                          </div>
                          <div className="text-center p-4 bg-gradient-to-r from-ielts-green/10 to-emerald-400/10 rounded-lg">
                            <div className="text-2xl font-bold text-ielts-green">{feedback.lexicalResource}</div>
                            <div className="text-xs text-muted-foreground">Lexical Resource</div>
                          </div>
                          <div className="text-center p-4 bg-gradient-to-r from-ielts-orange/10 to-yellow-400/10 rounded-lg">
                            <div className="text-2xl font-bold text-ielts-orange">{feedback.grammaticalRange}</div>
                            <div className="text-xs text-muted-foreground">Grammar & Accuracy</div>
                          </div>
                        </div>

                        {/* Overall Score */}
                        <div className="text-center p-6 bg-gradient-to-r from-ielts-blue/20 to-ielts-teal/20 rounded-xl">
                          <div className="flex items-center justify-center space-x-3 mb-2">
                            <Award className="w-6 h-6 text-ielts-blue" />
                            <span className="text-3xl font-bold text-ielts-blue">{feedback.overall}</span>
                          </div>
                          <p className="text-lg font-semibold">Overall Band Score</p>
                          <p className="text-sm text-muted-foreground">Word Count: {feedback.wordCount} | Time: {feedback.timeSpent}</p>
                        </div>

                        {/* Specific Improvements */}
                        <div>
                          <h3 className="font-semibold mb-4 flex items-center">
                            <AlertCircle className="w-5 h-5 mr-2 text-ielts-orange" />
                            Specific Improvements
                          </h3>
                          <div className="space-y-3">
                            {feedback.improvements.map((improvement, index) => {
                              const colorCode = colorCodes[improvement.type];
                              return (
                                <div key={index} className="p-4 bg-white rounded-lg border">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <div className={`w-3 h-3 rounded-full ${colorCode.color.split(' ')[0]}`} />
                                    <Badge variant="outline" className="text-xs">
                                      {colorCode.label}
                                    </Badge>
                                  </div>
                                  <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                      <span className="text-sm text-red-600 line-through">"{improvement.text}"</span>
                                      <span className="text-sm">→</span>
                                      <span className="text-sm text-green-600 font-medium">"{improvement.suggestion}"</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">{improvement.explanation}</p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
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

              {/* Writing Tips */}
              <Card className="bg-gradient-to-br from-ielts-blue/10 to-ielts-teal/10 border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <BookOpen className="w-5 h-5 mr-2 text-ielts-blue" />
                    Writing Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-white/70 rounded-lg">
                    <p className="text-sm font-medium mb-1">Structure</p>
                    <p className="text-xs text-muted-foreground">Use clear introduction, body paragraphs, and conclusion</p>
                  </div>
                  <div className="p-3 bg-white/70 rounded-lg">
                    <p className="text-sm font-medium mb-1">Linking Words</p>
                    <p className="text-xs text-muted-foreground">Use cohesive devices: however, furthermore, consequently</p>
                  </div>
                  <div className="p-3 bg-white/70 rounded-lg">
                    <p className="text-sm font-medium mb-1">Word Count</p>
                    <p className="text-xs text-muted-foreground">Task 1: 150+ words, Task 2: 250+ words</p>
                  </div>
                </CardContent>
              </Card>

              {/* Progress */}
              <Card className="bg-gradient-to-br from-ielts-green/10 to-emerald-400/10 border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-lg">Today's Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Essays Written</span>
                        <span>2/3</span>
                      </div>
                      <Progress value={67} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Writing Time</span>
                        <span>45/60 min</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Improvements Applied</span>
                        <span>8/10</span>
                      </div>
                      <Progress value={80} className="h-2" />
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
