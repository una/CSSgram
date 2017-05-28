(function () {
  if (!document.documentElement.classList) return

  var options = INSTALL_OPTIONS
  var prevFilters = []

  function updateElements () {
    for (var i = 0; i < prevFilters.length; i++) {
      prevFilters[i][0].classList.remove(prevFilters[i][1])
    }
    prevFilters = []

    for (var i = 0; i < options.regions.length; i++) {
      var region = options.regions[i]

      var el = document.querySelector(region.location)
      if (!el) { continue }

      var imgs = el.querySelectorAll('img')
      if (!imgs) { continue }

      for (var j = 0; j < imgs.length; j++) {
        if (imgs[j].parentNode.tagName == 'FIGURE') {
          var figure = imgs[j].parentNode
        } else {
          var figure = document.createElement('figure')

          var style = getComputedStyle(imgs[j])
          figure.style.display = style.display == 'inline' ? 'inline-block' : style.display

          figure.style.margin = style.margin
          imgs[j].style.margin = 0

          imgs[j].parentNode.replaceChild(figure, imgs[j])
          figure.appendChild(imgs[j])
        }

        figure.classList.add(region.filter)

        prevFilters.push([figure, region.filter])
      }
    }
  }

  if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', updateElements)
  } else {
    updateElements()
  }

  window.INSTALL_SCOPE = {
    setOptions: function (nextOptions) {
      options = nextOptions

      updateElements()
    }
  }
})()
