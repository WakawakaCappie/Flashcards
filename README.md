# Flashcards

## Introduction

You are going to create a flashcard application that should work as shown in Figure 1. Focus on writing elegant, object-oriented code while keeping in mind good design and best practices.

![flashcards animation](readme-assets/mvc.gif)

*Figure 1*. An example of a flashcard implementation.


### Model-View-Controller

There is one more interesting requirement in this challenge. You need to follow the [design pattern] called [Model-View-Controller] (MVC). Before you start making releases, make sure you can answer the following questions:

- What is Model?
- How is View used?
- What are the responsibilities of the Controller?


## Releases
### Pre-release: description and app design

Let's agree on how you will build your application. How does a game with a deck of flashcards look like - from loading the data into a file to checking if your guess is correct? What should happen? The application should work as shown in Figure 1 but it does not have to be an exact copy of it: for example, you can give users not one, but several attempts to guess the card.

When you have a clear understanding of what should be happening, then you can start developing the application. Draw a rough draft of the objects you intend to use, their interactions with each other, and the general flow of the program.

This release takes approximately 30 minutes. If you've spent more time and feel stuck, find someone to help you deal with the problem.

### Release 0: Model-View-Controller

Excellent! Everything has been designed! Have you forgotten about MVC? You must have 3 main independent components. Changing one of these components should not break the others.

- `Model` - is responsible for the data storage structure, methods of working with them.
- `View` - is responsible only for displaying, outputting data to the screen.
- `Controller` - can receive data from the Model, request the View to display them, contact the Model to make changes to the existing data, etc. It is important that all this happens in response to commands from the user, with which the controller can work.
  
There should be a minimum of code in `runner.js`! Initialization of the controller and passing the necessary parameters to it.

When completing the assignment, follow the MVC design pattern as closely as possible. Your implementation is likely to be different from other command implementations, and that's okay.

*Note 1:* Here is an [example of MVC implementation](https://github.com/Elbrus-Bootcamp/project-flashcards-console/blob/master/readme-assets/mvc-hospital-example.md):  for a hospital related application. However, it is quite complicated. To get started, you can search the internet for more basic examples.

*Note 2:* There are already some code snippets in the project that can help you figure out the relationships between model, view and controller. However, for them to work, you need to solve several problems. Think about what happens to the context (this) when we pass any controller method as an argument.

### Release 1: Code

Time to code! You have a folder named `topics`, which has several files with flashcards (questions and answers). For instance, `nighthawk_flashcard_data.txt`. The user should be able to use and work with any of these files. You can also come up with your own questions.
## Conclusion

Think about the decisions that you made during this task. What were the results of designing the app and following the MVC pattern? 

[example of mvc realization]: readme-assets/mvc-hospital-example.md
[design pattern]: http://en.wikipedia.org/wiki/Software_design_pattern
[Model-View-Controller]: https://ru.wikipedia.org/wiki/Model-View-Controller
