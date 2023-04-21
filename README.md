# Professional-README-Generator

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| Git | [https://git-scm.com/](https://git-scm.com/)     | 
| Javascript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web JavaScript)   |
| Node.js | [https://nodejs.org/api/cli.html](https://nodejs.org/api/cli.html)   |




## Description 

Please navigate to assets folder for a video walthrough of the program</br>

This program can generate a README.md for users based on their inputs through Node.js.




## Table of Contents 

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Javascript Example](#javascript-example)
* [Usage](#usage)
* [Learning Points](#learning-points)
* [Author Info](#author-info)
* [Credits](#credits)



## Javascript Example

To get a hold of this project, simply navigate to my Github profile and select the repo "Professional-README-Generator". From there copy the SSH link into your terminal, Gitbash, or whatever application you prefer and use git copy and then paste link. You can then open it using VS Code and run it using node.


```javascript
  function writeToFile(fileName, data) {
return fs.writeFileSync(fileName, data)
}


function init() {
  inquirer.prompt(questions).then(response => {
    console.log("writing README")
    writeToFile("user_README.md", generateMarkdown(response))
  })

}
```

In the above code, I used functions that would fill in the GenerateMarkdown.js file using the writeToFile and writeFile syntax. Function init and inquirer set the program into motion by prompting the user the questions with the node command is activated.


## Usage 

In order to use the README generator, you must first aquire it through GitHub, see above how to do this. After you open it in VS Code, you may then use your computer's terminal or the terminal in VS Code. Make sure you are inside this repository in the terminal, the run node index.js to begin. You will then be prompted various questions to help fill out the README.md. After answering all the questions open the user_README.md file to see your new README.md file!


<img src="./assets/Screen%20Shot%202023-04-20%20at%209.31.50%20PM.png" width=600>
<img src="./assets/Image%204-20-23%20at%209.32%20PM.jpg" width=600>


## Learning Points 


Through this project, I got a better understanding of Node.js and the process of backend programs.


## Author Info


### Sam Higa 


* [Portfolio](https://samhiga.github.io/my-portfolio/)
* [LinkedIn](https://www.linkedin.com/in/sam-higa-b887b9209/)
* [Github](https://github.com/samhiga)