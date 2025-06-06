function setPreferences(language = "English", theme = "Light", notifications = true) {
  console.log(`Language: ${language}`);
  console.log(`Theme: ${theme}`);
  console.log(`Notifications: ${notifications ? "Enabled" : "Disabled"}`);
} 
setPreferences("Hindi", "Dark", false);  
// setPreferences(undefined, "Dark");

