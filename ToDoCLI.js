const fs = require("fs");
const readline = require("readline");
let arr = [];
console.log("Welcome to Todo CLI! \n--------------------");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const cli = userinput => {
  if (userinput == "v") {
    view();
  }
  if (userinput == "n") {
    new1();
  }
  if (userinput.startsWith("c")) {
    complete1(userinput);
  }
  if (userinput.startsWith("d")) {
    delete1(userinput);
  }
  if (userinput == "q") {
    console.log("See you soon!");
    rl.close();
  }
};

//Start of questioning
rl.question(
  "(v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit \n",
  cli
);

//Main function that goes through when repeating
const main = arr => {
  rl.question(
    "(v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit \n",
    cli
  );
};
const view = () => {
  if (arr.length == 0) {
    console.log("List is empty...");
    main();
  } else {
    arr.forEach((line, index) => {
      console.log(`${index} ${line}`);
    });
    main();
  }
};
const new1 = () => {
  const appender = line => {
    arr.push(`[ ] ${line}`);

    main();
  };
  rl.question(" What ? \n", appender);
};
const complete1 = userinput => {
  let linenum = parseFloat(userinput.charAt(1));

  let changeline = arr[linenum];
  changeline = changeline.replace("[ ]", "[✓]");
  arr[linenum] = changeline;
  console.log(`Completed: "${changeline.replace("[✓] ", "")}"`);

  main();
};
const delete1 = userinput => {
  let linenum = parseFloat(userinput.charAt(1));
  //let x = arr.splice(linenum, 1)[0].slice(4);
  console.log(`Deleted: "${arr.splice(linenum, 1)[0].slice(4)}"`);

  main();
};
