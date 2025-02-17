
  const mainVideo = document.getElementById('mainVideo');
  const playButton = document.getElementById('playButton');
  const featuredVideoContainer = document.querySelector('.featured-video');
  const thumbnails = document.querySelectorAll('.thumbnail');

  // Toggle play/pause on play button click
  function toggleVideoPlay() {
    if (mainVideo.paused) {
      mainVideo.play();
      featuredVideoContainer.classList.remove('video-paused');
    } else {
      mainVideo.pause();
      featuredVideoContainer.classList.add('video-paused');
    }
  }

  // Add click event to the play button
  playButton.addEventListener('click', toggleVideoPlay);

  // Add play/pause event listeners to update play button visibility
  mainVideo.addEventListener('play', () => {
    featuredVideoContainer.classList.remove('video-paused');
  });

  mainVideo.addEventListener('pause', () => {
    featuredVideoContainer.classList.add('video-paused');
  });

  // Add click event to thumbnails to update the main video
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', (e) => {
      e.preventDefault();
      const videoSrc = thumbnail.getAttribute('data-video');
      mainVideo.querySelector('source').setAttribute('src', videoSrc);
      mainVideo.load();
      mainVideo.play();
    });
  });

  // Ensure the play button shows when the video is paused initially
  if (mainVideo.paused) {
    featuredVideoContainer.classList.add('video-paused');
  }

