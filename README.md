# Luminary Syndicate landing page

This package contains the editable React project and a ready built website in `docs`. You can publish the supplied build using GitHub in your browser. No Terminal or Node.js installation is needed for the first upload.

Use a new repository in your personal GitHub account. The suggested name is `luminary-syndicate-landing` under `RAKESHKVS09`. This guide does not mean that the repository or website has already been created. Keep the existing collaborative repository separate.

## What is in the package

| File or folder | Purpose |
| --- | --- |
| `src/App.jsx` | The React page and its sections. |
| `src/content.js` | The approved page wording. |
| `src/App.css`, `src/index.css`, `src/footer.css` | Page appearance, fonts and responsive layout. |
| `src/WorldArtwork.jsx`, `src/world-motion.css` | The connected world scene and its motion. |
| `src/image-data.js`, `src/portrait-data.js` | Photograph descriptions and source credits. |
| `public/` | Logo, photographs, fonts, social marks and their licence records. |
| `package.json`, `package-lock.json` | Project commands and the dependency versions used to build it. |
| `vite.config.js` | Vite build settings. This package uses `base: './'` and writes the finished site to `docs`. |
| `index.html` | The source entry page used by Vite. |
| `docs/index.html` | The finished entry page that GitHub Pages will publish. |
| `docs/assets/` | The compiled JavaScript and CSS. Other folders in `docs` contain the copied public assets. |

React assembles the page. CSS controls its appearance. Vite turns the editable project into the static files in `docs`. GitHub Pages serves those finished files rather than running a Node.js server. [About GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)

## First publication in your browser

### 1. Extract the package

Download and extract the full ZIP. Open the project folder that directly contains `src`, `public`, `docs` and `package.json`. Upload files and folders from inside this folder. Do not upload the ZIP itself or add an extra outer project folder.

### 2. Create a personal public repository

Sign in to GitHub. Select **New repository** and set:

* **Owner:** your personal account, for example `RAKESHKVS09`.
* **Repository name:** `luminary-syndicate-landing`, if available.
* **Visibility:** Public.
* **Add README:** On.

Click **Create repository**. The README provides an initial commit. This guide assumes the new repository uses `main`. If GitHub shows another default branch name, use that name in the commit and Pages settings below. [Create a Pages repository](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

### 3. Upload the editable project first

At the new repository's root, choose **Add file → Upload files**. Drag in everything from the extracted project **except `docs`**. This includes the complete `src` and `public` folders plus the root files such as `package.json`, `package-lock.json`, `index.html`, `vite.config.js`, `eslint.config.js`, `.gitignore` and `README.md`.

Drag folders themselves so their internal paths remain together. The expected paths include `src/App.jsx` and `public/images`; they should not begin with another project folder. If `.gitignore` is hidden in Finder, press **Command + Shift + .** to show hidden files.

Use the commit message **Add Luminary React source** and commit to `main`. Replacing the README created in step 2 with the package README is expected in this new repository.

### 4. Upload the finished website second

Return to the repository root and choose **Add file → Upload files** again. This time drag the **`docs` folder itself**, including all of its contents. Do not open `docs` on GitHub before this upload and do not drag its contents into the repository root.

Check that the uploaded path is `docs/index.html`, alongside `docs/assets` and the other asset folders. Keep `docs/.nojekyll` with the build. Use the commit message **Add ready built landing page** and commit to `main`.

The full package exceeds GitHub's limit of 100 files in one browser upload, so use these two batches. Each file must also be no larger than 25 MiB. Exclude `node_modules`, `.git` and any unrelated local files. [Browser upload instructions and limits](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)

### 5. Enable GitHub Pages

Open **Settings → Pages**. Under **Build and deployment**, choose:

* **Source:** Deploy from a branch.
* **Branch:** `main`.
* **Folder:** `/docs`.

Click **Save**. Branch publishing supports the repository root or `/docs`; the compiled entry file must sit at the top of the selected folder. The supplied `.nojekyll` file bypasses Jekyll processing. [Publishing source settings](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [static site publishing](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#static-site-generators)

### 6. Open and present the site

Publication can take up to ten minutes. Return to **Settings → Pages** and click **Visit site** when it appears. You can check the **Actions** tab if the deployment has not completed. [View the published site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#viewing-your-published-site)

After successful publication, the expected address for the suggested account and repository is:

`https://rakeshkvs09.github.io/luminary-syndicate-landing/`

Use the actual **Visit site** link if you choose another account or repository name. Open that link in your browser for a presentation or share it with reviewers. The published page is public. Its membership controls remain preview controls; GitHub Pages does not add an account system or backend.

## Update the page later

Changes to `src` or `public` alone will not change the published page. Rebuild `docs` whenever you change the editable project.

1. Install Node.js 24 on the computer used for development.
2. Open Terminal inside the project folder containing `package.json`.
3. Run:

```sh
npm ci
npm run build -- --configLoader native
```

4. Check the rebuilt page and its assets before uploading.
5. Upload the changed editable files and the rebuilt `docs` folder to the same repository paths. Use separate batches if the combined upload exceeds 100 files. Keep the original folder structure and commit the updates to `main`.
6. Wait for the Pages deployment to finish, then refresh the published link.

For an optional local check after building, run `npm run preview` and open the URL it prints. Browser uploads do not remove old files merely because they are absent from the new build. If an obsolete build file must be removed, delete only that identified file; do not delete the repository or unrelated source.

## Permissions and plan requirements

A new personal public repository can use Pages with GitHub Free. Private personal repositories require GitHub Pro; private organization repositories require an eligible GitHub Team or Enterprise plan. An eligible private repository does not by itself make the published website private. The repository owner or someone with admin or maintainer permissions must configure its Pages publishing source. [Pages availability and permissions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

This approach publishes a separate presentation site. It does not replace files, change settings or overwrite work in the existing collaborative repository.

## Explain the design in a presentation

You can say:

> The landing page uses React to organise its sections and CSS to control the typography, colours and responsive layout. The world scene brings together photographs and animated connections to express shared community action. Vite compiles the project into the docs folder, and GitHub Pages publishes those files. Registration and member login are interface previews for a later phase.

Show the finished page beside App.jsx, App.css, WorldArtwork.jsx and content.js in the Code tab. That demonstrates the connection between the visible design and the editable source.

The supplied review page retains its existing search engine noindex setting. This does not stop people opening and sharing its published link.
