export const nextAll = (element) => {
    const nextElements = []
    let nextElement = element
    while (nextElement.nextElementSibling) {
        nextElements.push(nextElement.nextElementSibling)
        nextElement = nextElement.nextElementSibling
    }
    return nextElements
}