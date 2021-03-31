var hints = [{id: "add30b-h1", type: "hint", dependencies: [], title: "Simplify Both Sides", text: "We want to start by simplifying both sides and comparing the simplified value."}, {id: "add30b-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["10"], dependencies: ["add30b-h1"], title: "Left Hand Side", text: "What does -(-10) evaluate to?", subHints: [{id: "add30b-h2-s1", type: "hint", dependencies: [], title: "Left Hand Side", text: "The notation -a is read as \"the opposite of a.\" Therefore, in the problem, we are asked to find the opposite of -10."}, {id: "add30b-h2-s2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["10"], dependencies: ["add30b-h2-s1"], title: "Left Hand Side", text: "What is the opposite of -10?"}]}, {id: "add30b-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-10"], dependencies: ["add30b-h1"], title: "Right Hand Side", text: "What does $$-|\\left(-1\\right)0|$$ evaluate to?", subHints: [{id: "add30b-h3-s1", type: "hint", dependencies: [], title: "Right Hand Side", text: "We know that $$|\\left(-1\\right)0|=distance$$ from -10 to $$0=10$$, so the opposite of $$|\\left(-1\\right)0|$$ is -10."}]}, {id: "add30b-h4", type: "hint", dependencies: ["add30b-h2", "add30b-h3"], title: "Comparing Numbers", text: "Now we are left to compare 10 and -10. Since 10 is to the right of -10 on the number line, we say $$10>-\\left(10\\right)$$. Therefore, $$-\\left(-1\\right)0>-|\\left(-1\\right)0|$$."}, ]; export {hints};