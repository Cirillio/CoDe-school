document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal_fixed");
  const modalContent = document.querySelector(".modal_feedback");
  const openButtons = document.querySelectorAll(".feedback_button");
  const closeButton = document.querySelector(".close_modal_fixed");

  let isAnimating = false;

  function openModal() {
    if (isAnimating) return;
    isAnimating = true;
    modal.classList.add("active");
    modal.classList.remove("opacity-0", "pointer-events-none", "invisible");

    document.body.style.overflow = "hidden";

    setTimeout(() => {
      isAnimating = false;
    }, 200);
  }

  function closeModal() {
    if (isAnimating) return;
    isAnimating = true;
    modal.classList.add("opacity-0", "pointer-events-none", "invisible");

    document.body.style.overflow = "auto";

    setTimeout(() => {
      modal.classList.remove("active");
      isAnimating = false;
    }, 200);
  }

  openButtons.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal();
    })
  );

  closeButton.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  modal.onclick = (e) => {
    if (!modalContent.contains(e.target)) {
      closeModal();
    }
  };
});
