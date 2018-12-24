

class TempManager {
    constructor() {
        this.cityData = []
    }

    async getDataFromDB() {
        let data = await $.get('/cities') 
            if (data) {
                this.cityData = data
            }
        }


    async getCityData(cityName) {
        let data = await $.get(`/city/${cityName}`)
        this.cityData.push({
            name: data.location.name,
            updatedAt: data.current.last_updated,
            temperture: data.current.temp_c,
            condition: data.current.condition.text,
            conditionPic: data.current.condition.icon
        })
    }

    saveCity(cityName) {
        let data = this.cityData.find(f => f.name === cityName)
        console.log(data)
        $.post(`/city`, data, function (newData) {
        })
    }

    removeCity(cityName) {
                $.ajax({
            method: "DELETE",
            url: `/city/${cityName}`,
            success: (data) => {
               
            }
        })
    }
}



