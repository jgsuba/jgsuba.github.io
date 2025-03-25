// get user selected text
const getUserSelectedText = () => {
    return window.getSelection().toString();
}

// knowing when user reaches he end of the string

window.onscroll = () => {
    if(window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        console.log('You are at the end of the page')
    }
}

// detect i user is in dark-mode
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark').matches;

//go back to previous page
history.back();
history.go(-1);