## Part 1 — Why VueJS?

### 1) Vue lets you build UIs as “components”

A **component** is a reusable chunk of your website (like a LEGO piece):

* `Navbar.vue`
* `ProductCard.vue`
* `LoginForm.vue`

Instead of one giant HTML file, you break your app into parts you can reuse and maintain.

### 2) Vue keeps your page in sync with your data

In vanilla HTML/JS, you often do:

* grab an element
* change its text
* update it again later

Vue flips that:

* you change the **data**
* Vue updates the screen automatically

This is called **reactive data** (you don’t “manually” redraw the UI all the time).

### 3) Vue is beginner-friendly but scales up

Vue’s template syntax is close to HTML:

* `v-if` (show/hide)
* `v-for` (loop)
* `:class` / `:src` (bind attributes)
* `@click` (events)

It’s readable for beginners, but still powerful enough for real apps.

### 4) Vue Router = multi-page feel, single-page speed

A Vue app is typically a **Single Page Application (SPA)**:

* The browser loads one “shell” page once.
* Then Vue swaps components in/out without full reloads.

**Router** gives you URLs like:

* `/` → Home
* `/about` → About
* `/games/7` → Game Details

So your app feels like a real website with pages, but it stays fast.


## Part 2 — What Vue Router does (simple mental model)

Think of the router as a map:

| URL path | Component to show |
| -------- | ----------------- |
| `/`      | `HomeView.vue`    |
| `/about` | `AboutView.vue`   |

When the URL changes, Vue Router swaps the main view area to match.

---

## Part 3 — Standard Vue 3 (Vite) folder structure

Here’s what you’ll commonly see:

```
my-vue-app/
  index.html
  package.json
  vite.config.js
  src/
    main.js
    App.vue
    router/
      index.js
    views/
      HomeView.vue
      AboutView.vue
    components/
      NavBar.vue
  public/
    favicon.ico
```

### Top level files

#### `package.json`

* The “menu” of your project: dependencies + scripts
  Examples:
* `npm run dev` (start dev server)
* `npm run build` (production build)

#### `index.html`

* The single HTML page that loads your entire SPA.
* Contains the mounting point, usually:

  * `<div id="app"></div>`

#### `vite.config.js`

* Build/dev server configuration (usually you rarely touch this as a beginner).

---

## The `src/` folder (where you live)

### `src/main.js`

This is the **entry point**.
It creates your Vue app and attaches it to the page.

Typical responsibilities:

* create the Vue app
* install the router
* mount to `#app`

Conceptually:

* “Start the app here.”

### `src/App.vue`

This is the **root component**.
Usually contains:

* layout (nav/footer)
* a spot where pages render

With Router, `App.vue` is commonly:

* `<NavBar />`
* `<router-view />` ← this is where your current page component appears

### `src/router/index.js`

This is your **route map**.
You define:

* paths (`/about`)
* which components to render
* optional route params (`/games/:id`)

Router file answers:

* “When the user goes to this URL, what should appear?”

### `src/views/`

These are your **page-level components**.
Think:

* one view ≈ one route

Examples:

* `HomeView.vue` for `/`
* `AboutView.vue` for `/about`

Rule of thumb:

* **Views** = full pages
* **Components** = smaller reusable pieces used inside pages

### `src/components/`

Reusable building blocks used across views.
Examples:

* `NavBar.vue`
* `Footer.vue`
* `GameCard.vue`

If you might use it in more than one place, it probably belongs here.

---

## Part 4 — A tiny example tying it together

### Route map idea (human version)

* `/` shows `HomeView`
* `/about` shows `AboutView`

### What happens when you click a link?

1. You click “About”
2. Router changes URL to `/about`
3. `<router-view />` swaps out `HomeView` and shows `AboutView`
4. No full page reload

---

## Quick “where do I put this?” cheat sheet

* A **new page** users can visit by URL → `src/views/`
* A **reusable UI piece** (button/card/navbar) → `src/components/`
* App startup / installs router → `src/main.js`
* App layout + `<router-view />` → `src/App.vue`
* URL → component mapping → `src/router/index.js`
* Static files not processed by bundler (favicons, etc.) → `public/`

---