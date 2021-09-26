(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileBtnClose = document.querySelector('[data-menu-close]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
    menuBtnRef .getAttribute("aria-expended") === "true" || false;
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
  });

  // mobileBtnClose.addEventListener('click', () => {
  //   mobileMenuRef.classList.toggle('is-open');
  // });
})();