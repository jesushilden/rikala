const token = process.env.CONTENTFUL
const spaceId = process.env.SPACEID

const getAssetUrl = async (assetId) => {
    const pictureData = await fetch(`https://cdn.contentful.com/spaces/${spaceId}/environments/master/assets/${assetId}?access_token=${token}`)
    const pictureJson = await pictureData.json()
    return pictureJson.fields.file.url
}

const getEntrie = async (entrieId) => {
    const entrie = await fetch(`https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries/${entrieId}?access_token=${token}`)
    return await entrie.json()
}

const getProcessEntries = async () => {
    const entryList = await fetch(`https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?content_type=process&access_token=${token}`)
    return await entryList.json()
}

const getApartmentEntries = async () => {
    const apartmentsData = await fetch(`https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?content_type=apartments&access_token=${token}`)

    const apartmentsJson = await apartmentsData.json()

    const apartments = apartmentsJson.items.map(entry => {
        const asset = apartmentsJson.includes.Asset.find(asset => asset.sys.id === entry.fields.picture.sys.id)
        return {
            ...entry.fields,
            picture: asset.fields.file.url
        }
    })

    return apartments
}

export default { getAssetUrl, getEntrie, getProcessEntries, getApartmentEntries }