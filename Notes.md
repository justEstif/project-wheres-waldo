# Notes

- start with a large photograph which contains several elements that the user is meant to find
  - you need to choose a photo, identify where exactly each element is and save that to the database
  - user will make selections and they will get feedback on whether they are correct or not
    - [ ] when the user clicks the image, it should place a targeting box around the portion of the photo where the user has clicked
    - [ ] that box should contain a list of possible characters
    - when the user selected one of there characters, you should check with your back-end to see if that character is actually within the targeting box.
      - provide the user with appropriate feedback,
        - [ ] if wrong => 
          - [ ] an error message
        - [ ] if correct =>
          - [ ] place a marker on the photo in the character's location
          - [ ] remove the targeting box until the user clicks again
          - [ ] remove the selected correct answer from options
    - [ ] keep track of how long it takes between when the photo is first loaded and when the user finally identifies all characters
      - do this on the server side
      - [ ] once a round is complete, ask the user for his/her name and record that time.

# Thought Process

- [x] Find out exactly where on an image someone clicked
  - [x] I was able to display where on the image the user moved the mouse over, and add an overlay to that part
  - [ ] Make the overlay stay if the user gets the answer right
  - [x] Make the form hide on submit
  - [ ] If the answer is correct mark that area - the area will be covered with some overlay
    - _When the image is loaded it will create overlay over each hidden figure and when it is found, it will activate it_
- [x] get answer from user and compare with the answer in database
  - [ ] Find out how to box around a specific part of an image on the correct answer
- [x] clicking away from form disables the form until the next click
- [ ] if I find the max and min x and y, I could use a simple subtraction and if else statement
- [ ] when the image is clicked, it would pass in the event, which would have an x and y position and if the x and y are not part of any of the stored positions, it would return nothing, else it would have a response
- [ ] put the options into a state, and make the Option component by looping over the state
- [ ] maybe the timer could be the difference between when the Timestamp starts, and the last country is found
- the options should be in state, and if they are correct they will be removed from the available options
- [ ] make the buttons in the form created by looping over the state
- [ ] how do I keep track of the time?