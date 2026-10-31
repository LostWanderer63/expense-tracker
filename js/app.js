const form = document.getElementById('expenseForm');
const amountInput = document.getElementById('expenseamount');
const descriptionInput = document.getElementById('description');
const categorySelect = document.getElementById('category');
const parentNode = document.getElementById('listOfExpenses');

window.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    try {
      const expense = JSON.parse(localStorage.getItem(key));
      if (expense && expense.amount && expense.description && expense.category) {
        showExpenseOnScreen(expense);
      }
    } catch (err) {}
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const amount = amountInput.value.trim();
  const description = descriptionInput.value.trim();
  const category = categorySelect.value;

  if (!amount || !description) return;

  const expense = {
    amount,
    description,
    category
  };

  localStorage.setItem(description, JSON.stringify(expense));
  showExpenseOnScreen(expense);

  amountInput.value = '';
  descriptionInput.value = '';
  categorySelect.value = 'fuel';
  amountInput.focus();
});

function showExpenseOnScreen(expense) {
  const existingItem = document.getElementById(expense.description);
  if (existingItem) {
    existingItem.remove();
  }

  const li = document.createElement('li');
  li.id = expense.description;
  li.appendChild(document.createTextNode(`${expense.amount} - ${expense.category} - ${expense.description} `));

  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.className = 'expense-btn';
  deleteBtn.textContent = 'Delete Expense';
  deleteBtn.onclick = () => {
    localStorage.removeItem(expense.description);
    li.remove();
  };

  const editBtn = document.createElement('button');
  editBtn.type = 'button';
  editBtn.className = 'expense-btn';
  editBtn.textContent = 'Edit Expense';
  editBtn.onclick = () => {
    amountInput.value = expense.amount;
    descriptionInput.value = expense.description;
    categorySelect.value = expense.category;
    localStorage.removeItem(expense.description);
    li.remove();
    amountInput.focus();
  };

  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  parentNode.appendChild(li);
}
