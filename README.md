### Table of contents:

[Purpose](#purpose)

[User Stories](#user-stories) 

[Design and UX](#design-and-ux) 
* [Wireframes](#wireframes)
* [Colour schemes and typography](#colour-schemes-and-typography)

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

The live link is:

[Wizard Name Generator](https://elyserh.github.io/wizard-name-generator/index.html)

![Screenshot](assets/images/readme-images/wng-main.jpg)

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

I aimed for a retro feel to the site, reminiscent of the random name generators my friends and I played with in our free time in the computer lab at primary school, in the late 90s. The visual design is simplistic so as not to draw away from the game. 

When researching wizard names I was instantly bombarded by sites advertising wizards names ‘for girls’ and ‘for boys’. I would like to create a gender-neutral site where the gender doesn’t matter; because this is a name for a wizard, which is generally speaking both magical and fictional. There is enough gendering in this world, which is constantly excluding members of the LGBTQ+ community, without extending that to wizards. Fantasy and fiction can be forms of escapism, and if you use that escapism to help escape a gendered world, I don’t want this site to be a reminder of that world.

### Wireframes

Landing page
![Landing page](assets/images/readme-images/wireframe-landing-page.jpg)

Biscuit Mode page
![Biscuit Mode page](assets/images/readme-images/wireframe-biscuit-mode.jpg)

Wilcard Mode page
![Wilcard Mode page](assets/images/readme-images/wireframe-wildcard-mode.jpg)

The main difference between the wireframes and the site is the removal of the 'Home' link from the navigation bar; as it only led to the landing page, which has only links for the two modes, it seemed unnecessary. The header still provides a link back to home if the user needs to go back to the landing page, but the navigation bar will still allow them to intuitively navigate the site.

### Colour schemes and typography

I have chosen Space Mono for the font because it gives the site a retro feel, without being over-the-top. I am sticking with a white background and black text for this website, so as to focus on the game. It contributes to the retro feel but is also clear and concise for ease-of-use.

### Features

### All pages

* Clear header, making the purpose clear to users of the site.

![Header](assets/images/readme-images/header.jpg)

* Footer with links to social media, which will open in a new tab with aria labels announcing this. In keeping with the retro design of the site, the links will be for MySpace, Deviantart and LiveJournal (all still active).

![Footer](assets/images/readme-images/footer.jpg)

### Landing page

* Links to each mode.

![Landing page links](assets/images/readme-images/landing-links.jpg)

### Biscuit Mode and Wildcard Mode pages

* Submit button - picture/icon of a D20 dice to keep in line with the wizard theme. Accompanying label text for anyone not familiar with a D20 and an aria label for accessibility. Dice will rotate with each click to simulate rolling.

![D20 button](assets/images/readme-images/d20.jpg)

* Area for new name to be printed to the page.

![Name display](assets/images/readme-images/name-display.jpg)

* Area for name history to be displayed - maximum of 6 names to avoid visual or data overload. Down arrow next to the text to indicate placement; especially important for smaller viewports where the space is not immediately visible, or may be hidden when a long name is generated.

![Name history](assets/images/readme-images/name-history.jpg)

* Once 6 names have been pushed to the history, an alert will pop up to let the user know that the history is going to be emptied. The names will be listed on the alert so that the user can record them if need be.

![History alert](assets/images/readme-images/history-alert.jpg)

* Navigation links listing Wildcard Mode and Biscuit Mode, allowing for easy and intuitive navigation of site for all users. On desktop links will be underlined when they are hovered over to indicate to the user that they are clickable. The active page will also be indicated in the navigation bar.

![Nav bar](assets/images/readme-images/nav-bar.jpg)

### Biscuit Mode page

* Text box asking user for input; asks for favourite biscuit, program sums the ASCII values of the characters and uses this number to generate a name. Can be triggered by the enter key or by clicking on the D20 button, as it is intuitive to users to use the enter key when they have provided a text input, regardless of the on-screen instructions.

![Text box for biscuit input](assets/images/readme-images/biscuit-input.jpg)

* Error message if no input is provided by the user.

![Biscuit no input error alert](assets/images/readme-images/input-error.jpg)

* If the ASCII value is too great for the equation an error alert will be generated asking the user to input a shorter word. Technically the error is not related to length, but to numerical value, but the simplest way to communicate this error to the user is to ask for a shorter word as this will result in a smaller numerical value.

![Ascii ceiling error alert](assets/images/readme-images/ascii-error.jpg)

* Link to the ASCII Wikipedia page for users who are interested in the process; text is underlined to indicate that it is an external link.

![Ascii Wikipedia link](assets/images/readme-images/ascii-link.jpg)

### Future Implementations

In the future I would like to use an external library, such as Sweet Alert, to style the Javascript alerts to match the design of the site. Sweet Alert also looks to be, to the extent of my knowledge, a more accessible option for alerts, which is an added and important benefit.
I would also like to integrate an option for the user to email the name selection to themselves, or to share it on social media.

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

Pexel - for sourcing the D20 dice image

Pixlr - for editing the D20 dice image

Font Awesome - for the icons

### Testing 

### Code Validation

[Javascript validator](https://jshint.com/) - 

![JS code validator image preview]()

[HTML validator](https://validator.w3.org/) - 

![HTML code validator image preview]()

[CSS validator](https://jigsaw.w3.org/css-validator/) - 

![Valid CSS logo]()

[Accessibility validator](https://accessibilitytest.org/) - rating 

![Accessibility validator snip]()

### Browser Compatibility

Browser Compatibility checks were run using [Browserling](https://www.browserling.com/) and my own computer. The results are:

Firefox - &#9745;

Chrome - &#9745;

Opera - &#9745;

Safari - &#9745; 

Microsoft Edge - &#9745;

### Performance Testing

Performance testing was conducted using [Lighthouse](https://developers.google.com/web/tools/lighthouse#devtools). The results are:
![Lighthouse results]()

### Manual Testing

I sent the live link to friends and family members for testing and feedback. The site was received positively; design and usability suggestions were considered and acted on. One tester said the design reminded him of the DOS environment, which is the theme I was aiming for. The site was also put up in the Code Institute Slack community for feedback.

I conducted manual testing and recorded the results as follows:

![Manual testing spreadsheet large screens](assets/images/readme-images/manual-testing-large-viewports.jpg)

![Manual testing spreadsheet small screens](assets/images/readme-images/manual-testing-small-viewports.jpg)

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

### Debugging

This is the first site I have built with Javascript so there was a fair bit of debugging that ultimately had simple solutions (such as moving an object from local to global scope).

Outside of this, primarily debugging happened in relation to the createNameHistory function. The goals were to get it to display vertically and not to display errors. Originally I just put the array in a new paragraph, but because this is a single object, I could not style it vertically using CSS. The best way seemed to be to put each name as a list item, which involves more code but looks much nicer to the user and is more pliable when it comes to CSS.

I also did some refactoring for the startRoll function; it originally used the 'this' keyword in the function, which resulted in the enter key event listener having to call each of it's own functions individually, rather than just calling startRoll. I moved the use of 'this' up to the event listener and used that to give startRoll it's own parameter.

### Known bugs

The code is set up so that when the name history reaches 6 entries, it will wait 4 seconds and then an alert will pop up, letting the reader know that the history will be erased. I added in this buffer because otherwise, in some browsers, the alert covers the name display immediately and that name can only be seen in the alert. The bug here is that if the user is speeding through the game, until the alert pops up they can continue to generate names. The names will still appear in the alert so I decided this is preferable to taking out the buffer. The user experience is not negatively affected by being able to generate an extra 2-4 names.

There is one console error when the Wildcard mode page loads; this is because the event listener for the enter key, which only applies to Biscuit Mode, has to have global scope to work properly. It seems to me that the solution for this would be to have the enter key event listener in it's own .js file that is only called on biscuit-mode.html, but as this is messy and the console error is not affecting the code or the user, I have left it in script.js .

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
The wizard names were crowdsourced from friends and family, notably: Una Kate DuVivier McDermott, Anthea and Johnny Fields, Finola Connor, Joelle Horan, Donal McQuillan, Anne Ostini-Horan and Glenn Saunders. If you would like to add a (gender-neutral) name to the list feel free to send any suggestions to elyserhoran@gmail.com.

Dice/D20 image - Pexel/Alexis Designs

Code for sticky footer sourced from CSS Tricks - https://css-tricks.com/couple-takes-sticky-footer/*/

Code for rotating the D20 dice adapted from Cloudinary - https://cloudinary.com/blog/rotating_images_in_javascript_three_quick_tutorials 

### Acknowledgements

Many thanks to my mentor Marantha Ilesanmi for his help and advice. Thanks also to my friend Cameron Chamberlain for his advice.

### Appendix