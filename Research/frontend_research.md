# **Frontend Research**

### **Table of Contents**
- [Frontend Frameworks](#frontend-framework)
    - [React](#react)
    - [Angular](#angular)
    - [Vue.js](#vuejs)
    - [JQuery](#jquery)
    - [Ember.js](#emberjs)
    - [Backbone.js](#backbonejs)
    - [Semantic-UI](#semanticui)
    - [Foundation](#foundation)
    - [Svelte](#svelte)
- [Build Tools](#build-tools)
    - [Transpiling](#transpiling)
    - [Bundling](#bundling)
    - [Minifying](#minifying)
    - [Linting](#linting)
    - [Task Runners](#task-runners)
- [Component-Based Frameworks](#cbf)
***
## **Frontend Frameworks** <a name="frontend-frameworks"></a>

#### Sources
- [Simform.com](https://www.simform.com/blog/best-frontend-frameworks)
- [Monocubed.com](https://www.monocubed.com/best-front-end-frameworks/)
- [Ideamotive.co](https://www.ideamotive.co/blog/best-frontend-frameworks)

### **React** <a name="react"></a>

- Developed by Facebook
- Open source
- Virtual DOM *(Document Object Model)*
- Ideal for high traffic and stability
- Recommended for SPAs and PWAs
- Examples: Netflix, Dropbox, Pinterest, Airbnb, BBC

#### **Pros**
- Easy to learn
- Reusability of components
- Virtual DOM
- Advanced and useful dev tools - see [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

#### **Cons**
- Poor documentation due to constant updates
- Not recommended for JavaScript beginners
- The complexity of JSX *(JavaScript XML)*
- Only frontend & UI solutions

Read more: [https://reactjs.org/](https://reactjs.org/)

### **Angular** <a name="angular"></a>
- Developed by Google
- Based on TypeScript
- Launched in 2016
- Two-way data binding: real-time sync between model and view
- Great for mobile and web apps 
- Ideal for enterprise-based and dynamic web apps
- Examples: Xbox, Forbes, BMW, Microsoft Office, Gmail, LEGO

#### **Pros**
- Two-way data binding by default 
- Reusable components - easy to manage with dependency injection
- Big community

#### **Cons**
- Steep learning curve
- Dynamic apps may not perform well due to complexity and size

Read more: [https://angular.io/](https://angular.io/)

### **Vue.js** <a name="vuejs"></a>
- Developed to enhance app performance 
- Ideal for both web, mobile and PWAs
- Less complex than Angular
- Easily handles both simple and dynamic processes
- Examples: Alibaba, 9gag, Reuters

#### **Pros**
- Extensive documentation
- Simple syntax with JS background
- Virtual DOM
- Component-based
- Two-way data binding
- Typescript support

#### **Cons**
- Lack of stability in components
- Small community
- Most plugins in foreign languages

Read more: [https://vuejs.org/](https://vuejs.org/)

### **JQuery** <a name="jquery"></a>
- Introduced in 2006 - early frontend framework
- Fundament: Manipulate CSS and DOM to optimize functionality and interactivity
- Not for mobile apps - but desktop-based JS apps
- Browser-friendly
- Examples: Twitter, Uber, Kickstarter, SurveyMonkey

#### **Pros**
- Easy to learn
- Flexible DOM
- Simplified HTTP requests
- Dynamic content facilitation

#### **Cons**
- Slow and heavy
- Not for large-scale applications
- APIs of the DOM is obsolete/outdated
- Better and more advanced alternatives are available

Read more: [https://jquery.com/](https://jquery.com/)

### **Ember.js** <a name="emberjs"></a>
- Developed in 2011
- Ideal for complex mobile and web apps
- One of the toughest frameworks to learn
- Examples: LinkedIn, Yahoo!, Apple Music, Tinder

#### **Pros**
- Fast & well-managed
- Component-based
- Two-way data binding
- Proper documentation
- Backwards compatible

#### **Cons**
- Small community
- Complex syntax & slow updates
- Hard learning curve
- Heavy for small apps

Read more: [https://emberjs.com/](https://emberjs.com/)

### **Backbone.js** <a name="backbonejs"></a>
- Free & open source
- MVC/MVP development concept
- Ideal for SPAs
- Can run engines like underscore.js and Mustache
- Use tools like Thorax, Marionette, Chaplin and Handlebars
- REST API compatibility with seamless sync between frontend and backend
- Examples: Trello, Reddit 

#### **Pros**
- Beginner-friendly
- Lightweight & fast

#### **Cons**
- Lacks two-way data binding support
- Structure unclear at times
- Have to write boilerplate code to communicate between model and view
- Believed to becoming obsolete

Read more: [https://backbonejs.org/](https://backbonejs.org/)

### **Semantic-UI** <a name="semanticui"></a>
- Among the latest frameworks (2014)
- Natural/organic language
- Ideal for smooth intuitive UI
- Powered by LESS and JQuery
- Examples: Snapchat, Accenture, Kmong

#### **Pros**
- Lightweight
- Organic "self-explanatory" code
- Integrations with React, Angular, Ember

#### **Cons**
- Small community
- Not beginner-friendly
- Few updates

Read more: [https://semantic-ui.com/](https://semantic-ui.com/)

### **Foundation** <a name="foundation"></a>
- Developed by Zurb
- Meant for enterprise for responsive and agile sites
- GPU acceleration for smooth animations, swift rendering
- Implemented by: Mozilla, eBay, Microsoft

#### **Pros**
- Flexible grids
- Elegant looking websites
- HTML5 form validation library
- Custom UX for different devices and media

#### **Cons**
- Hard to learn
- Small community
- Bootstrap is more popular

Read more: [https://get.foundation/](https://get.foundation/)
 
### **Svelte** <a name="svelte"></a>
- Introduced in 2016
- A compiler - updates the DOM in sync with the state of the application
- Considered one of the fastest - faster than Angular or React
- Component-based
- Examples: The New York Times, Godaddy, Rakuten 

#### **Pros**
- Lightweight & fast
- Improved reactivity
- Runs existing JS libraries
- No virtual DOM

#### **Cons**
- Lack of support and tools
- Small community

Read more: [https://svelte.dev/](https://svelte.dev/)

***

## **Build Tools** <a name="build-tools"></a>
Frontend developers work with package managers, task runners, module loaders and module bundlers to turn their dev code into prod code. 

Sources: 
- [DeveloperDrive.com](https://www.developerdrive.com/best-build-tools-frontend-development/)
- [Medium.com](https://medium.com/@trevorpoppen/modern-front-end-the-tools-and-build-process-explained-36641b5c1a53)
- [DigitalOcean.com](https://www.digitalocean.com/community/tutorials/javascript-transpilers-what-they-are-why-we-need-them)
- [Uplers.com](https://www.uplers.com/blog/front-end-linting-tools-for-web-development/)

### **Transpiling** <a name="transpiling"></a>
**Transpilers** read code written in one programming language and produce the equivalent code in another programming language. E.g. [Babel](https://babeljs.io/). 

E.g. [TypeScript](https://www.typescriptlang.org/) transpile back to vanilla JS, and therefore allows for backwards compatability with browsers. 

E.g. SCSS has to be transpiled into CSS for the browser to apply to the DOM. 

### **Bundling** <a name="bundling"></a>
**Package managers** are used to manage all dependencies in a project. E.g. [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/).

**Module bundlers** bundles JavaScript modules into a single JS file to be executed in the browser. E.g. [Webpack](https://webpack.js.org/), [Browserify](https://browserify.org/), [Gulp](https://gulpjs.com/), [Parcel](https://parceljs.org/) or [Rollup](https://rollupjs.org/guide/en/). 

### **Minifying** <a name="minifying"></a>
**Minifiers** reduce file size by removing white-space and code comments. 

**Obfuscators** change the names of variables and methods, so it is less readable for humans. Therefore increasing the effort required to understand the code and helping with security. 

E.g. [UglifyJS](https://github.com/mishoo/UglifyJS), [minify](https://www.minifier.org/) or [Closure Compiler](https://developers.google.com/closure/compiler).

### **Linting** <a name="linting"></a>
A **linter** is a code analysis tool used to verify code quality. 

- Prevent bugs
- Catch errors
- Evaluate syntax

E.g. [CSSLint](http://csslint.net/) or [JSHint](https://jshint.com/).

### **Task Runners** <a name="task-runners"></a>
**Task runners** allow developer to automate repetitive tasks such as those mentioned above. Perform tasks during each build process. E.g. [Grunt](https://gruntjs.com/) or Gulp.
***

## **Component-Based Frameworks** <a name="cbf"></a>
Components let parts of a page operate like separate cars on the highway. Each with their own motor, and they know how to stay in their lanes.

- Components can be shared across teams and bundled from design elements to internal code
- They allow engineers to quickly understand how a component works and how to integrate, or fix, if needed
- Components are reusable

Source: [Medium.com](https://medium.com/the-wall-street-journal/how-and-why-we-use-a-component-based-framework-on-wsj-web-platforms-82c08951371c)

## **Frontend Skills In Demand**
|   |   |   |
| :---- | :---- | :---- |
| React | REST APIs | HTML |
| SCSS | ES6 | NodeJS |
| NPM | Parcel | WebPack |
| AWS | Azure | ASP.NET |
| C# | .NET Core | JSON |
| WordPress | PHP | Vue |
| Scrum | CSS | JavaScript |
| Docker | Java | Spring Boot |
| Swagger | Angular | Git |
| GitLab | Jira | BitBucket |
| WebSDK | Bootstrap | Laravel |
| JQuery | Aurelia | Redux |
| WebSockets | LESS | SASS |
| CI/CD | SOAP | TypeScript |