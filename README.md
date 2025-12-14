# JavaScript Mastery Roadmap — Progress Tracker ✅  

> **How to use this file**
- Treat this like a **self-audit document**
- ✅ Check a box **only when you can explain the concept without notes**
- If you can **predict output + explain why**, you’ve mastered it
- If not → leave it unchecked (no ego here)

---

# STAGE 1 — FUNDAMENTALS (Mental Model of JavaScript)

> 🎯 Goal: Understand **how JavaScript thinks**

---

## 1️⃣ JavaScript Execution Model
- [ ] I understand what the **Call Stack** is
- [ ] I can explain **Execution Context** (Global & Function)
- [ ] I know why JavaScript is **single-threaded**
- [ ] I can explain why **blocking code freezes the UI**
- [ ] I can draw the call stack for nested function calls

---

## 2️⃣ Variables & Memory
- [ ] I know the real difference between `var`, `let`, `const`
- [ ] I understand **reassignment vs mutation**
- [ ] I can explain **stack vs heap** (conceptually)
- [ ] I know why `const` objects can still change
- [ ] I understand variable **lifetime in memory**

---

## 3️⃣ Data Types & Equality
- [ ] I can list all **primitive types**
- [ ] I understand **reference types**
- [ ] I know the difference between `==` and `===`
- [ ] I can explain **type coercion**
- [ ] I know why `[] == []` is false

---

## 4️⃣ Functions (Core Unit of JS)
- [ ] I know the difference between **declaration & expression**
- [ ] I understand **parameters vs arguments**
- [ ] I know what happens when a function is **called**
- [ ] I understand **return behavior**
- [ ] I can explain functions as **execution contexts**

---

## 5️⃣ Scope & Lexical Environment
- [ ] I understand **global scope**
- [ ] I understand **function scope**
- [ ] I understand **block scope**
- [ ] I know what **lexical scoping** means
- [ ] I can explain why inner functions access outer variables

---

## 6️⃣ Control Flow
- [ ] I can confidently use `if / else`
- [ ] I understand when to use `switch`
- [ ] I know how `for`, `while`, `do-while` differ
- [ ] I understand `break` and `continue`
- [ ] I can trace loop execution manually

---

### ✅ Stage 1 Completion Check
- [ ] I can predict output **before running code**
- [ ] I can debug basic JS without console.log
- [ ] I understand **why** errors happen

---

# STAGE 2 — CORE CONCEPTS (80% of Real JS)

> 🎯 Goal: Think like the **JavaScript engine**

---

## 7️⃣ Closures (TOP PRIORITY)
- [ ] I know what a closure is
- [ ] I understand **why closures exist**
- [ ] I can explain closures using **lexical scope**
- [ ] I know where closures are used in real apps
- [ ] I can build a closure-based counter

---

## 8️⃣ Hoisting & TDZ
- [ ] I understand **hoisting**
- [ ] I know how function hoisting works
- [ ] I know how variable hoisting works
- [ ] I understand **Temporal Dead Zone**
- [ ] I know why `let` & `const` were introduced

---

## 9️⃣ `this` Keyword
- [ ] I know how `this` behaves in global scope
- [ ] I understand `this` inside normal functions
- [ ] I understand `this` inside object methods
- [ ] I understand `this` in arrow functions
- [ ] I can predict `this` without guessing

---

## 🔟 Objects & Object Behavior
- [ ] I understand object references
- [ ] I know how methods work
- [ ] I understand shallow vs deep copy
- [ ] I know `Object.freeze()` & `Object.seal()`
- [ ] I model real-world entities using objects

---

## 1️⃣1️⃣ Prototypes & Inheritance
- [ ] I understand prototype chaining
- [ ] I know what `__proto__` is
- [ ] I understand constructor functions
- [ ] I know how JS inheritance actually works
- [ ] I understand why JS is **prototype-based**

---

## 1️⃣2️⃣ Arrays (Functional Core)
- [ ] I understand `map`
- [ ] I understand `filter`
- [ ] I understand `reduce`
- [ ] I can replace loops using array methods
- [ ] I understand immutability in arrays

---

## 1️⃣3️⃣ Asynchronous JavaScript
- [ ] I understand the **Event Loop**
- [ ] I know what Web APIs are
- [ ] I understand task queue vs microtask queue
- [ ] I know why `setTimeout(fn, 0)` is not instant
- [ ] I can explain async execution order

---

## 1️⃣4️⃣ Promises & Async/Await
- [ ] I understand promise states
- [ ] I can chain `.then()`
- [ ] I understand error handling in promises
- [ ] I can use `async/await` confidently
- [ ] I know how async code resumes execution

---

## 1️⃣5️⃣ DOM & Events
- [ ] I understand the DOM as a tree
- [ ] I can manipulate DOM with JS
- [ ] I understand event bubbling
- [ ] I understand event capturing
- [ ] I can use event delegation

---

### ✅ Stage 2 Completion Check
- [ ] I can explain the event loop clearly
- [ ] I can debug async bugs
- [ ] I no longer fear `this`
- [ ] I feel frameworks are *optional*, not required

---

# STAGE 3 — ONE-DAY APPLICATION TASKS (DEPTH TEST)

> 🎯 Rule:  
> Check only **after building & explaining the logic**

---

## 🧠 Task 1 — State-Based Todo App
- [ ] Built app using pure JS
- [ ] State lives in JS, not DOM
- [ ] DOM updates from state
- [ ] Used closures & array methods

---

## 🧠 Task 2 — Custom Event System
- [ ] Implemented `on(event, handler)`
- [ ] Implemented `emit(event, data)`
- [ ] Used closures for handler storage
- [ ] Understood event abstraction

---

## 🧠 Task 3 — Debounce & Throttle
- [ ] Built debounce function
- [ ] Built throttle function
- [ ] Used closures & timers
- [ ] Can explain real-world usage

---

## 🧠 Task 4 — LocalStorage Mini DB
- [ ] Implemented Create
- [ ] Implemented Read
- [ ] Implemented Update
- [ ] Implemented Delete
- [ ] Added expiry / validation

---

## 🧠 Task 5 — Async API Simulator
- [ ] Built fake API with Promises
- [ ] Added loading state
- [ ] Added error handling
- [ ] Used async/await correctly

---

## 🧠 Task 6 — Game Logic Engine
- [ ] Game logic separated from UI
- [ ] Used state management
- [ ] Controlled game flow
- [ ] Predictable behavior

---

## 🧠 Task 7 — Rebuild `Array.map()`
- [ ] Implemented custom map
- [ ] Used callbacks correctly
- [ ] Understood iteration deeply
- [ ] Explained why it works

---

# 🏁 FINAL SELF-ASSESSMENT
- [ ] I can explain JS without memorizing
- [ ] I understand JS from first principles
- [ ] I can build apps without frameworks
- [ ] I trust my mental model of JS

---

---

