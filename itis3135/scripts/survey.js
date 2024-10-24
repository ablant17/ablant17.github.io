document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("intro-form");
    form.addEventListener("submit", validateForm);
});
document.addEventListener('DOMContentLoaded', function() {
    const addCourseButton = document.getElementById('add-course-button');
    addCourseButton.addEventListener('click', addCourseField);
});

// Function to validate the form
function validateForm(event) {
    event.preventDefault(); 

    let name = document.getElementById('name').value;
    let mascot = document.getElementById('mascot').value;
    let image = document.getElementById('image').files[0];
    let imageCaption = document.getElementById('imageCaption').value;
    let personalBackground = document.getElementById('personalBackground').value;
    let professionalBackground = document.getElementById('professionalBackground').value;
    let academicBackground = document.getElementById('academicBackground').value;
    let webDevBackground = document.getElementById('webDevBackground').value;

    // Check if any of these fields are empty
    if (!name || !mascot || !image || !imageCaption || !personalBackground || !professionalBackground || !academicBackground || !webDevBackground) {
        alert('Please fill out all the required fields.');
        return false;
    }

    // Additional validation for image type
    if (image.type !== 'image/png' && image.type !== 'image/jpeg') {
        alert('Please upload a valid PNG or JPG image.');
        return false;
    }

    createIntroPage();
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
    deleteButton.onclick = function() {
        coursesContainer.removeChild(input);
        coursesContainer.removeChild(deleteButton);
    };
    coursesContainer.appendChild(deleteButton);
}

// Function to create the introduction page
function createIntroPage() {
    let name = document.getElementById('name').value;
    let mascot = document.getElementById('mascot').value;
    let imageCaption = document.getElementById('imageCaption').value;
    let personalBackground = document.getElementById('personalBackground').value;
    let professionalBackground = document.getElementById('professionalBackground').value;
    let academicBackground = document.getElementById('academicBackground').value;
    let webDevBackground = document.getElementById('webDevBackground').value;
    let platform = document.getElementById('platform').value;

    // Insert HTML to display intro page
    document.getElementById('introForm').innerHTML = `
        <h2>${name}'s Introduction</h2>
        <p><strong>Mascot:</strong> ${mascot}</p>
        <p><strong>Image Caption:</strong> ${imageCaption}</p>
        <p><strong>Personal Background:</strong> ${personalBackground}</p>
        <p><strong>Professional Background:</strong> ${professionalBackground}</p>
        <p><strong>Academic Background:</strong> ${academicBackground}</p>
        <p><strong>Web Development Background:</strong> ${webDevBackground}</p>
        <p><strong>Primary Computer Platform:</strong> ${platform}</p>
    `;
}

// Function to reset the form
function resetForm() {
    document.getElementById('introForm').reset();
}
