    require([
      '../dist/rolling-globe.min.js',
      './vue.min.js',
    ], function (rollingGlobe, Vue) {
  
      var g = new rollingGlobe.Globe('#globe')
      console.log(g);

  
      var app = new Vue({
        el: '#app',
  
        data: {
          message: '',
          mode: 'pop_est' // or 'gdp_md_est
        },
  
        mounted: function () {
  
          g.clickCountry = function (i) {
            app.message = 'clicked: ' + g.features[i].properties.name
            g.setHighlight(i)
            g.fillColor = "darkblue"
            g.rotateTransitionToICountry(i)
          }
  
          g.dblclickCountry = function (i) {
            app.message = 'double-clicked: ' + g.features[i].properties.name
          }
  
          g.getCountryPopupHtml = function (i) {
            return g.features[i].properties.name + ': ' + g.values[i]
          }
  
          window.onresize = function () { g.resize() }
  
          this.changeMode()
  
          let i = g.getICountry({'iso_a3': 'AUS'})
          g.rotateTransitionToICountry(i)
        },
  
        methods: {
  
          changeMode: function () {
            let propertyKey = this.mode
            for (let i = 0; i < g.features.length; i += 1) {
              let country = g.features[i]
              let value
              if (propertyKey === 'gdp_per_cap') {
                let gdp = parseFloat(country.properties.gdp_md_est)
                let pop = parseFloat(country.properties.pop_est)
                if (gdp < 0 || pop < 0) {
                  value = 0
                } else {
                  value = parseInt(1000000 * gdp / pop)
                }
              } else {
                value = country.properties[propertyKey]
              }
              g.values[i] = value
            }
            let color
            if (this.mode === 'pop_est') {
              color = 'green'
              g.highlightColor = 'red'
            } else if (this.mode === 'gdp_md_est') {
              color = 'blue'
              g.highlightColor = 'orange'
            } else {
              color = 'red'
              g.highlightColor = 'green'
            }
            if (propertyKey === 'gdp_per_cap') {
              g.resetCountryColorsFromValues(color, 100000)
            } else {
              g.resetCountryColorsFromValues(color)
            }
            g.draw()
            g.drawLegend()
          }
        }
      })
    })