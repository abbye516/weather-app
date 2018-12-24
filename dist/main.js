let renderer = new Renderer()
let tempManager = new TempManager()


const handleSearch = function () {
    $("#btn").on("click", async function () {
        await tempManager.getCityData($('#input').val())
        renderer.renderData(tempManager.cityData)
    }

    )
}
handleSearch()


$("body").on("click", "#save" ,function () {
    tempManager.saveCity($(this).siblings("#name").text())
    alert("Your city has been saved!")

})

const loadPage =  async function () {
    await tempManager.getDataFromDB()
    renderer.renderData(tempManager.cityData)
    
}
 loadPage()

 $("body").on("click", "#delete" ,function () {
    tempManager.removeCity($(this).siblings("#name").text())
    loadPage()
})
 