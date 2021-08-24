# web222-Final_Assessment

**Overview**

The WEB222 final assessment is usually an exam, and covers everything in the course.
However, due to the circumstances this term, we are NOT going to have an exam.

Instead, we will be using an alternate final assessment. In terms of grading, this work

will be equivalent to the exam, but can be done remotely and submitted online.

**Description**
Your task is to develop a few HTML5 web pages with style sheets and JavaScript. This
assessment must be your own work. 

The specific height and width of each panel is for you to define; the provided figure is abstract schematics meant to illustrate the general layout of the pages. Your page, however, should have the following formatting: all panels should have a border (header/footer with rounded radius); the page should have a background of some color; the text of the header and footer should be in a different color than the rest of the
panels. The side panel is optional depending on your design/requirement (mandatory for info page only). For simplicity, assume that the desktop screen width is fixed and set at 1 100 px. Ideally there should not be any horizontal scrolling. The navigation must have links to all other pages with the currently visited page as active link. The header should contain a logo and name of your choice.

**Page requirements:**

(1) Welcome page (honesty.html): this page is the starting page of your online store.
You must understand and add the following content with your full name in the
body section.
“I declare that my Final assessment assignment is wholly my own work in
accordance with Seneca Academic Policy. No part of this assignment has been
copied manually or electronically from any other source (including web sites)
except for the information supplied by the WEB222 instructor and / or made
available in this assignment for my use.
I also declare that no part of this assignment has been distributed to other
students.
Name: Type your name here
Dated: Type the submission date here “

(2) User info page (info.html): this html page will allow a user to fill out his/her
information such as first name, last name, password etc. The page must have
password field appearing twice: to confirm password match. In addition, this html
page will have a submit button, a reset button and must support JavaScript
validation. The validation requirement is provided below:

A. You must make all fields mandatory to insert for users.

B. First name: Must start with a cap and only alphabet allowed.

C. Last name: Must start with a cap and only alphabet allowed.

D. Password: must be 6 characters long, must start with an alphabet, must have
at least 1 digit and 1 uppercase. The password strings must match. Pattern
attribute is not allowed for this field.

E. Username: username must start with an alphabet, must have at least 6
characters. Pattern attribute is not allowed for this field.

F. Education Level: Dropdown list: select and option elements, required. The
Education Level list should contain the following items: - select -, Technical
Diploma, College Diploma, Bachelor's Degree, Master's Degree and Others.
The option tag for "- select -" should have a value of "0" or an empty string.

G. Education Status: Type of radio. The value should choose from one of the
following: Graduated, Current enrolled, Did not graduate.

H. Email: use html5 input type for default validation.

I. Age: must be in between 18- 60.

J. The name of the form must be “signup” to accept user’s input for creating
user account. This form must submit to https://httpbin.org/post using the post
method only when the form does not contain any validation errors. You must
do the following for displaying error messages-
Display appropriate messages in side panel only for each error when the
user clicks the submit button. There should not be more than 5 error
messages in total for each display. These errors are mainly for part D and
E above.

K. You should use pattern matching wherever possible to make JavaScript code
efficient. You may want to use “required" attribute as necessary. If there is no
error found, then a success alert is displayed and form is submitted to
https://httpbin.org/post.

L. This page must have two hidden fields: one with your last name as value and
lastName as field name/id and the other with your Seneca student id as value
and studentId as field name/id. Failure to have this hidden field with
appropriate property/value will result in zero mark for this page. Example is
given below:

```
<input type="hidden" name="lastName" id="lastName" value="Your last
name goes here" />
<input type="hidden" name="studentId" id="studentId" value="Your student Id
goes here" />
```
(3) Reflection page (reflection.html): One reflection page (reflection.html) with
the following content:
You are asked to write a reflection content that is 500 - 600 words in length. In
your reflection page, please address all of the following:

- Explain the concept of Responsive Design. What does the term mean?

- How does responsive design relate to web technologies?

- What did you learn about building web apps for different devices through your research?

- Finally, describe your learning experience in the course.

Your reflection page should be free of typos and grammatical/spelling errors, and
use full sentences and paragraphs. If you quote or reference any resources
online, make sure you include proper citations (Do not COPY/PASTE without
reference). Your reflection must also be your own work. You may not
collaborate or copy material from other sources or students.

(4) CSS and JS: you must have external css file called **normalize.css** that you will
apply to html pages for presentation/layout. You will be evaluated based on
creativity. You must have separate script files as necessary. All css and script
must go into the external css and Js file. The name of the files must correspond
to the names of the html pages (except the welcome page). Following illustrates
the directory structure of your final assessment. The indentation reflects the
location of the files. You must abide by the naming of the following structure (all
are lower case).


```
Final_Assessment <- folder
honesty.html
reflection.html
normalize.css
info.html
info.js
```

(5) Title of each page: the title tag of each page in the head section must have your
Full name. Failure to do so will result in mark deduction.

(6) Browser issues: you should test your complete site with at least FX and Chrome
(testing with Edge/Brave/Safari/Avg is optional). You may display a note in the
welcome page which 2 browsers (with versions) your site works the best. Think
of client’s convenience. Its wise to test with different display settings/screen
resolutions.

(7) Crate a GitHub account, upload and provide the link for the public GitHub link
in the footer of the info.html page.

Other Requirements

- Your HTML & CSS must be well-formatted and properly commented where
appropriate.
- Your code will be evaluated for correctness of syntax and appropriate usage.
- Each HTML page must **pass** the **W3C's HTML Validation** : https://validator.w3.org/
- All CSS used in the assignment must **pass** the **W3C CSS Validation** :
https://jigsaw.w3.org/css-validator
- All JavaScript code must not contain any **run-time errors/exceptions**.

Final Submission Guidelines:
**a)** Zip **all of your files** as **Final_Assessment.zip**

**b)** Upload the zip file to **My.Seneca** under **Assignments -> Final Assessment** (same
submission procedure as assignment 3 )

**c) IMPORTANT** : All **HTML** & **CSS Must not contain any errors** when validated
( **HTML** : https://validator.w3.org/, **CSS** : https://jigsaw.w3.org/css-validator )

d) **NO LATE SUBMISSIONS** for Final assessment. Late submissions will not be
accepted and will receive a **grade of zero (0)**.

e) After the end (11: 30 PM) on the due date, the assessment submission link on the
Blackboard will no longer be available.


**Evaluation Rubric:**
Partial marking is up the discretion of the instructor.


➢ Info page fields with validation attributes (user friendly display is required): 5 marks

➢ Reflection page: 3 marks (zero will be assigned for copy/pasting)

➢ Github upload and link: 2 mark

➢ JS code: 6 marks ( any JS code must go in info.js file )

➢ CSS rules (note the rounded corners for header/footer): 4 marks

➢ Honesty page: 0 marks, but 50% marks will be deducted for the whole assessment if this page is missing.

➢ Also, note the red statements for the hidden fields in the info page and requirement #5.

➢ One of the course promotion policy says “Get 50% or more in your final assessment”
