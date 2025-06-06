function setReminder(taskName, deadline) {
  if (!taskName) {
    console.log("Task name is required.");
    return;
  }

  if (!deadline) {
    console.log(`Reminder: ${taskName} has no deadline set.`);
  } else {
    console.log(`Reminder: Complete ${taskName} by ${deadline}.`);
  }
}


setReminder("Project report", "05-06-2025");
setReminder("Drink water", null);
setReminder(""); 

