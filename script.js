// Javascript to trigger shake effect
document.querySelector(".no-btn").addEventListener("click", function(){
  console.log("button clicked");
    this.classList.add('shake');
  setTimeout(() => {
    this.classList.remove('shake'); // Remove shake class after animation
  }, 500); // Remove after 500ms, or the duration of the animation
});
