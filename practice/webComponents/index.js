import GitHubAvatar, { EVENTS } from "./components/GitHubAvatar.js";
import HelloWorld from "./components/HelloWorld.js";

window.customElements.define("hello-world", HelloWorld);
window.customElements.define("github-avatar", GitHubAvatar);

const changeColorTo = (color) => {
  document.querySelectorAll("hello-world").forEach((helloWorld) => {
    helloWorld.color = color;
  });
};

document.querySelectorAll("github-avatar").forEach((avatar) => {
  avatar.addEventListener(EVENTS.AVATAR_LOAD_COMPLETE, (e) => {
    console.log("Avatar Loaded", e.detail.avatar);
  });

  avatar.addEventListener(EVENTS.AVATAR_LOAD_ERROR, (e) => {
    console.log("Avatar Loading error", e.detail.error);
  });
});

document.querySelector("button")?.addEventListener("click", () => {
  changeColorTo("blue");
});
