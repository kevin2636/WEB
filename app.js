document.getElementById('btn').addEventListener('click', joke);

async function joke() {
    let category = document.getElementById('category').value;
    let config = {
        headers: {
            Accept: "application/json",
        },
    };
    let a = await fetch(`https://v2.jokeapi.dev/joke/${category}`, config);
    let b = await a.json();

    let jokeText = b.type === "single" ? b.joke : `${b.setup} <br><br>${b.delivery} `;
    document.getElementById('content').innerHTML = jokeText;
}