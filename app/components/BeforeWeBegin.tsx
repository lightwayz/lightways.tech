const groups = [
  { title: "Starting and scoping", questions: [
    ["Can we start with one small improvement?", "Yes. We can begin by exploring one workflow, customer journey or focused idea. We agree what a useful first outcome would look like before deciding what to build."],
    ["How are scope, price and timing agreed?", "We discuss your needs and constraints during discovery, then agree the scope, price, milestones and acceptance criteria before implementation. The timeline depends on the work involved. If requirements change, we review the effect on cost and timing with you before proceeding."],
  ] },
  { title: "Information and handover", questions: [
    ["How will access to our information be handled?", "We agree which information and system access the project needs, who needs access and the appropriate hosting arrangements. Those decisions follow the work being scoped and your operational requirements."],
    ["What will we receive at handover?", "Your proposal defines the deliverables, documentation, access instructions and training included in the project. It also sets out relevant ownership and usage arrangements, third-party licences and any ongoing costs, so you understand what you receive and how to run it."],
  ] },
  { title: "Support and the next step", questions: [
    ["What support is available after delivery?", "Support is agreed for your project, including its duration, responsibilities, hours and response expectations. Ongoing maintenance or further improvements can be scoped separately. We make those arrangements clear before you commit."],
    ["What should we bring to the first conversation?", "Start with the work you want to make easier, the people involved and the tools you already use. A simple example of where things slow down is enough to begin. We can identify the next useful questions together."],
  ] },
];
export default function BeforeWeBegin() {
  return <div className="before-begin" aria-labelledby="before-begin-title">
    <p className="eyebrow">CLARITY BEFORE COMMITMENT</p>
    <h3 id="before-begin-title">Before we begin.</h3>
    <p className="before-begin-intro">A few practical answers about working with Lightways. Your proposal sets out the arrangements for your project.</p>
    <div className="before-begin-grid">{groups.map(group => <div key={group.title}><h4>{group.title}</h4>{group.questions.map(([question, answer]) => <details key={question} name="before-begin-questions"><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>)}</div>
  </div>;
}
