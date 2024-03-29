# Frontity ShareButtons :art:

:fire: Frontity Share package for Frontity.

**\*\*\*** PLEASE STAR MY REPO TO SUPPORT OUR WORK 🙏 **\*\***

Please follow me 🙏 on [twitter](https://twitter.com/mymakarim) [twitter](https://twitter.com/codenawis) and github

#### Below is the screentshot taken with Frontity codenawis theme with some added styles.

![](demo-pic.png)

# How does it work?

1. Install the Frontity Share package as shown in the Installation steps below.
2. 
- **First Way**

In **post.js** you can use `<SharingButton />` anywhere you want, for example:

```jsx

const Post = ({ state, libraries }) => {
  const SharingButtons = libraries.fills.share.SharingButtons;

  return (
    <>
      <Title />
      <Author />
      {/** If there is a share package, show all the buttons **/}
      {<SharingButtons />}
      <Content />
    </>
  );
};

```

- **Second Way**

Put your slot inside post.js

```jsx

<Slot name="After Post Content" />

```

Then in **frontity.settings.js** initialize your slot name 

```jsx

const settings = {
  // ...
  packages: [
    {
      name: "some-share-package",
      state: {
        fills: {
          share: {
            ShareAfterPostContent: {
              slot: "After Post Content",
              library: "share.SharingButtons",
            },
          },
        },
      },
    },
  ],
};

```

# Installation :wrench:

1. Do `npm install frontity-share` in the root of your project.
1. Add the package name in `frontity-settings.js`.

```javascript
"packages": [
  "frontity-share"
  // other packages ...
]
```

3. Run `npx frontity dev` again.

That's it!

## More info :clipboard:

This is the beta version. Some features will be added in the final release, like:

## Contribute to the package

If you want to contribute to the package, you can do so following these simple steps:

1. Fork this repository (https://github.com/mymakarim/frontity-share).
1. Clone it in your local machine.
1. Run `npm install`.
1. Run `npx frontity dev`.
1. Do the changes to the code.
1. Submit the pull request! :)

## Credits :white_flower:

- Build with love :blue_heart:, for [Frontity](https://frontity.org)

## Authors

1. [Yahya Makarim](https://twitter.com/mymakarim)
2. [CodeNawis](https://twitter.com/codenawis)

## Contributors

1. [mymakarim](https://twitter.com/codenawis) - Leed Developer [@frontity](https://twitter.com/frontity)


## License :scroll:

![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)

- **[GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)**