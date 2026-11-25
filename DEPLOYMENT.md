# Deployment guide

## 1. Create a public GitHub repository

1. Sign in to GitHub.
2. Select **New repository**.
3. Name it `sai-revanth-portfolio`.
4. Set visibility to **Public**.
5. Create the repository.
6. Upload the contents of this project folder (upload the files and the `assets` folder, not the ZIP itself).

If you use Git locally:

```bash
git init
git add .
git commit -m "Build personal developer portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/sai-revanth-portfolio.git
git push -u origin main
```

Replace `YOUR_GITHUB_USERNAME` with your GitHub username.

## 2. Deploy with GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`.
5. Click **Save**.
6. Wait for GitHub Pages to publish. Your site URL will be shown in the Pages section, usually:
   `https://YOUR_GITHUB_USERNAME.github.io/sai-revanth-portfolio/`

## 3. Alternative: Deploy with Netlify

1. Sign in to Netlify and choose **Add new site → Import an existing project**.
2. Connect GitHub and select this repository.
3. For a plain HTML/CSS/JS project, leave the build command empty.
4. Set the publish directory to the repository root (`.`).
5. Select **Deploy**. Netlify will provide a public URL.

## 4. Alternative: Deploy with Vercel

1. Sign in to Vercel using GitHub.
2. Select **Add New → Project** and import this repository.
3. Choose **Other** as the framework preset.
4. Leave the build command empty; use `.` as the output directory if prompted.
5. Select **Deploy**. Vercel will provide a public URL.

## 5. Final checks

- Open the live site on a phone and desktop.
- Test the hamburger menu, theme toggle and all project modals.
- Check the profile photo and all external links.
- Confirm the email address and GitHub username are real.
- Add your live website URL and GitHub repository URL to your internship submission.
