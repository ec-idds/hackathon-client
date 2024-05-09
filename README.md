# p5.js VSCode Template

## What's In This Project
* p5.js environment:
  * index.html
  * sketch.js
 * Dev Container configuration:
   * use command "Dev Container: Reopen in Container"
   * (use **shift-command-P** to open command bar or click green button in lower-left corner of VSCode)
 * Linting configuration:
   * Configured to run eslint with the p5js plugin
   * Includes the VSCode eslint plugin
   * Uses npm's package.json
  
## Running / Previewing the p5.js Project
Use the command **"Live Preview: Start Server"**. Use **shift-command-P** to open command bar then begin typing any of the words in the command name.

Alternatively, go to the Explorer tab to see all the files, then right-click on **index.html** and select "**Show Preview**".

When it opens the preview, it starts up a server. You don't have to use the built-i preview panel; you can connect to that server in your regular browser by typing in the URL `http://127.0.0.1:3000/`

You can stop the server by clicking the icon in the bottom-right of VSCode, which brings up a shortcut to the commands "Live Preview: Stop Server", or enter that command directly in the command bar.

## Writing Code
As with any p5.js project, use **sketch.js** to write your code. 

You may add additional JavaScript files, but they'll need to be added to the **index.html** file in order to be loaded.

To load additional code files, add a line like this to **index.html** ABOVE the sketch.js line:

```html
<script src="YOURNEWFILE.js"></script>
```

## Programming 2 Final Project by Nik Srnka

The hackathon project was a team collaboration between several students and Mark, where the goal was to create a game from scratch, using a bunch of code. The team landed on the idea of creating a prop hunt like game, where players can hide around the available maps as props, anything from a trashcan to a microscope, while a seeker goes around and tries to find the hiders. So at the beginning stages of the hackathon project, music, maps, props, and starting screens needed to be created, along with rules and ways to move characters and transitions from map to map. After a successful 4 days of coding, the team was able to create a working landscape for players to traverse, without rules, however the code was really messy. Within the team, there were multiple subgroups working to produce a final project, and there wasn’t much of a sense to have organized code. So completing most of the content in Programming 2, I thought it would be a great idea to go back the project and make some of the code more readable, in the hopes that when this project gets picked up again, people will understand what each line does. So what did I do? All of my simplifications come in the form of classes. Classes are ways of declaring certain things that have their own set of functions (or methods), which minimize the need for repetition in code. So instead of writing the same piece of code over and over for things of the same type, that have slightly different properties, a class can be declared, and then declarations of that class can be made, so code isn’t repeated. I ended up using 3 different classes: one for characters, called Sprite, one for warp zones, called Zone, and one for map displays, called Display. Together, they condense the code needed to render the characters and background down to 4-7 lines of code, which is incredible. Each reduction is my favorite piece of code, because it just looks so clean and concise. Like the code just went from being so messy, to being almost too neat, and I still think there’s a way to condense it further. I’m proud of what I’ve done, and I’d like to see what happens next in the hackathon journey. 

In the event a user wants to run the hackathon code, simply own the hackathon file in GitHub, then right click on the index.html file, select show preview, and then the code will run.

