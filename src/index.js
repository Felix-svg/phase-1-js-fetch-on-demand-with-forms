const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", function (event) {
    event.preventDefault();

    //Access Input Value from an Event Object
    //console.log(event);
    //console.log(event.target.children[1].value);

    //Access Input Value Directly
    const input = document.querySelector("input#searchByID");

    console.log(input.value);
    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.textContent = data.title;
        summary.textContent = data.summary;
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
