const emails = ["marketing@projectagents.com.au", "sales@assanabroadbeach.com.au", "info@livepg.com.au","peterg@mdgl.com.au"];
const form = document.querySelector("form");
const submitBtn = document.querySelector("form button");
const messageBox = document.querySelector("section.contact .messageBox")

function sendIt(e) {
  e.preventDefault();
  const email = form.email.value;
  const firstName = form.firstName.value;
  const surname = form.surname.value;
  const mobile = form.mobile.value;
  const interest = form.interest.value;
  const foundUs = form.about.value;
  const contact = form.contactMe.value;
  const aboutMe = form.aboutMe.value;
  //   const message = form.message.value;
  emails.forEach((e) => {
    fetch(`https://formsubmit.co/ajax/${e}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        firstName,
        surname,
        email,
        mobile,
        interest,
        foundUs,
        contact,
        aboutMe,
        // message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success == "true") {
          form.classList.add("d-none")
          messageBox.classList.remove("d-none")
        }
      })
      .catch((error) => console.log(error));
  });
}

form.addEventListener("submit", (e) => {
  sendIt(e);
});
