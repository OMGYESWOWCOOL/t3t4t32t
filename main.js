function startClassificaton()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-UAkPBeU9/model.json', modelReady); 
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('alien1');
        img1 = document.getElementById('alien2');
        img2 = document.getElementById('alien3');
        img3 = document.getElementById('alien4');
        img4 = document.getElementById('alien5');

        if (results[0].label == "Background Noise") {
            img.src = 'ear.gif';
            img1.src = 'pexels-photos-1108099.jpeg';
            img2.src = 'cat-551554_340.jpg';
            img3.src = 'maxresdefault.jpg';
            img4.src = 'cartoon-cute-cow-girl-inscription-moo-cartoon-cute-cow-girl-inscription-moo-hand-drawn-valentines-day-greeting-card-120528723.jpg';
        } else if ( results[0].label == "Dog") {
            img.src = 'istockphoto-1130867000-612x612.jpg';
            img1.src = 'funny-animals-dog.gif';
            img2.src = 'cat-551554_340.jpg';
            img3.src = 'maxresdefault.jpg';
            img4.src = 'cartoon-cute-cow-girl-inscription-moo-cartoon-cute-cow-girl-inscription-moo-hand-drawn-valentines-day-greeting-card-120528723.jpg';
        } else if ( results[0].label == "Cat") {
            img.src = 'istockphoto-1130867000-612x612.jpg';
            img1.src = 'pexels-photos-1108099.jpeg';
            img2.src = 'cute-kitty-best-kitty.gif';
            img3.src = 'maxresdefault.jpg';
            img4.src = 'cartoon-cute-cow-girl-inscription-moo-cartoon-cute-cow-girl-inscription-moo-hand-drawn-valentines-day-greeting-card-120528723.jpg';
        } else if ( results[0].label == "Lion") {
            img.src = 'istockphoto-1130867000-612x612.jpg';
            img1.src = 'pexels-photos-1108099.jpeg';
            img2.src = 'cat-551554_340.jpg';
            img3.src = 'lion-king-lion.gif';
            img4.src = 'cartoon-cute-cow-girl-inscription-moo-cartoon-cute-cow-girl-inscription-moo-hand-drawn-valentines-day-greeting-card-120528723.jpg';
        } else{
            img.src = 'istockphoto-1130867000-612x612.jpg';
            img1.src = 'pexels-photos-1108099.jpeg';
            img2.src = 'cat-551554_340.jpg';
            img3.src = 'maxresdefault.jpg';
            img4.src = 'moo.gif';
        }
    }
}