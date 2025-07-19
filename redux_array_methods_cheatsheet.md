# 🔧 Redux-Friendly Array Method Cheat Sheet

## ✅ .map() – Transform array
```js
state.todos = state.todos.map(todo =>
  todo.id === action.payload.id
    ? { ...todo, text: action.payload.text }
    : todo
);
```

## ✅ .filter() – Remove or keep certain items
```js
state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
```

## ✅ .find() – Find specific item
```js
const todo = state.todos.find(todo => todo.id === action.payload.id);
```

## ✅ .findIndex() – Get index of matching item
```js
const index = state.todos.findIndex(todo => todo.id === action.payload.id);
if (index !== -1) {
  state.todos[index].text = "Updated text";
}
```

## ✅ .some() – Check if at least one item matches
```js
const exists = state.todos.some(todo => todo.text === "Learn Redux");
```

## ✅ .every() – Check if all items match
```js
const allCompleted = state.todos.every(todo => todo.completed === true);
```

## ✅ .reduce() – Create a summary value
```js
const count = state.todos.reduce((acc, todo) => todo.completed ? acc + 1 : acc, 0);
```

## ✅ .includes() – Check if value exists in array
```js
const hasTag = todo.tags.includes("urgent");
```

## ✅ Object.assign() – Merge objects
```js
const updatedTodo = Object.assign({}, todo, { text: "New Text" });
```

## ✅ Spread syntax (...) – Copy/update object or array
```js
const updatedTodo = { ...todo, completed: true };
state.todos = [...state.todos, newTodo];
```

# 🛑 Methods to avoid in reducers (unless using Immer):
| Method     | Why avoid?         |
|------------|--------------------|
| .push()    | Mutates array      |
| .splice()  | Mutates array      |
| .sort()    | Mutates array      |
| .reverse() | Mutates array      |

# ✅ Bonus: Common Reducer Patterns

## Add Todo
```js
state.todos.push(action.payload); // OK with RTK
```

## Toggle Todo
```js
const todo = state.todos.find(t => t.id === action.payload);
if (todo) todo.completed = !todo.completed;
```