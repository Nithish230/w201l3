const todoList = () => {
    tap = []
    const add_something = (todoItem) => {
      tap.push(todoItem)
    }
    const markcomplete = (index) => {
      tap[index].completed = true
    }
  
    const od = () => {
      // Write the date check condition here and return the array of od items accordingly.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      return tap.filter((item)=> item.dueDate<new Date().toLocaleDateString("en-CA"));
    }
  
    const dueT = () => {
      // Write the date check condition here and return the array of todo items that are due today accordingly.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      return tap.filter((item)=> item.dueDate==new Date().toLocaleDateString("en-CA"));
    }
  
    const dueLa = () => {
      // Write the date check condition here and return the array of todo items that are due later accordingly.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      return tap.filter((item)=> item.dueDate>new Date().toLocaleDateString("en-CA"));
    }
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string as per the format given above.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      // return OUTPUT_STRING
      let res = list
      .map(
        (item) =>
          `${item.completed ? "[x] " : "[ ] "}${item.title} ${
            item.dueDate === today ? " " : item.dueDate
          }`
      )
      .join("\n");
    return res;
    }
  
    return { tap, add_something, markcomplete, od, dueT, dueLa, toDisplayableList };
  }
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add_something({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add_something({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add_something({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add_something({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add_something({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n\n")
  
  console.log("od")
  var ods = todos.od()
  var formattedods = todos.toDisplayableList(ods)
  console.log(formattedods)
  console.log("\n\n")
  
  console.log("Due Today")
  let itemsdueT = todos.dueT()
  let formattedItemsdueT = todos.toDisplayableList(itemsdueT)
  console.log(formattedItemsdueT)
  console.log("\n\n")
  
  console.log("Due Later")
  let itemsdueLa = todos.dueLa()
  let formattedItemsdueLa = todos.toDisplayableList(itemsdueLa)
  console.log(formattedItemsdueLa)
  console.log("\n\n")