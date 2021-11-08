var hints = [{id: "baye6a-h1", type: "hint", dependencies: [], title: "Bayes' Theorem", text: "The probability of event A given event B may be computed by means of the following formula: P(A$$\mid$$B)=P(A)P(B$$\mid$$A)/P(B)", variabilization: {}}, {id: "baye6a-h2", type: "hint", dependencies: ["baye6a-h1"], title: "Events", text: "Let A denote the event 'both children are boys' and B denote 'the older child is a boy.' Then P(A$$\mid$$B)=P(A)P(B$$\mid$$A)/P(B)", variabilization: {}}, {id: "baye6a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{1}{4}$$"], dependencies: ["baye6a-h2"], title: "P(A)", text: "What is the probability that both children are boys, without knowing whether the first child is a boy or a girl? Enter your answer as a fraction", subHints: [{id: "baye6a-h3-s1", type: "hint", dependencies: [], title: "P(A)", text: "There are four possible outcomes: BB, BG, GB, or GG (where B is boy and G is girl). Both children are boys in only 1 out of the 4 possible outcomes, so P(A) is $$\\frac{1}{4}$$", variabilization: {}}], variabilization: {}}, {id: "baye6a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["baye6a-h3"], title: "P(B$$\mid$$A)", text: "What is the probability that the older child is a boy given that both children are boys?", subHints: [{id: "baye6a-h4-s1", type: "hint", dependencies: [], title: "P(B$$\mid$$A)", text: "Given that both children are boys, the only possible outcome is BB. The older child is a boy in this outcome, so P(B$$\mid$$A) is $$\\frac{1}{1}$$, or 1", variabilization: {}}], variabilization: {}}, {id: "baye6a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{1}{2}$$"], dependencies: ["baye6a-h4"], title: "P(B)", text: "What is the probability that the older child is a boy, without knowing whether the first child is a boy or a girl? Enter your answer as a fraction", subHints: [{id: "baye6a-h5-s1", type: "hint", dependencies: [], title: "P(B)", text: "There are four possible outcomes: BB, BG, GB, or GG (where B is boy and G is girl). The older child is a boy in 2 out of the 4 possible outcomes, so P(A) is $$\\frac{2}{4}$$, or $$\\frac{1}{2}$$", variabilization: {}}], variabilization: {}}, {id: "baye6a-h6", type: "hint", dependencies: ["baye6a-h5"], title: "P(A$$\mid$$B)", text: "Use P(A), P(B$$\mid$$A), and P(B) to solve for P(A$$\mid$$B) using Bayes' Theorem", variabilization: {}}, {id: "baye6a-h7", type: "hint", dependencies: ["baye6a-h6"], title: "P(A$$\mid$$B)", text: "P(A$$\mid$$B)=P(A)P(B$$\mid$$A)/P(B)=((1/4)*1)/(1/2)=1/2", variabilization: {}}, ]; export {hints};