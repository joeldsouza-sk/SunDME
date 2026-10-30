# SunDME website

Complete static website source exported from the deployed SunDME Site, version 14.

## Upload to GitHub

1. Extract `SunDME-GitHub-Files.zip`.
2. Open the extracted `SunDME` folder.
3. In your GitHub repository, choose **Add file → Upload files**.
4. Upload the contents of this folder, retaining the subfolders, then commit the files.

`index.html` should sit at the repository root, alongside `assets`, `blogs`, `case-studies`, `platform`, `faq`, and the other files. GitHub does not unpack a ZIP uploaded into a repository: extract it first.

## Preview locally

From this folder, run:

```sh
python -m http.server 8000
```

Open http://localhost:8000 in your browser. Use a local web server rather than opening the HTML files directly because the site uses links and assets relative to the domain root.

## Project contents

- `index.html`: homepage with pre-header, workflow tabs, enlarged sample screens, onboarding graphic, concise FAQ and contact footer.
- `assets/`: stylesheets, JavaScript, photography, sample interface SVGs and retained font assets.
- `platform/`: full platform overview.
- `faq/`: all 17 FAQs.
- `blogs/`: blog index and three sample articles.
- `case-studies/`: case-study index and one fictional sample case study.
- `previous/`: retained comparison version.
- `robots.txt` and `sitemap.xml`: search discovery files.
- `docs/SEO-AEO-NOTES.md`: search readiness and launch notes.
- `docs/SOURCE-SNAPSHOT.json`: deployed source version and file checksums.
- `IMAGE-CREDITS.md`: stock photography attribution and source links.

No build step, dependency installation, database or server-side application is required. The HTML, CSS, JavaScript and SVG files are the editable source.

## Hosting notes

This package is prepared for hosting at a domain root, such as `https://www.example.com/`. A GitHub Pages project URL containing a repository subpath requires updating root-relative links and asset paths, or configuring a custom domain. This export does not enable GitHub Pages or change the existing hosted Site.

Before hosting at a different URL, update canonical URLs, social metadata, JSON-LD URLs, `sitemap.xml`, and the sitemap URL in `robots.txt` from `https://sundme.sunknowledge-6550.chatgpt.site` to your final origin. Keep those URLs consistent.

The existing ChatGPT Site's access gate belongs to its hosting platform; it is not authentication code in this static export. Configure access separately on any new host if private access is required.

## Current functionality

- Workflow tabs, sample-screen enlargement, mobile menu, FAQ disclosures and animations run in the browser.
- The homepage demo form downloads an inquiry preview; it does not send email or store submissions. Connect a backend or form provider before accepting submitted inquiries.
- Phone and email links open the visitor's calling or email application.
- Blog articles and the fictional case study are labeled sample material. They and the historical comparison page are excluded from indexing. The homepage FAQ schema covers its five concise questions; the dedicated FAQ page retains the 17 full answers.

The package contains website files and supporting project documentation. Repository history, hosting credentials, platform-specific deployment configuration and the original marketing brief documents are not needed to run this static website and are not included.
