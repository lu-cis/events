$(`#submit`).click(() => {
    console.log(`Yeah, you clicked me`)
})

$(`#change_text`).click(() => {
    $(`#submit`).text(`YOU CLICKED ON IT!`)
})

$(`#change_background`).click(() => {
    $(`button`).css(`background`,`lightgreen`)
})