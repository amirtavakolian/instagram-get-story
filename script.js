// . 39051299150

const get = document.querySelector("#get");
const user = document.querySelector("#user");
const img = document.querySelector("#amir");


get.addEventListener("click", function() {

    const pro = new Promise((res, rej) => {
        const id = getId();
        res(id);
    })
    pro.then((data) => {
        return getStory(data);
    }).then((data) => {
        for (value in data) {
            data[value].forEach((val, index) => {
                let images = `<img src='${val.image_versions2.candidates[0].url}'><br>`
                document.body.innerHTML = images;
            });
        }
    });
});

function getId() {
    const url = `https://instasupersave.com/api/ig/profile/${user.value}`;
    const result = fetch(url);

    return result.then((data) => {
        return data.json();
    }).then((data) => {
        return data.result.id;
    });
}


function getStory(id) {
    const story = `https://instasupersave.com/api/ig/stories/${id}`;
    const result = fetch(story);

    return result.then((data) => {
        return data.json();
    }).then((data) => {
        return data;
    });

}