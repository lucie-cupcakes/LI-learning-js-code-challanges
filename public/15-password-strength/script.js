document.addEventListener('DOMContentLoaded', () => {
    /* Strong Password RegEx explanation:
        /^  // Match the following:
            (?=  // Match this (AND operator.)
                (.*[a-z])   // any lowercase letter
            {1,})  // At least 1 time.

            (?= // Match this (AND operator.)
                (.*[A-Z])  // any uppercase letter
            {1,}) // At least 1 time on the string

            (?= // Match this (AND operator.)
                (.*[\d])  // any digit
            {1,}) // At least 1 time on the string

            (?= // Match this (AND operator.)
                (.*[\d])  // any digit
            {1,}) // At least 1 time on the string

            (?= // Match this (AND operator.)
                .*[^a-zA-Z0-9]  // any NON (lower case letter, uppercase letter or digit)
                                // -- Basically: "Symbol" or Special char.
            {1,}) // At least 1 time on the string
            
            .{8,}   // The whole string must be at least 8 characters long.
        /g  - Globally on the string.
        -- I used https://regex101.com/  to develop this regex.
    */
    const passwordRegEx = /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[\d]){1,})(?=.*[^a-zA-Z0-9]{1,}).{8,}$/g;
    const checkPassword = (pwd) => passwordRegEx.test(pwd) ? 'Your password is valid' : 'Your password is invalid';

    const resultPre = document.querySelector('#result-pre');
    const userInput = document.querySelector('#user-input-text');

    document.querySelector('#user-input-text').addEventListener('change', () => {
        const newValue = checkPassword(userInput.value);
        resultPre.textContent = newValue;
        resultPre.className = newValue.includes('is invalid') ? "pwd-invalid" : "pwd-valid";
    });
});