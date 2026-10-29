export const serviceExamples = {
  administration: {
    title: "A repeatable reporting task", introduction: "Explore how a recurring task could move from scattered inputs to a reviewable summary.",
    items: ["Source figures", "Summary draft", "Human review"],
    states: [["Awaiting collection", "Not prepared", "Not ready"], ["Sample inputs gathered", "Prepared from sample inputs", "Ready for review"], ["Sample inputs gathered", "Sample reviewed", "Review recorded"]],
    actions: ["Collect sample inputs", "Record a sample review"],
    messages: ["A recurring task is waiting for its inputs.", "The sample summary is ready for a person to check.", "The sample review is recorded. No real information was processed."],
  },
  enquiries: {
    title: "A clearer enquiry handoff", introduction: "Follow a fictional request from arrival to ownership and a reviewed next action.",
    items: ["Sample enquiry DEMO-01", "Responsibility", "Next action"],
    states: [["Received", "Unassigned", "Needs review"], ["In review", "Assigned in this example", "Prepare a follow-up draft"], ["Reviewed", "Responsibility recorded", "Draft ready for human approval"]],
    actions: ["Assign the sample enquiry", "Prepare a sample follow-up"],
    messages: ["A fictional enquiry is waiting for a clear owner.", "Responsibility is clear; a person can decide the next action.", "A sample follow-up is prepared. Nothing has been sent."],
  },
  tools: {
    title: "One reference across two tools", introduction: "See how a shared reference could help a request and its task stay connected.",
    items: ["Request list", "Task list", "Shared reference"],
    states: [["Sample request DEMO-02", "No linked task", "Not connected"], ["Sample request DEMO-02", "Sample task DEMO-02", "Sample records linked"], ["Sample request reviewed", "Sample task updated", "Ready for a person to check"]],
    actions: ["Link the sample records", "Review the sample update"],
    messages: ["Two sample tools begin with separate records.", "The example now shares one reference. No external tool was connected.", "The sample update is ready for review; integration requirements would be scoped with you."],
  },
  idea: {
    title: "An idea becoming a testable journey", introduction: "Explore a small prototype journey before deciding on a larger build.",
    items: ["User need", "Core journey", "Learning"],
    states: [["A task to make easier", "Sketch the first step", "An assumption to test"], ["A task to make easier", "Sample prototype prepared", "Invite feedback"], ["A task to make easier", "Sample journey reviewed", "Identify the next question"]],
    actions: ["Prepare a sample prototype", "Record sample feedback"],
    messages: ["Start with the person and one useful task.", "The example has a focused journey to review, not a finished product.", "Feedback shapes the next decision. This demonstration is not PADI."],
  },
} as const;
