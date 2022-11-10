# Create a new page

- We are using the routing system of Gatsby, so the pages have to be created in a certain way.
- The routing is based on the name of the folder / file in `./src/pages`

## **Steps**

1. Create a new .tsx file according the the path that you want

```
example : for "/page1"

|
|- pages
  |- page1.tsx
|
```

2. Create a .scss file with the same name in `./styles/pages`
```
example : for "/page1"

|
|- styles
  |- pages
    |- _page1.scss
|
```

3. Import this file in `./styles/pages/index.scss`

See [Gatsby doc](https://www.gatsbyjs.com/docs/reference/routing/creating-routes/) about that

