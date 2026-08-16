export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export type TopicCategoryId =
  | 'fundamentals'
  | 'networking'
  | 'app-architecture'
  | 'databases'
  | 'caching'
  | 'distributed-systems'
  | 'security'
  | 'real-world-architectures';

export interface TopicCategory {
  id: TopicCategoryId;
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface TradeOffComparison {
  feature: string;
  optionA: string;
  optionB: string;
  winner?: 'A' | 'B' | 'Tie';
}

export interface TradeOffMatrixData {
  title: string;
  optionAName: string;
  optionBName: string;
  description: string;
  comparisons: TradeOffComparison[];
}

export interface DecisionTreeNode {
  question: string;
  options: {
    condition: string;
    recommendation: string;
    explanation: string;
    badge?: string;
  }[];
}

export interface ArchitectureDiagramData {
  title: string;
  description: string;
  nodes: {
    id: string;
    label: string;
    sublabel?: string;
    type: 'client' | 'dns' | 'cdn' | 'lb' | 'gateway' | 'server' | 'cache' | 'db' | 'nosql' | 'queue' | 'worker' | 'storage';
    x: number;
    y: number;
    latency?: string;
    throughput?: string;
    role: string;
    failureModes?: string[];
  }[];
  edges: {
    from: string;
    to: string;
    label?: string;
    protocol?: string;
  }[];
}

export interface Topic {
  id: string;
  slug: string;
  title: string;
  category: TopicCategoryId;
  categoryName: string;
  difficulty: Difficulty;
  estimatedMinutes: number;
  prerequisites: string[]; // slugs
  summary: string;
  definition: string;
  intuition: string;
  deepDive: string;
  diagramData?: ArchitectureDiagramData;
  tradeOffs?: TradeOffMatrixData;
  decisionTree?: DecisionTreeNode;
  pros: string[];
  cons: string[];
  whenToUse: string[];
  whenNotToUse: string[];
  pitfalls: string[];
  realWorldExamples: {
    company: string;
    useCase: string;
    architectureDetail: string;
  }[];
  interviewQuestions: {
    question: string;
    answerHint: string;
    keyPoints: string[];
  }[];
  relatedTopicSlugs: string[];
  sourceAttribution?: string;
}

export interface RoadmapNode {
  id: string;
  slug: string;
  title: string;
  stage: number;
  stageTitle: string;
  category: TopicCategoryId;
  difficulty: Difficulty;
  prerequisites: string[];
  nextTopics: string[];
  summary: string;
  estimatedMinutes: number;
}

export interface InterviewClarifyingQuestion {
  question: string;
  answer: string;
}

export interface CapacityMetric {
  metric: string;
  formula: string;
  result: string;
  note?: string;
}

export interface ApiEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  desc: string;
  requestBody?: string;
  response: string;
}

export interface DbColumn {
  name: string;
  type: string;
  key?: 'PK' | 'FK' | 'INDEX';
  note?: string;
}

export interface DbTable {
  name: string;
  description: string;
  columns: DbColumn[];
}

export interface InterviewDeepDive {
  title: string;
  challenge: string;
  solutionStrategy: string;
  tradeOffsExplored: string[];
}

export interface BottleneckItem {
  bottleneck: string;
  mitigation: string;
  severity: 'High' | 'Medium' | 'Low';
}

export interface InterviewProblem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  companyTags: string[];
  difficulty: 'Medium' | 'Hard';
  estimatedTime: string;
  overview: string;
  useCases: {
    inScope: string[];
    outOfScope: string[];
  };
  constraintsAndAssumptions: string[];
  clarifyingQuestions: InterviewClarifyingQuestion[];
  capacityEstimations: {
    assumptions: string[];
    calculations: CapacityMetric[];
  };
  highLevelDesign: {
    description: string;
    components: string[];
    diagramData?: ArchitectureDiagramData;
  };
  apiDesign: ApiEndpoint[];
  dataModel: {
    schemaType: string;
    rationale: string;
    tables: DbTable[];
  };
  deepDives: InterviewDeepDive[];
  scalingAndBottlenecks: BottleneckItem[];
  tradeOffs: string[];
  scorecardChecklist: string[];
}

export interface Flashcard {
  id: string;
  category: string;
  deckId: 'all' | 'networking' | 'databases' | 'caching' | 'distributed' | 'numbers' | 'interviews';
  front: string;
  back: string;
  codeSnippet?: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
}

export interface FlashcardReview {
  cardId: string;
  interval: number; // in days
  repetition: number;
  easeFactor: number; // initial 2.5
  dueDate: string; // ISO date string
  lastReviewed: string;
  ratingHistory?: number[];
}

export interface ArchitectureComponentTemplate {
  type: string;
  category: 'compute' | 'database' | 'caching' | 'networking' | 'messaging' | 'storage' | 'observability';
  name: string;
  iconName: string;
  defaultProperties: Record<string, any>;
  color: string;
  description: string;
}

export interface PlacedNode {
  id: string;
  type: string;
  name: string;
  customLabel?: string;
  category: string;
  x: number;
  y: number;
  properties: Record<string, any>;
}

export interface PlacedConnection {
  id: string;
  sourceId: string;
  targetId: string;
  label?: string;
  protocol?: string;
  flowSpeed?: 'normal' | 'fast' | 'slow';
}

export interface ArchitectureArchitecturePreset {
  id: string;
  title: string;
  description: string;
  tags: string[];
  nodes: PlacedNode[];
  connections: PlacedConnection[];
  estimatedLatencyMs: number;
  estimatedThroughputQps: number;
}

export interface ArchitectureValidationIssue {
  type: 'error' | 'warning' | 'info';
  title: string;
  description: string;
  recommendation: string;
  nodeId?: string;
}

export interface CalculatorInputs {
  dau: number;
  requestsPerUser: number;
  readRatio: number;
  writeRatio: number;
  avgRequestSizeKB: number;
  mediaUploadSizeMB: number;
  mediaUploadPercent: number;
  retentionYears: number;
  peakMultiplier: number;
}

export interface CalculatorOutputs {
  totalDailyRequests: number;
  avgQPS: number;
  peakQPS: number;
  readQPS: number;
  writeQPS: number;
  peakReadQPS: number;
  peakWriteQPS: number;
  dailyStorageGB: number;
  monthlyStorageTB: number;
  totalStorageTB: number;
  mediaStorageTBPerYear: number;
  ingressBandwidthMBps: number;
  egressBandwidthMBps: number;
  ingressBandwidthGbps: number;
  egressBandwidthGbps: number;
  cacheMemoryGB: number;
  estimatedAppServers: number;
  estimatedDbInstances: number;
}

export interface SystemNumberItem {
  id: string;
  category: 'latency' | 'powers_of_two' | 'availability' | 'throughput';
  label: string;
  rawMetric: string;
  humanValue: string;
  nsValue?: number; // nanoseconds for log scale comparison
  downtimePerYear?: string;
  description: string;
  analogy?: string;
  icon?: string;
}

export interface UserProgressState {
  completedTopicSlugs: string[];
  inProgressTopicSlugs: string[];
  solvedInterviewSlugs: string[];
  bookmarkedSlugs: string[];
  notes: Record<string, string>;
  flashcardReviews: Record<string, FlashcardReview>;
  streakDays: number;
  lastActiveDate: string;
  activityDates: string[]; // YYYY-MM-DD
  savedArchitectures: ArchitectureArchitecturePreset[];
}
