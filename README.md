# My CV

Implemented in React + Vite

This is a simple page with my CV and since the content of the CV is stored in a separate file, it's easy to customize it and reuse it.
Created using React, Vite, Yarn, Bootstrap and React-to-print.
It can be viewed [here](https://leonardofj.github.io/cv/)

## Features

- **React Framework:** CV built using components for each part, making it easy to change the design.
- **Vite:** Uses Vite for fast and efficient deployment.
- **Yarn:** Dependency management using Yarn for consistency and reliability.
- **Bootstrap:** Styling is based on Bootstrap for a clean and responsive design.
- **React-to-print:** Integration of React-to-print for easily print only the CV component.
- **GitHub Pages Deployment:** Uses the 'gh-pages' package for deployment to GitHub Pages.

## How to use it

Make sure you have Node.js and Yarn installed. After cloning the repository, follow these instructions.

---

### <u>Installation</u>

In the project folder, use yarn to install the dependencies:

```bash
yarn
```

### <u>Customization</u>

Edit `src/data.jsx` to update your personal information, experiences, education, etc.  
It might be necessary to adjust the design depending on the content, feel free to customize the styling by modifying the `src/css/style.css` or the Bootstrap classes on the components.

### <u>Run the development server</u>

```bash
yarn dev
```

This will start the development server, and you can view your CV at http://localhost:3000.

### <u>Printing the CV</u>

The page includes a print button that uses `React-to-print` package to print only the CV component. The print version has white background, black text and doesn't include the picture.

### <u>Build the project for production</u>

```bash
yarn build
```

The build artifacts will be stored in the `dist/` directory.

### <u>Deployment to GitHub Pages</u>

To deploy your CV to GitHub Pages for free, change the value of "homepage" in `package.json` to your github username

Deploy to GitHub Pages

```bash
yarn deploy
```

Your CV will be accessible at https://your-username.github.io/cv/.

---

Feel free to use it, contribute, open issues, or provide feedback!

This project is licensed under the MIT License - see the LICENSE file for details.
