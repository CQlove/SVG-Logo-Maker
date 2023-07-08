# SVG-Logo-Maker

Use Node.js command-line application that takes in user input to generate a logo and save it as an SVG file

## Table of Contents

- [User-story](#user-story)
- [Acceptance-Criteria](#acceptance-criteria)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)

## User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Description

This is a project that gonna generate a SVG logo by using node.js, jest, inquirer and mock-fs.

## Installation

Open the index.js in Node, after answering all the questions, you will get a logo.svg file.

## Usage

Please watch the video:


https://github.com/CQlove/SVG-Logo-Maker/assets/128104973/d5042a1f-106a-4695-8b16-1d8423fdedc5

