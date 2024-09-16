// Get references to all buttons and message divs
const buttons = document.querySelectorAll('.button');
const messages = document.querySelectorAll('.message');

// Function to handle click event
function handleClick(event) {
    event.target.style.backgroundColor = 'lightblue'; // Change button color
}

// Function to handle mouseover event
function handleMouseOver(event) {
    const messageId = `message${event.target.id.slice(-1)}`;
    const message = document.getElementById(messageId);
    message.style.display = 'block'; // Display the message
}

// Function to handle mouseout event
function handleMouseOut(event) {
    const messageId = `message${event.target.id.slice(-1)}`;
    const message = document.getElementById(messageId);
    message.style.display = 'none'; // Hide the message
}

// Function to handle dblclick event
function handleDblClick(event) {
    event.target.style.display = 'none'; // Hide the button
}

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', handleClick);
    button.addEventListener('mouseover', handleMouseOver);
    button.addEventListener('mouseout', handleMouseOut);
    button.addEventListener('dblclick', handleDblClick);
});
