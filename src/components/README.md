# Create a new component

- We are using a hierarchic way to organize components folder
- First, **1_sections** : bigger components (full width, regrouping blocs and shared)
- Then, **2_blocs** : Itermediate component (generally inside a page or section, regrouping shared)
- Finally **3_shared** : Smaller component that are shared with the rest

## **Steps**

1. Create a `tsx` file into the right category
2. Create a `.scss` file in `./styles/components/<category>` with the same name that the `.tsx` file prefixed with an underscrore
3. Import the scss file in `./styles/components/index.scss`

