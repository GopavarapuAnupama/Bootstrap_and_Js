const form = document.getElementById('myForm');
        form.addEventListener('submit', function (event) {
            let valid = true;
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach((errorMessage) => {
                errorMessage.textContent = '';
            });
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const website = document.getElementById('website');
            const message = document.getElementById('message');
            if (name.value.trim() === '') {
                valid = false;
                name.classList.add('error');
                document.getElementById('name-error').textContent = 'This field is required';
            } else {
                name.classList.remove('error');
            }
            if (email.value.trim() === '') {
                valid = false;
                email.classList.add('error');
                document.getElementById('email-error').textContent = 'A valid Email address is required';
            } else {
                email.classList.remove('error');
            }
            if (website.value.trim() === '') {
                valid = false;
                website.classList.add('error');
                document.getElementById('website-error').textContent = 'A valid URL is required';
            } else {
                website.classList.remove('error');
            }
            if (message.value.trim() === '') {
                valid = false;
                message.classList.add('error');
                document.getElementById('message-error').textContent = 'This field is required';
            } else {
                message.classList.remove('error');
            }
            if (!valid) {
                event.preventDefault(); 
            }
        });