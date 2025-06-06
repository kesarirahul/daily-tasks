function empProfile(name, jobtitle = "Associate") {
  if (!name) {
    console.log("Employee name is required.");
    return;
  }

  console.log(`Employee Profile:
  Name     : ${name}
  Job Title : ${jobtitle} `);
}

empProfileProfile("Rahul");
empProfileProfile("A"); 
empProfile(""); 
