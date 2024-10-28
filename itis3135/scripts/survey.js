// Function to create the introduction page
function createIntroPage(name, mascot, imageCaption, personalBackground, professionalBackground, academicBackground, webDevBackground, platform, courses) {
    const introForm = document.getElementById('introForm');

    // Create the content to replace the form
    const content = `
        <h2>${name}'s Introduction</h2>
        <p><strong>Mascot:</strong> ${mascot}</p>
        <p><strong>Image Caption:</strong> ${imageCaption}</p>
        <p><strong>Personal Background:</strong> ${personalBackground}</p>
        <p><strong>Professional Background:</strong> ${professionalBackground}</p>
        <p><strong>Academic Background:</strong> ${academicBackground}</p>
        <p><strong>Web Development Background:</strong> ${webDevBackground}</p>
        <p><strong>Primary Computer Platform:</strong> ${platform}</p>
        <p><strong>Courses Currently Taking:</strong> ${courses.length ? courses.join(', ') : 'None'}</p>
    `;

    // Replace the form with the new content
    introForm.innerHTML = content;
}

// Function to validate the form
function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission

    let name = document.getElementById('name').value;
    let mascot = document.getElementById('mascot').value;
    let image = document.getElementById('image').files[0];
    let imageCaption = document.getElementById('image-caption').value;
    let personalBackground = document.getElementById('personal-background').value;
    let professionalBackground = document.getElementById('professional-background').value;
    let academicBackground = document.getElementById('academic-background').value;
    let webDevBackground = document.getElementById('web-dev-background').value;
    let platform = document.getElementById('platform').value;

    // Check if any of these fields are empty
    if (!name || !mascot || !image || !imageCaption || !personalBackground || 
        !professionalBackground || !academicBackground || !webDevBackground) {
        alert('Please fill out all the required fields.');
        return false;
    }

    // Additional validation for image type
    if (image && (image.type !== 'image/png' && image.type !== 'image/jpeg')) {
        alert('Please upload a valid PNG or JPG image.');
        return false;
    }

    // Gather courses
    const courses = [];
    const courseInputs = document.querySelectorAll('#courses input[type="text"]');
    courseInputs.forEach((input) => {
        if (input.value) {
            courses.push(input.value);
        }
    });

    // Call function to create intro page with gathered data
    createIntroPage(name, mascot, imageCaption, personalBackground, professionalBackground, academicBackground, webDevBackground, platform, courses);
}

// Function to add a course input field dynamically
function addCourseField() {
    const coursesContainer = document.getElementById('courses');
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter course name';
    coursesContainer.appendChild(input);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.type = 'button'; // Prevent form submission
    deleteButton.onclick = function() {
        coursesContainer.removeChild(input);
        coursesContainer.removeChild(deleteButton);
    };
    coursesContainer.appendChild(deleteButton);
}

// DOMContentLoaded event listeners
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("intro-form");
    form.addEventListener("submit", validateForm);
    
    const addCourseButton = document.getElementById('add-course-button');
    addCourseButton.addEventListener('click', addCourseField);
});
