const BASE_URL = `https://api.harvardartmuseums.org`
const requestType = [
    "Object",
    "Person",
    "Exhibition",
    "Publication",
    "Gallery",
    "Spectrum",
    "Classification",
    "Century",
    "Color",
    "Culture",
    "Group",
    "Medium",
    "Period",
    "Place",
    "Technique",
    "Worktype",
    "Activity",
    "Site",
    "Video",
    "Image",
    "Audio",
    "Annotation",
    "Experimental"
]
const requestSize = 10;
const imageList = document.querySelector("#image-list")
imageList.style.columns = "2"
imageList.style["list-style-type"] = "none"
const imageBtn = document.querySelector("#request-images")
document.body.style.textAlign = "center"

const requestImages = () => {
    let randomNumber = Math.floor(Math.random() * 1056 + 1)
    let IMAGE_REQUEST_URL = `${BASE_URL}/${requestType[19]}?apikey=${API_KEY}&size=${requestSize}&page=${randomNumber}`
    fetch(IMAGE_REQUEST_URL)
    .then(response => response.json())
    .then(recordObj => parseObj(recordObj))
    .catch(error => console.log(error))
}

const parseObj = object => {
    imageList.replaceChildren();
    object.records.forEach(record => {
        console.log(record)
        const newListItem = document.createElement("li")
        const newImage = document.createElement("img")
        newImage.src = record.baseimageurl;
        newImage.width = 200;
        // newImage.style.border = "5px solid black"
        newImage.style.margin = "5px"
        newListItem.append(newImage)
        imageList.append(newListItem)
    })
}

imageBtn.addEventListener("click", requestImages)
requestImages()