// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require('fs')
const { createCanvas, registerFont } = require('canvas')
registerFont('fonts/Inter-Regular.otf', { family: 'InterRegular' })
registerFont('fonts/Inter-Medium.otf', { family: 'InterMedium' })

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  // Generate OpenGraph images for all Posts
  api.onCreateNode(options => {
    if (options.internal.typeName !== 'Post') {
      return null
    }

    if (process.env.NODE_ENV !== 'production') {
      return null
    }

    opengraphImage = `static/images/${options.slug}.png`

    // console.log(`Found Post “${options.title}” in ${options.internal.origin} …`)
    // console.log(`Generate an OpenGraph image …`)

    const width = 1200
    const height = 630

    const border = 40

    const canvas = createCanvas(width, height)
    const context = canvas.getContext('2d')

    // background
    context.fillStyle = '#000000'
    context.fillRect(0, 0, width, height)

    // author
    const author = options.author
    context.textBaseline = 'top'
    context.fillStyle = '#666666'
    context.font = '32pt InterRegular'
    context.fillText(author, border, border)

    // title
    const title = options.title
    const lineHeight = 96
    context.textBaseline = 'top'
    context.fillStyle = '#ffffff'
    context.font = '58pt InterMedium'
    wrapText(context, title, border, border + 60 + border, width - border - border, lineHeight)

    // reading time
    const readingTime = calculateReadingTime(options.content)
    context.textBaseline = 'bottom'
    context.fillStyle = '#666666'
    context.font = '32pt InterRegular'
    context.fillText(readingTime, border, height - border)

    // store
    const buffer = canvas.toBuffer('image/png')
    fs.writeFileSync(opengraphImage, buffer)

    console.log(`OpenGraph image generated (${opengraphImage}).`)
  })
}

const wrapText = function(context, text, x, y, maxWidth, lineHeight) {
  var words = text.split(' ')
  var line = ''

  for(var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' '
    var metrics = context.measureText(testLine)
    var testWidth = metrics.width
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, y)
      line = words[n] + ' '
      y += lineHeight
    }
    else {
      line = testLine
    }
  }
  context.fillText(line, x, y)
}

const calculateReadingTime = function(text) {
  const wordsPerMinute = 200
  const textLength = text.split(' ').length

  if(textLength > 0){
    const value = Math.ceil(textLength / wordsPerMinute)

    if (value === 1) {
      return `${value} minute`
    }

    return `${value} minutes`
  }
}