# Welcome to HW Lab NITC's Github

## This site is built using [Vitepress](https://vitepress.dev/)

To run this on your system follow the following steps:

### 1. Clone this repository
  ```sh
  git clone https://github.com/hwlabnitc/hwlabnitc.github.io.git
  ```

### 2. Make sure you have node and npm installed
  ```sh
  node --version
  npm --version
  ```  
  If not, install it

### 3. Install npm Packages and dependencies:
```sh
npm i
```

### 4. Build the docs
```sh
npm run docs:build
```

### 5. Run it on your system
```sh
npm run docs:dev
```

### Note: The Configuration of the navbar, sidebar, title social links, sidebar etc are present in docs/.vitepress/config.mjs

### Note: The markdown files are present in docs

### The deploy.yml file is used for deploying the site on github pages

### package.json contains the scripts for building and running the site and also the homepage of the site

### The site is deployed on [HW Lab NITC](https://hwlabnitc.github.io/)

## Folder Structure

In the docs folder, the index.md file contains the main page of the site and the other markdown files contains other content of the site.

The site is split between 2 folders:

1. MIPS
2. Verilog

In MIPS, index.md contains the main page of the MIPS section and the other markdown files contain the content of the MIPS section.

In Verilog, index.md contains the main page of the Verilog section and the other markdown files contain the content of the Verilog section.


