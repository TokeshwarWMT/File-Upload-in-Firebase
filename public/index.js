fileButton.addEventListener('change', function (e) {
    for (let i = 0; i < e.target.files.length; i++) {

        let imageFile = e.target.files[i];

        let storageRef = firebase.storage().ref('images/' + imageFile.name)

        let image = storageRef.put(imageFile)

        if (image) {
            firebase.storage().ref('images/' + imageFile.name).getDownloadURL().then(imageUrl => {

                var uploadImage = document.querySelector('.images')
                var imageElement = document.createElement('img')
                imageElement.src = imageUrl;
                uploadImage.appendChild(imageElement)
            }
            )
        };
    };

});

