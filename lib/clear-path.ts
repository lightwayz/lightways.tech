export const startingPoints = [
  {
    id: "administration", label: "Repetitive administration", number: "01",
    title: "Give repetitive work a clearer route.",
    summary: "Start with one task that keeps returning. Understand the steps, the exceptions and where a person needs to stay involved.",
    investigate: "Where information is entered twice, what triggers the task and which decisions need human judgement.",
    deliver: "A scoped workflow improvement, using suitable tools or focused software, with an agreed handover.",
    measure: "Time spent completing the task, avoidable errors and the effort needed to handle exceptions.",
    steps: ["Understand the task", "Simplify the steps", "Review the result"],
  },
  {
    id: "enquiries", label: "Scattered customer enquiries", number: "02",
    title: "Make the next customer conversation easier to follow.",
    summary: "Explore how enquiries arrive, who takes responsibility and how the next action becomes clear.",
    investigate: "The channels you use, how requests are recorded and where ownership or follow-ups become unclear.",
    deliver: "A defined enquiry workflow with clear responsibilities, useful status information and human-approved follow-ups where appropriate.",
    measure: "Time to the first response, missed follow-ups and how easily the team can find the current status.",
    steps: ["Capture the request", "Clarify ownership", "Review the next action"],
  },
  {
    id: "tools", label: "Disconnected tools", number: "03",
    title: "Help the tools around your team work together.",
    summary: "Map where information moves between systems. Identify a useful connection before adding another tool.",
    investigate: "Existing software, duplicate records, data access, integration limits and recurring subscription costs.",
    deliver: "An integration or simpler process within the agreed scope, with documented responsibilities and maintenance needs.",
    measure: "Duplicate entry, failed transfers and the time needed to find reliable information.",
    steps: ["Map the systems", "Connect with care", "Check the information"],
  },
  {
    id: "idea", label: "An idea that needs building", number: "04",
    title: "Turn an open question into a focused first build.",
    summary: "Understand the people and the problem. Test the idea before committing to a larger product.",
    investigate: "Who it serves, the essential customer journey, practical constraints and the riskiest assumptions.",
    deliver: "A prototype, purposeful website or focused application, chosen and scoped during discovery.",
    measure: "Whether intended users can complete the core task and what their feedback tells us to improve next.",
    steps: ["Understand the need", "Test a focused idea", "Learn from use"],
  },
] as const;

export function startingPointMessage(id: string) {
  const point = startingPoints.find(item => item.id === id);
  if (!point) throw new Error("Unknown starting point.");
  return `I would like to discuss: ${point.label.toLowerCase()}.\n\nOur current situation:\n\nWhat we would like to improve:\n\n`;
}
