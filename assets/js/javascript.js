




const submitButton = document.getElementById('submitButton');

    let userNameElement = document.getElementById('navn')
    userNameElement.addEventListener('keydown',(e) =>{

        let inputLength = e.target.value.length

        if (inputLength >= 1) {
            userNameElement.style.border = '1px solid green'
            userNameElement.style.outline = 'none'
        }else{
            userNameElement.style.border = '1px solid red'
            userNameElement.style.outline = 'none'
        }

    })

    let userLastNameElement = document.getElementById('efternavn')
    userLastNameElement.addEventListener('keyup',(e) =>{

        let inputLength = e.target.value.length

        if (inputLength > 0) {
            userLastNameElement.style.border = '1px solid green'
            userLastNameElement.style.outline = 'none'
        }else{
            userLastNameElement.style.border = '1px solid red'
            userLastNameElement.style.outline = 'none'
        }

    })

    let userEmailElement = document.getElementById('email');
    userEmailElement.addEventListener('keyup', (e) => {
        let inputValue = e.target.value;
        if (inputValue.includes('@')) {
            userEmailElement.style.border = '1px solid green';
            userEmailElement.style.outline = 'none';
        } else {
            userEmailElement.style.border = '1px solid red';
            userEmailElement.style.outline = 'none';
        }
    });

    let userAgeElement = document.getElementById('alder')
    userAgeElement.addEventListener('keyup',(e) =>{

        let inputLength = e.target.value
        if (inputLength > 6 ) {
            userAgeElement.style.border = '1px solid green'
            userAgeElement.style.outline = 'none'
        }else{
            userAgeElement.style.border = '1px solid red'
            userAgeElement.style.outline = 'none'
        }

    })



submitButton.addEventListener('click', (e) =>{
    e.preventDefault();

    let userName = userNameElement.value

    let userLastName = document.getElementById('efternavn').value

    let userEmail = document.getElementById('email').value

    let userAge = document.getElementById('alder').value



    // console.log(userName,userLastName,userEmail,userAge)

    let myUserData =[
        userName,
        userLastName,
        userEmail,
        userAge,
    ]

    console.table(myUserData)

})