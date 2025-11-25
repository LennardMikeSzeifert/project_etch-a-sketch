# Etch-a-Sketch / Sketchpad Project

This project is all about practicing DOM manipulation by building a simple, interactive sketchpad right in the browser. Think of it as a mix between a pixel drawing tool and an Etch-A-Sketch.

The goal is to create a grid of squares that react to the user's mouse, let the user “draw” by hovering, and can be regenerated at different sizes based on user input.

---

## What I am going to build

- A **16×16 grid** of square divs created entirely with JavaScript  
  (no manual copy/paste — the script builds everything!)
- A **hover effect** so moving the mouse over a square changes its color
- A **reset button** that asks the user for a new grid size  
  (up to a max of 100 per side) and rebuilds the board dynamically
- A layout built with **Flexbox** to practice positioning and alignment

This project is intentionally a bit challenging — ChatGPT, Google, MDN, and experimentation are my best friends here. Debugging in DevTools will also play a big role.

---

## 🛠 Features & Requirements

### Core features

- Create a container that holds the grid
- Use JavaScript to generate all grid squares
- Use Flexbox to make the grid layout work
- Add hover interactions to “draw” on the board
- Add a button that:
  - Prompts the user for a new grid size
  - Deletes the old grid and renders a new one
  - Keeps the total drawing area consistent (e.g., 960px wide)

### Debugging checklist I used

- Check if CSS is linked
- Check console for JavaScript errors
- Inspect elements to see if the grid exists but isn’t visible
- Use tons of `console.log()` when needed

---

## Optional

I might come back to try these later:

- Randomize the color of each square on hover
- Add a progressive darkening effect (each pass darkens by 10%)  
  → Perfect use case for the `opacity` property!

---

## Final Notes

This project is a great exercise in:

- DOM manipulation
- Event handling
- Flexbox
- Clean JavaScript structure
- Problem-solving and debugging

And of course… **committing early and often** using Conventional Commits.
