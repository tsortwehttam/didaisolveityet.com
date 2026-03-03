export type Verdict = "yes" | "no";

export type Problem = {
  slug: string;
  name: string;
  question: string;
  verdict: Verdict;
  featured: boolean;
  summary: string;
  whyNot?: string;
  whenWill?: string;
  updated: string;
  sources: string[];
};

export const BASE_URL = "https://didaisolveityet.com";
export const SITE_NAME = "Did AI Solve It Yet?";
export const SITE_TAGLINE = "Keeping score on AI's biggest promises.";
export const SITE_DESCRIPTION =
  "AI is writing our emails, taking our jobs, and racking up a massive energy bill. The least it could do is solve a few of the hard problems. Is it?";

export const PROBLEMS: Problem[] = [
  // ── Featured (top problems) ──────────────────────────────────
  {
    slug: "war",
    name: "War",
    question: "Did AI solve war yet?",
    verdict: "no",
    featured: true,
    summary:
      "AI is making weapons faster, cheaper, and more autonomous. It has not made war less likely. If anything, it's lowering the barrier to starting one.",
    whyNot:
      "War is about territory, resources, ideology, and power. AI can fly drones and pick targets, but it can't settle the disagreements that start conflicts. Autonomous weapons are getting better, which just means the killing is more efficient, not that there's less of it. The countries spending the most on AI are also spending the most on defense. That's not a coincidence.",
    whenWill:
      "AI will not end war. People have been trying to end war for thousands of years. AI is a new tool in the same old arms race. It makes escalation easier and accountability harder. Maybe AI-assisted diplomacy prevents some conflicts. More likely it just helps build better missiles.",
    updated: "2026-03-03",
    sources: [],
  },
  {
    slug: "poverty",
    name: "Poverty",
    question: "Did AI solve poverty yet?",
    verdict: "no",
    featured: true,
    summary:
      "AI is creating enormous wealth. It is not distributing it. The people building AI are getting rich. The people being replaced by AI are not.",
    whyNot:
      "Poverty is a distribution problem. AI can optimize supply chains and predict crop yields, but it can't rewrite tax policy or build affordable housing. The gains from AI go to people who own capital and have technical skills. Everyone else gets a chatbot and a layoff notice. The economy rewards owners more than workers, and no algorithm changes that.",
    whenWill:
      "AI could help reduce poverty if the productivity gains were shared. They aren't, and nothing suggests that will change on its own. Best case: AI makes goods cheap enough that even low incomes stretch further. Worst case: it kills the jobs those incomes depend on before that happens.",
    updated: "2026-03-03",
    sources: [],
  },
  {
    slug: "disease",
    name: "Disease",
    question: "Did AI solve disease yet?",
    verdict: "no",
    featured: true,
    summary:
      "AI is good at reading medical images, screening drug compounds, and writing research papers about itself. People are still getting sick and dying from preventable causes.",
    whyNot:
      "Disease is thousands of different problems, and most of them aren't waiting on better algorithms. Malaria kills hundreds of thousands of people a year and we already have treatments. The issue is getting them to people. AI speeds up drug discovery for wealthy-market diseases, but it doesn't build clinics in rural areas or make insulin affordable. The hard part of global health was always logistics and money, not a lack of intelligence.",
    whenWill:
      "AI will keep helping at the research end: screening drug candidates, reading scans, matching patients to trials. But 'solving disease' means healthcare systems that actually reach people, and no model ships that. At the current pace, AI will help us understand diseases faster than we can afford to treat them.",
    updated: "2026-03-03",
    sources: [],
  },
  // ── Other problems ───────────────────────────────────────────
  {
    slug: "cancer",
    name: "Cancer",
    question: "Did AI solve cancer yet?",
    verdict: "no",
    featured: false,
    summary: "AI is good at reading scans and finding drug candidates faster. It has not cured cancer. We'd be a lot more forgiving about the whole job displacement thing if it had.",
    whyNot:
      "Cancer is hundreds of different diseases, not one. Each has different causes and responds to different treatments. AI can speed up drug screening, catch tumors on imaging earlier, and help match patients to trials. But clinical trials still take years, biology is still messy, and every patient is different. The hard part was never the math.",
    whenWill:
      "Not soon. AI will probably help pick off specific cancer subtypes one at a time over decades. A blanket cure is not on any realistic roadmap. If you were hoping AI would at least save us from cancer while replacing our livelihoods, you'll be waiting a while.",
    updated: "2026-03-03",
    sources: [],
  },
  {
    slug: "climate-change",
    name: "Climate change",
    question: "Did AI solve climate change yet?",
    verdict: "no",
    featured: false,
    summary:
      "AI can make power grids smarter and weather forecasts better. Emissions are still going up. Also, training AI models uses a lot of electricity, which is a bit awkward.",
    whyNot:
      "Climate change is a politics and infrastructure problem. AI can optimize grids, improve forecasts, and help design better batteries, but it can't pass legislation, shut down coal plants, or make people fly less. No amount of compute changes the fact that the hard part is getting eight billion people to coordinate. Meanwhile, the data centers running these models need their own power plants.",
    whenWill:
      "AI won't solve climate change because climate change is not a puzzle with a solution. It's a slow-motion negotiation between every country and every industry on earth. AI will keep being useful inside that process, but expecting it to fix the whole thing misunderstands what the whole thing is. At minimum, AI could try not to make it worse.",
    updated: "2026-03-03",
    sources: [],
  },
  {
    slug: "ai-alignment",
    name: "AI alignment",
    question: "Did AI solve AI alignment yet?",
    verdict: "no",
    featured: false,
    summary:
      "We are building increasingly powerful AI systems and we do not know how to make sure they do what we actually want. You'd think this would be a bigger deal.",
    whyNot:
      "Nobody has a proven method for making sure a sufficiently capable AI system does what you intend. Current approaches work for current systems, mostly. They don't scale in any tested way to systems smarter than the people watching them. The labs ship faster than the safety research can keep up. We're building the plane in midair and hoping it holds together.",
    whenWill:
      "Unclear, and that is the problem. If alignment gets solved, we'll probably only know after the fact. If it doesn't, same thing. The AI industry can't agree on a timeline or even a definition of 'solved,' which is not a great sign.",
    updated: "2026-03-03",
    sources: [],
  },
  {
    slug: "fusion",
    name: "Fusion",
    question: "Did AI solve fusion yet?",
    verdict: "no",
    featured: false,
    summary:
      "Fusion has been thirty years away for seventy years. AI has not changed this. It has helped with plasma control, which is nice but is not the same as a working power plant.",
    whyNot:
      "Fusion is an engineering problem at a scale software can't shortcut. You have to contain plasma at 150 million degrees, pull out more energy than you put in, and do it reliably enough to plug into a grid. AI can model plasma behavior and tweak magnetic confinement, but the bottleneck is materials, construction, and money. No neural network makes tritium cheaper or builds a reactor faster.",
    whenWill:
      "Some private companies say demo plants by the 2030s. AI might help a bit by improving plasma simulations. But even if the physics works, you still have to build and license the plants, and that takes decades. Fusion will be thirty years away until one day, maybe, it isn't.",
    updated: "2026-03-03",
    sources: [],
  },
  {
    slug: "aging",
    name: "Aging",
    question: "Did AI solve aging yet?",
    verdict: "no",
    featured: false,
    summary:
      "AI can help identify longevity-related genes and screen for senolytic drugs. You are still getting older. So is everyone you know.",
    whyNot:
      "Aging involves every system in the body at once. AI is good at pattern-matching in large datasets, and longevity research has plenty of data, so there's a natural fit. But finding a target is a long way from developing a safe drug, testing it in humans, and getting it approved. The gap between 'AI found a promising compound' and 'you can buy it at a pharmacy' is about fifteen years and a billion dollars.",
    whenWill:
      "AI will probably help extend healthy lifespan incrementally by speeding up parts of drug discovery. A cure for aging itself is not on any serious near-term roadmap. If you're waiting for AI to make you immortal before it takes your job, you should probably update your resume instead.",
    updated: "2026-03-03",
    sources: [],
  },
  {
    slug: "hunger",
    name: "Hunger",
    question: "Did AI solve hunger yet?",
    verdict: "no",
    featured: false,
    summary:
      "The world produces enough food to feed everyone. It doesn't. AI has not changed this, because the problem was never a lack of information about who's hungry.",
    whyNot:
      "Hunger is a distribution and poverty problem. We grow more than enough calories globally. The issue is conflict, logistics, waste, and the fact that food goes where money is. AI can optimize crop yields and predict famines earlier, but it can't broker peace in a war zone or make it profitable to ship grain to people who can't pay. The parts of the food system that work well don't need AI. The parts that are broken need politics and infrastructure.",
    whenWill:
      "AI will help at the margins: better yield predictions, more efficient supply chains, earlier warning systems for droughts. But as long as hunger is caused by poverty and conflict, AI won't fix it. The world's most advanced AI systems are being used to generate marketing copy, not to redirect food to where it's needed.",
    updated: "2026-03-03",
    sources: [],
  },
  {
    slug: "traffic",
    name: "Traffic",
    question: "Did AI solve traffic yet?",
    verdict: "no",
    featured: false,
    summary:
      "AI can time traffic lights better and route you around jams. You are still sitting in traffic. So is everyone else whose routing app found the same shortcut.",
    whyNot:
      "Traffic is a product of how cities are built, where jobs are, how roads are priced (usually free), and how many people own cars. AI can tweak signal timing, but it can't un-build a suburb or add a train line. Routing apps help individuals but make things worse in aggregate because everyone gets the same 'shortcut.' Induced demand is undefeated: build more capacity, and people just drive more.",
    whenWill:
      "Self-driving cars might thin out some bottlenecks someday, but traffic as a whole is an urban planning problem. AI is not going to bulldoze a highway or fund a subway. If all the people losing their jobs to AI moved out of the cities, that might actually help with congestion more than any algorithm would.",
    updated: "2026-03-03",
    sources: [],
  },
  {
    slug: "centering-a-div",
    name: "Centering a <div>",
    question: "Did AI solve centering a <div> yet?",
    verdict: "no",
    featured: false,
    summary:
      "With all the jobs AI has taken, you'd think it could at least center a div on the first try. It can't. It will suggest flexbox, grid, absolute positioning, and margin: auto, sometimes all four at once.",
    whyNot:
      "AI writes CSS that looks correct in a code block and breaks in the browser. Centering depends on the parent's display mode, the child's sizing, whether you mean horizontal or vertical or both, and whether you're reading a 2024 blog post or a 2012 Stack Overflow answer. AI doesn't ask which. It just picks one and commits. Then you spend twenty minutes figuring out why your modal is pinned to the top left corner. Developers have been getting this wrong since 1996. AI is carrying on the tradition.",
    whenWill:
      "Probably never. The CSS spec keeps moving and AI keeps training on outdated answers. Even when it gets the centering right, the designer changes the layout the next day and you're back to square one. At some point you just accept that nothing is truly centered and get on with it.",
    updated: "2026-03-03",
    sources: [],
  },
];

export function getProblem(slug: string): Problem | undefined {
  return PROBLEMS.find((item) => item.slug === slug);
}
