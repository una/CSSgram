(function () {
  if (!document.documentElement.classList) return

  var options = INSTALL_OPTIONS
  var parseCache = []
  var mutationObservers = []
  var MutationObserver = window.MutationObserver

  function parseNode (filter, image) {
    image.setAttribute('data-cf-cssgram', 'parsed')

    var figure = image.parentNode.tagName === 'FIGURE' ? image.parentNode : document.createElement('figure')
    var style = window.getComputedStyle(image)

    figure.style.display = style.display === 'inline' ? 'inline-block' : style.display

    if (!figure.contains(image)) {
      figure.style.margin = style.margin
      image.style.margin = 0

      image.parentNode.replaceChild(figure, image)
      figure.appendChild(image)
    }

    figure.classList.add(filter)

    parseCache.push({
      image: image,
      figure: figure,
      filter: filter
    })
  }

  function updateElements () {
    mutationObservers.forEach(function (observer) { observer.disconnect() })
    mutationObservers = []

    parseCache.forEach(function (cache) {
      cache.figure.classList.remove(cache.filter)
      cache.image.setAttribute('data-cf-cssgram', 'unparsed')
    })

    parseCache = []

    var regionConfigs = options.regions
      .filter(function (config) { return INSTALL.matchPage(config.pages) })
      .map(function (region, index) {
        var element = document.querySelector(region.location)
        var parseNodeWithFilter = parseNode.bind(null, region.filter)

        return {
          element: element,
          filter: region.filter,
          refreshChildNodes: function refreshChildNodes () {
            var images = element.querySelectorAll('img:not([data-cf-cssgram="parsed"])')

            Array.prototype.slice.call(images).forEach(parseNodeWithFilter)
          }
        }
      })
      .filter(function (config) { return config.element })

    // Initial filter application.
    regionConfigs.forEach(function (config) { config.refreshChildNodes() })

    mutationObservers = regionConfigs.map(function (config) {
      var observer = new MutationObserver(function () {
        config.refreshChildNodes()
      })

      observer.observe(config.element, {
        childList: true,
        subtree: true
      })

      return observer
    })
  }

  if (document.readyState === 'loading') {
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
