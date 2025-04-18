// Sorry for this stupidly long array

var videoArray = ['0ZNXUF7gB30', '6DTeBGn_ppw', 'mGlCGMm8Qag', 'SOxutBMCOUc', 'OaRS-sr0V3Y', 'HCZzhvg9NA8', 'R-FRP0vUe4w', 'Jw5RVNlptKs', 'NiJDZt1iEkk', 'Ykz0GAN80gk', 'fAQmCNWJHb8', 'cAUNo8X4HHQ', 'l0lmx3zRWjA', 'Np_ESt93vbs', 'x5Lt7VMZy6A', 'qY6UKPP-RC0', 'uzMa7LZuyAc', 'KfO1XhRob3c', 'AW7Y0aFVRus', '-L4kjjWvGMk', '7eN3fxzn0ro', 'AIjCbVzpGck', 'bRYeqb4YwJI', 'UAT5ml_KNLs', 'Pg3wBPCNOz8', 'swwdy4ES1Xk', 'xKmayFkrJTQ', '7WBKJ8X15wA', 'H8sOFBKkpHw', 'Yf9YVFS32TI', 'xS49ThMeEiE', '_jodwAwrupU', 'epVpq_L8sqA', 'VMBylNJQEbg', 'pkEbn6fagCk', 'VKIKnLAhP7Y', '1nZtkgkq2Nc', 'iYcXcCpD0qA', 'EAIwt7ldvjY', 'UbfuXyhXp9g', 'lsrS0bvwxZE', 'TJok3RVNeZk', 'p4NUr10DShc', 'HqNXVpUJnJM', '8S77rig4Who', 'dyq-WiRU2Zk', 'q9MAB9klGOc', 'g6ohqNW-7fk', 'snasUXLUaak', 'OjqcLr2bjFg', 'wlUChsX-gPQ'];

var useArray = videoArray;
var mostRecent;

document.getElementById ("button").addEventListener ("click", newSong, false);

function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function newSong() {
    if (useArray.length < 1) {
        document.getElementById("display2").style.display = "block";
        useArray = videoArray;
        useArray = useArray.filter(item => item !== mostRecent);
    }

    const randomElement = getRandomItem(useArray);
    useArray = useArray.filter(item => item !== randomElement);
    mostRecent = randomElement

    document.getElementById('video').src = 'https://www.youtube.com/embed/' + randomElement;
}

document.getElementById("display").innerHTML = "There are currently " + videoArray.length + " videos in the list.";
