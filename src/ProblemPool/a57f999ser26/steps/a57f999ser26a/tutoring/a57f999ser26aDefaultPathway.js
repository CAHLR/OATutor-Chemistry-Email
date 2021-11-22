var hints = [{id: "a57f999ser26a-h1", type: "hint", dependencies: [], title: "Identify $$a_1$$", text: "The first term is $$a_1=248.6$$.", variabilization: {}}, {id: "a57f999ser26a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0.4"], dependencies: ["a57f999ser26a-h1"], title: "Identify r", text: "To find r, divide the 2nd term by the 1st term. What is $$r=\\frac{99.44}{248.6}$$?", subHints: [{id: "a57f999ser26a-h2-s1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["T"], dependencies: [], title: "Confirm that $$-\\left(1\\right)<r<1$$", text: "Is $$-\\left(1\\right)<0.4<1$$ True or False?", choices: ["T", "F"], variabilization: {}}], variabilization: {}}, {id: "a57f999ser26a-h3", type: "hint", dependencies: ["a57f999ser26a-h1", "a57f999ser26a-h2"], title: "Formula for the Sum of an Infinite Geometric Series", text: "Substitute values for $$a_1$$ and r into the formula: $$S=\\frac{a_1}{\\left(1\\right)-r}$$.", variabilization: {}}, {id: "a57f999ser26a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["414.3"], dependencies: ["a57f999ser26a-h3"], title: "Solve for S", text: "What is $$S=\\frac{248.6}{\\left(1\\right)-\\left(0.4\\right)}$$?", variabilization: {}}, {id: "a57f999ser26a-h5", type: "hint", dependencies: ["a57f999ser26a-h4"], title: "Sum of Infinite Geometric Series", text: "The sum of the $$infinite$$ geometric series is 414.3.", variabilization: {}}, ]; export {hints};