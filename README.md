# electron-react-tailwind-typescript-starter-template

---

### **Starting Development**

1. Create ,env from the env.example;
2. Change the title in index.html

```sh

cd electron-react-tailwind-typescript-starter-project

yarn install

yarn start
```

---

### **Packaging for Production**

To package apps into a local executable:

- Personalize the forge **maker** configs at `/.config/forge.config.js`

```sh
yarn make:win
# yarn make:mac
# yarn make:linux
```

---

### **Releasing with GitHub**

1. Copy the contents of `env.example` to `.env` (Copy into a blank one if you dont already have one)
2. Set your `GH_TOKEN`
3. Personalize the forge **publisher** configs at `/.config/forge.config.js`

```sh
yarn publish:win
# yarn publish:mac
# yarn publish:linux
```

This project is clone to "https://github.com/saucesteals/electron-typescript-react-tailwind-redux", but without the redux and more simpler approach.

Credit to: "https://github.com/saucesteals/electron-typescript-react-tailwind-redux"

---