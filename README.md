# Prop Hunt

This was started over a three-day hackathon, which took place January 16-18, 2024.

The Concept is a "prop hunt" game, which is essentially a hide-and-seek game, but where the hider can transform their character into objects they find in the environment. The seekers then have to find the hider, knowing that they could have taken the shape of any object.

As of May 2024, the player can move around, travel into and out of the buildings, and transform into different objects. A server to handle multiplayer was prototyped but not yet integrated. The server is here: https://github.com/ec-idds/hackathon-server

This is still basic and buggy, but it was a lot of fun to make, and students learned so much about collaborative development!

## The Hackathon 2024 Team

- Colette Brochu 
- Jake Conklin
- Jennifer Dias
- James Fink
- Jason Fletcher
- Michael Gillis
- Molly Hans
- Erica Hinkle
- Jacob Proulx
- Samantha Schumacher
- Angelyna Siv
- Nikholas Srnka
- Hailey Young

With the remote support of:

- Angel Muthemba
- Adom "Domo" Oshagan

Guided by Dr. Mark Sherman, Assistant Professor of Computer Science

## Programming 2 Final Project by Nik Srnka

The hackathon project was a team collaboration between several students and Mark, where the goal was to create a game from scratch, using a bunch of code. The team landed on the idea of creating a prop hunt like game, where players can hide around the available maps as props, anything from a trashcan to a microscope, while a seeker goes around and tries to find the hiders. So at the beginning stages of the hackathon project, music, maps, props, and starting screens needed to be created, along with rules and ways to move characters and transitions from map to map. After a successful 4 days of coding, the team was able to create a working landscape for players to traverse, without rules, however the code was really messy. Within the team, there were multiple subgroups working to produce a final project, and there wasn’t much of a sense to have organized code. So completing most of the content in Programming 2, I thought it would be a great idea to go back the project and make some of the code more readable, in the hopes that when this project gets picked up again, people will understand what each line does. So what did I do? All of my simplifications come in the form of classes. Classes are ways of declaring certain things that have their own set of functions (or methods), which minimize the need for repetition in code. So instead of writing the same piece of code over and over for things of the same type, that have slightly different properties, a class can be declared, and then declarations of that class can be made, so code isn’t repeated. I ended up using 3 different classes: one for characters, called Sprite, one for warp zones, called Zone, and one for map displays, called Display. Together, they condense the code needed to render the characters and background down to 4-7 lines of code, which is incredible. Each reduction is my favorite piece of code, because it just looks so clean and concise. Like the code just went from being so messy, to being almost too neat, and I still think there’s a way to condense it further. I’m proud of what I’ve done, and I’d like to see what happens next in the hackathon journey. 

In the event a user wants to run the hackathon code, simply own the hackathon file in GitHub, then right click on the index.html file, select show preview, and then the code will run.

