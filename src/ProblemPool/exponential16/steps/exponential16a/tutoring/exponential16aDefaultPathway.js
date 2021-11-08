var hints = [{id: "exponential16a-h1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(1.2\\right) e^{\\left(2\\right) \\left(3\\right)}-\\left(0.3\\right)$$"], dependencies: [], title: "Using Substitution", text: "Substitute $$x=3$$ into f(x). What is the expression?", variabilization: {}}, {id: "exponential16a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["6"], dependencies: ["exponential16a-h1"], title: "Add the Exponent", text: "What is the sum of the exponent?", variabilization: {}}, {id: "exponential16a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["484.1146"], dependencies: ["exponential16a-h2"], title: "Using Multiplication", text: "Multiply the terms in the expression, $$\\left(1.2\\right) e^6$$. Use a calculator to obtain the numeric value. Round to four decimal places, if necessary.", variabilization: {}}, {id: "exponential16a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["483.8146"], dependencies: ["exponential16a-h3"], title: "Using Addition", text: "Add all the terms together, 484.1146-0.3.", variabilization: {}}, ]; export {hints};