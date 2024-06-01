const generateImage = (req, res) => {
    const body = req.body;
    const searchText = body.searchText;

    console.log("\n✅ : searchText:", req.body)


    res.json({
        status: 'success',
        data: {
            imageUrl: searchText,
        }
    })
}

module.exports = {
    generateImage
}