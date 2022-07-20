const themeStyle = document.getElementById('theme-style')
const colormode = document.getElementById('color-mode')
const searchInput = document.getElementById('search')
const searchUser = document.getElementById('search-user')

function swicthTheme() {

    //the style should change to dark

    //first click it should change => style/dark.css
    if (themeStyle.getAttribute('href') == '#') {

        themeStyle.href = './dark.css';
    } else {
        themeStyle.href = '#'
    }

    //next click #
    console.log(themeStyle.getAttribute('href'))
}

// get the github user 






colormode.onclick = swicthTheme;