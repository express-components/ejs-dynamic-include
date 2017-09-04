# Ejs Dynamic Include
This component allows you to include a partial ejs file into another ejs file. Similar to the built in include function, but with the ability to specific a different view path and scope.

## Example
**File:** index.js
```javascript
const express = require('express')
const app = express()

const ejsDynamicInclude = require('ec-ejs-dynamic-include')
app.use(ejsDynamicInclude({viewsPath: path.join(__dirname, 'views')}))
```

**File:** home.ejs
```javascript
This is a test

<%= include('partials/test.ejs', { title: 'hello' })
```

**File:** partials/test.ejs
```javascript
The title is <%= title %>
```

