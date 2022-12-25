let li = document.querySelectorAll(".portfolio ul li")
let box = Array.from(document.querySelectorAll(".imageContainer .box"))

li.forEach(e =>
{
  e.addEventListener(
    "click", remove)
  e.addEventListener("click", MangeBox)
})
function remove()
{
    li.forEach(e =>
    {
      e.classList.remove("active")
      this.classList.add("active")
  })
}
function MangeBox()
{
  box.forEach(e =>
  {
    e.style.display = "none"
    document.querySelectorAll(this.dataset.catch)
      .forEach(e=>e.style.display = "block")
  })
}
