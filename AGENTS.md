<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->

## Deploying

This repo is the **source**. It is not what the server pulls.

carltonblooms.org is served as a flat drop by the `boggs-tech` multi-site Laravel app
(`Boggimedes/boggs-tech`, branch `main`), which is what the box pulls. Committing
here changes nothing on the live site.

Every deploy:

    npm run build                                  # here; also installs the drop
    cd ../boggs-tech
    git commit && git push                         # in boggs-tech
    ssh -i ~/.ssh/boggstech.pem ubuntu@54.148.70.101 \
      'cd /srv/boggstech && bin/deploy'            # this is the deploy

`npm run build` runs `site:assets` itself, so the drop lands in `boggs-tech` without a
separate step. `bin/deploy` pulls, rebuilds the image and prints each site's bundle; check
`curl -s https://carltonblooms.org/ | grep -o 'index-[^"]*\.js'` matches it.

`site:assets` replaces `public/sites/carltonblooms/` wholesale and rewrites every
root-absolute `/assets/` path to `/sites/carltonblooms/assets/`, in html, js, css and
maps. Without that rewrite the sites sharing the box overwrite each other's bundles.

Commit both repos: this one so the source matches what shipped, `boggs-tech` so the
box can serve it. See `boggs-tech/docs/multisite.md` for the whole arrangement.
