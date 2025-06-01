// Mock data based on the CSV file
export const problems = [
  {
    id: 1,
    difficulty: "EASY",
    title: "Two Sum",
    frequency: 100.0,
    acceptanceRate: 0.5554645076851493,
    link: "https://leetcode.com/problems/two-sum",
    topics: ["Array", "Hash Table"],
    companies: ["Amazon", "Google", "Facebook", "Microsoft"]
  },
  {
    id: 2,
    difficulty: "MEDIUM",
    title: "LRU Cache",
    frequency: 86.8,
    acceptanceRate: 0.4493675572190347,
    link: "https://leetcode.com/problems/lru-cache",
    topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"],
    companies: ["Amazon", "Microsoft", "Facebook"]
  },
  {
    id: 3,
    difficulty: "MEDIUM",
    title: "Reorganize String",
    frequency: 86.8,
    acceptanceRate: 0.5606363658538208,
    link: "https://leetcode.com/problems/reorganize-string",
    topics: ["Hash Table", "String", "Greedy", "Sorting", "Heap"],
    companies: ["Amazon", "Google"]
  },
  {
    id: 4,
    difficulty: "HARD",
    title: "Trapping Rain Water",
    frequency: 80.6,
    acceptanceRate: 0.6481172890341239,
    link: "https://leetcode.com/problems/trapping-rain-water",
    topics: ["Array", "Two Pointers", "Dynamic Programming"],
    companies: ["Amazon", "Google", "Microsoft"]
  },
  {
    id: 5,
    difficulty: "MEDIUM",
    title: "Number of Islands",
    frequency: 78.7,
    acceptanceRate: 0.6206899691824863,
    link: "https://leetcode.com/problems/number-of-islands",
    topics: ["Array", "Depth-First Search", "Breadth-First Search"],
    companies: ["Amazon", "Google", "Facebook"]
  },
  {
    id: 6,
    difficulty: "EASY",
    title: "Valid Parentheses",
    frequency: 76.7,
    acceptanceRate: 0.4215998092797934,
    link: "https://leetcode.com/problems/valid-parentheses",
    topics: ["String", "Stack"],
    companies: ["Amazon", "Microsoft", "Facebook"]
  },
  {
    id: 7,
    difficulty: "MEDIUM",
    title: "Maximum Subarray",
    frequency: 74.5,
    acceptanceRate: 0.5197311951566328,
    link: "https://leetcode.com/problems/maximum-subarray",
    topics: ["Array", "Divide and Conquer", "Dynamic Programming"],
    companies: ["Amazon", "Microsoft"]
  },
  {
    id: 8,
    difficulty: "MEDIUM",
    title: "Copy List with Random Pointer",
    frequency: 74.5,
    acceptanceRate: 0.6016374986045121,
    link: "https://leetcode.com/problems/copy-list-with-random-pointer",
    topics: ["Hash Table", "Linked List"],
    companies: ["Amazon", "Microsoft", "Facebook"]
  },
  {
    id: 9,
    difficulty: "EASY",
    title: "Best Time to Buy and Sell Stock",
    frequency: 74.5,
    acceptanceRate: 0.5506565802267313,
    link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock",
    topics: ["Array", "Dynamic Programming"],
    companies: ["Amazon", "Facebook", "Microsoft"]
  },
  {
    id: 10,
    difficulty: "HARD",
    title: "Maximum Profit in Job Scheduling",
    frequency: 72.1,
    acceptanceRate: 0.5438722159974303,
    link: "https://leetcode.com/problems/maximum-profit-in-job-scheduling",
    topics: ["Array", "Binary Search", "Dynamic Programming"],
    companies: ["Amazon", "Google"]
  },
  {
    id: 11,
    difficulty: "EASY",
    title: "Merge Sorted Array",
    frequency: 72.1,
    acceptanceRate: 0.5267878111175235,
    link: "https://leetcode.com/problems/merge-sorted-array",
    topics: ["Array", "Two Pointers", "Sorting"],
    companies: ["Amazon", "Microsoft", "Facebook"]
  }
];

// Unique topics from all problems
export const allTopics = [...new Set(problems.flatMap(problem => problem.topics))].sort();

// Unique companies from all problems
export const allCompanies = [...new Set(problems.flatMap(problem => problem.companies))].sort();

// Difficulties
export const difficulties = ["EASY", "MEDIUM", "HARD"];