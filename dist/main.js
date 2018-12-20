let renderer = new Renderer()
let tempManager = new TempManager()


const handleSearch = function () {
    $(".btn").on("click", async function () {
        await tempManager.getCityData($('#input').val())
        // console.log(tempManager.cityData)
        renderer.renderData(tempManager.cityData)
    })
}
handleSearch()


$("body").on("click", "#save" ,function () {
    // console.log($(this).siblings("#name").text())
    tempManager.saveCity($(this).siblings("#name").text())
})

const loadPage =  async function () {
    await tempManager.getDataFromDB()
    // console.log(tempManager.cityData)
    renderer.renderData(tempManager.cityData)
    
}
 loadPage()

 $("body").on("click", "#delete" ,function () {
    // console.log($(this).siblings("#name").text())
    tempManager.removeCity($(this).siblings("#name").text())
    loadPage()
})
 