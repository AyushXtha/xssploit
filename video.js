const video = document.createElement('video');
video.autoplay = true;
video.style.width = '100%';
video.style.maxWidth = '600px';

document.body.appendChild(video);

navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => video.srcObject = stream)
    .catch((error) => alert(`getUserMedia error: ${error.name}`));
ocean2➜  ~/payloads$
