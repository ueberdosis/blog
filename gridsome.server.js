// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require('fs')
const { createCanvas } = require('canvas')

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

    opengraphImage = `static/images/${options.slug}.png`

    console.log(`Found Post “${options.title}” in ${options.internal.origin} …`)
    console.log(`Generate an OpenGraph image …`)

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
    context.font = 'medium 38pt Inter'
    context.fillText(author, border, border)

    // title
    const title = options.title
    const lineHeight = 96
    context.textBaseline = 'top'
    context.fillStyle = '#ffffff'
    context.font = 'medium 64pt Inter'
    wrapText(context, title, border, border + 38 + border, width - border - border, lineHeight);

    // store
    const buffer = canvas.toBuffer('image/png')
    fs.writeFileSync(opengraphImage, buffer)

    console.log(`OpenGraph image generated (${opengraphImage}).`)
  })
}

const wrapText = function(context, text, x, y, maxWidth, lineHeight) {
  var words = text.split(' ');
  var line = '';

  for(var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var metrics = context.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, y);
      line = words[n] + ' ';
      y += lineHeight;
    }
    else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
}