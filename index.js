const ejs = require('ejs')
const fs = require('fs')
const path = require('path')

module.exports = function (options) {
  return function (req, res, next) {
    res.locals.include = function (view, state) {
      const template = fs.readFileSync(path.join(options.viewsPath, view + '.ejs'))
      const result = ejs.render(template.toString(), Object.assign(res.locals, state))
      return result
    }
    next()
  }
}
