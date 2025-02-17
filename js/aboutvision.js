function toggleReadMore(button) {
  const content = button.previousElementSibling;
  content.classList.toggle("expanded");

  if (content.classList.contains("expanded")) {
    button.textContent = "Read Less";
  } else {
    button.textContent = "Read More";
  }
}

//   ---about Our Core Values--- */