const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    let data = new FormData(form);

    let url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeFVr_H7wOM0iCf4zoNlYgkv0ux7d16ld0kximC2ntShaAJRQ/formResponse"; // Your Google Form Action Url

    let res = await fetch(url, {
      method: "Post",
      body: data,
      mode: "no-cors",
    });

    form.reset();

    let popUp = document.querySelector('.alert')
    let heading = document.querySelector('.heading')
    popUp.style.display = 'flex'
    form.style.display = 'none'
    heading.style.display = 'none'

    let close = document.querySelector('.close')
    close.addEventListener('click', () => {
      popUp.style.display = 'none'
      form.style.display = ''
      heading.style.display = ''
    })


  } catch (error) {
    console.log("error", error);
  }
});