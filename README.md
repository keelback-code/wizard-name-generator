### Table of contents:

[Purpose](#purpose)

[User Stories](#user-stories) 

[Design and UX](#design-and-ux) 
* [Wireframes](#wireframes)
* [Colour schemes and typography](#colour-schemes-and-typography)
* [Accessibility](#accessibility)

[Features](#features)

[Technologies](#technologies)

[Testing ](#testing)
* [Code Validation](#code-validation)
* [Browser Compatibility](#browser-compatibility)
* [Performance Testing](#performance-testing)
* [Manual Testing](#manual-testing)
* [User Stories Testing](#user-stories-testing)

[Debugging and known bugs](#debugging-and-known-bugs)

[Deployment](#deployment)

[Credits](#credits)

[Acknowledgements](#acknowledgements)

### Purpose

The purpose of the Wizard Name Generator is to provide a way for users to find a random name for a wizard, be this for a character for a book, a game, or just for laughs.

There will be two modes: Wildcard and Biscuit. Wildcard mode will allow the user to generate an entirely random name with each roll of the dice. Biscuit mode will prompt the user for input and use the ASCII value of the input to generate a name (more on this in the Features section).

The site and names are deliberately gender-neutral, because wizards have no need of gender. I want everyone to feel included when they visit this page, and introducing arbitrary binaries, such as gender, can unnecessarily exclude visitors and make them feel unwelcome.

### User Stories

A first time user looking to play the game:
* I want to easily understand the content and layout of the site
* I want to intuitively navigate the site to browse content
* I want to be able to access and use the website as intended on any device
* I want multiple options for name generation
* I want the previous names to be displayed on the screen so that I can ‘roll’ again
* I want to be warned if the names are going to be removed from the screen
I want to be able to contact the owner on social media

A returning user looking to play the game again:
* I want multiple options for name generation
* I want a large range of names so that I will not quickly run out of names

A disabled user who is new or returning to the site:
* I want to be able to access and use the site in the same way as any of the aforementioned users

As the owner of the site:
* I want users to be able to use the site easily and intuitively
* I want users to be able to easily generate and find names
* I want to create a gender neutral site
* I want to provide the same experience for all users

### Design and UX

The visual design for this site is simplistic so as not to draw away from the game: focus on the javascript/game for this site/project. I also aimed for a retro feel to the site, reminiscent of the random name generators my friends and I played with in our free time in the computer lab at primary school, in the late 90s.

When researching wizard names I was instantly bombarded by sites advertising wizards names ‘for girls’ and ‘for boys’. I would like to create a gender-neutral site where the gender doesn’t matter; because this is a name for a wizard, which is generally speaking both magical and fictional so there’s no need to gender it. There is enough gendering in this world, which is constantly excluding members of the LGBTQ+ community, without extending that to wizards. Fantasy and fiction can be forms of escapism, and if you use that escapism to help escape a gendered world, I don’t want to be a reminder of that world.

### Wireframes

Landing page
![Landing page](assets/images/readme-images/wireframe-landing-page.jpg)

Biscuit Mode page
![Biscuit Mode page](assets/images/readme-images/wireframe-biscuit-mode.jpg)

Wilcard Mode page
![Wilcard Mode page](assets/images/readme-images/wireframe-wildcard-mode.jpg)

### Colour schemes and typography

I have chosen this Space Mono for the font because it gives the site a retro feel, without being over-the-top. I am sticking with a white background and black text for this website, so as to focus on the game. It contributes to the retro feel but is also clear and concise for ease-of-use.

### Accessibility

Semantic HTML and aria labels were implemented across the site (only keep this section if you have more to say, otherwise this is covered in testing section)

### Features
### All pages
Clear header, making the purpose clear to users of the site.

Footer with links to social media, which will open in a new tab with aria labels announcing this. In keeping with the retro design of the site, the links will be for MySpace, Deviantart and LiveJournal (all still active).

### Landing page

Links to each mode.

### Biscuit Mode and Wildcard Mode pages

Submit button, triggered by mouse or enter key - picture/icon of a D20 dice to keep in line with the wizard theme

Area for new name to be printed to the page

Area for name history to be displayed - maximum of five names to avoid visual or data overload.

Once five names have been pushed to the history, an alert will pop up to let the user know that the history is going to be emptied (refresh or just 0?). The names will also be listed on the alert so that the user can record them if need be.

Navigation links listing Home, Wildcard Mode and Biscuit Mode, allowing for easy and intuitive navigation of site for all users. On desktop links will be underlined when they are hovered over to indicate to the user that they are clickable. The active page will also be indicated in the navigation bar.

On mobile and most tablets the navigation bar will change to a hamburger design and will remain on the same side of the screen for continuity and ease of use.

### Biscuit Mode page
Text box asking user for input; asks for favourite biscuit, program sums the ASCII values of the characters and uses this number to generate a name.

If the ASCII value is too great for the equation an error alert will be generated asking the user to input a shorter word

Link to the ASCII Wikipedia page for users who are interested in the process

### Future Implementations

In the future I would like to use an external library, such as Sweet Alert, to style the Javascript alerts to match the design of the site.
I would also like to use Javascript to animate the dice, either toggling images or using sprites.

### Technologies

Languages used:

HTML5

CSS

Javascript

Frameworks, Libraries and Programs Used:

Google Fonts - for the typography

Balsamiq - for creating the wireframes in the design stage

Firefox Developer Tools - for inspecting and testing the site

GitHub - for hosting the site

GitPages - for the deployment of the site

Gitpod - for editing the files

Photo Editing - for editing the D20 dice image

### Testing 

tbc

### User Stories Testing
A first time user looking to play the game:

*I want to easily understand the content and layout of the site*
* Simple and clear flow to site, simple instructions on how to play the game

*I want to intuitively navigate the site to browse content*
* Simple landing page with links to both modes, nav bar on Biscuit and Wildcard pages

*I want to be able to access and use the website as intended on any device*

* Responsive design, including simple layout for content

*I want multiple options for name generation*

* Biscuit (ASCII) mode and Wildcard mode

*I want the previous names to be displayed on the screen so that I can ‘roll’ again*

* History section which will display name history 

*I want to be warned if the names are going to be removed from the screen*

* When History section is full, alert will pop up letting user know that the history will be emptied. The alert will also display the names from the history so far for the user to record. 

*I want to be able to contact the owner on social media*

* Links to social media in footer

A returning user looking to play the game again:

*I want multiple options for name generation*

* Biscuit (ASCII) mode and Wildcard mode

*I want a large range of names so that I will not quickly run out of names*

* Extensive arrays of first and last wizard names, with randomized results for Wildcard option, and the Biscuit mode takes inputs beyond biscuit names if the user wants to enter other words/characters. Equations are designed so that arrays can be added to at any time.

A disabled user who is new or returning to the site:

*I want to be able to access and use the site in the same way as any of the aforementioned users*

* Semantic HTML and aria labels used throughout site, and site tested for accessibility as per testing section.

As the owner of the site:

*I want users to be able to use the site easily and intuitively*

* Simple and clear flow to site, simple instructions on how to play the game, clear navigational links throughout site

*I want users to be able to easily generate and find names*

* Two fun and easy modes for generating random names for multiple purposes. All errors caught by functions.

*I want to create a gender neutral site*

* All names are gender neutral or gender-ambiguous, and there is no option to choose a gender before generating a name

*I want to provide the same experience for all users*

* Semantic HTML and aria labels used throughout site, and site tested for accessibility as per testing section.

### Debugging and known bugs
tbc

### Deployment

Publishing

The project was deployed using GitHub pages. The steps to deploy using GitHub pages are:

* In the repository, click the 'Settings' tab, which is the furthest to the right

* Scroll down until you see the 'Pages' tab, which will be in the menu on the left hand side

* Underneath the 'Source' heading, open the drop down and choose the 'master' branch to build from

* Click 'Save' and the site link will appear in a blue box. After a few moments the box will turn green and then the site will be live.

The live link is:

Forking and Cloning

To save a copy of the code and work on it yourself, here are the steps for forking and cloning using Github:

* In the repository, click the 'Fork' button, which is on the top right hand side, next to 'Star'.

Github will automatically create a new repo, which is forked from the original. If you would like to clone it you have two options:

* Within the repository, click the 'Code' dropdown, which is located next to 'Add File' on the right (underneath the Settings tab); there is an option to download all files and save a copy locally.

* In the same 'Code' dropdown, you can opt to open the code with GitHub Desktop and work from there.

### Credits (content and media)
names - crowdsourced - Una, mum, Donal, Glenn, Fin, Anthea, Johnny
Dice/D20 image - Pexel/Alexis Designs
Code for sticky footer sourced from Css Tricks - https://css-tricks.com/couple-takes-sticky-footer/*/