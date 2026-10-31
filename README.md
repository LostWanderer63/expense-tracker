# Expense Tracker

A simple Expense Tracker web application built using HTML, CSS, Bootstrap 5, and JavaScript.

## Features

- Choose expenseamount (number input)
- Choose description (text input)
- Choose a category (fuel, food, electricity, Movie)
- Add Expense button
- Bulleted list showing expenses: `amount - category - description`
- Delete Expense button (removes item from screen and Local Storage)
- Edit Expense button (loads values into the form fields and removes from screen and Local Storage)
- Local Storage persistence and restoration on page reload

## How to Run

Open `index.html` in your browser, or start a local server:

```bash
python3 -m http.server 3000
```

## Git Commands

```bash
git add .
git commit -m "feat: expense tracker application"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPOSITORY_NAME>.git
git push -u origin main
git rev-parse HEAD
```
