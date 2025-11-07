// حالت شب/روز
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// بخش نظرات
const form = document.getElementById("commentForm");
const commentList = document.getElementById("commentList");

form.addEventListener("submit", function (e) {
	alert("پیام شما با موفقیت ارسال شد")
  e.preventDefault();
  const name = document.getElementById("username").value.trim();
  const text = document.getElementById("commentText").value.trim();
	
    function toggleMenu() {
      const menu = document.getElementById('menu');
      const overlay = document.getElementById('overlay');

      // باز و بسته کردن منو
      menu.classList.toggle('open');
      overlay.classList.toggle('active');
    }
	
  if (name && text) {
    const comment = document.createElement("div");
    comment.className = "comment";
    comment.innerHTML = `<strong>${name}</strong><p>${text}</p>`;
    commentList.prepend(comment);
    form.reset();
  }
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
});
