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

- Reference downloaded video through a current-project Lovable Assets pointer, shared by the homepage and menu, so both play the same source reliably.
- Keep all published photos and clips in current-project Lovable Assets and preserve referenced assets; temporary files and other projects' assets are not reliable deployment sources.

- Media (video/photos) must be stored as current-project Lovable Assets pointers in src/assets/*.asset.json; never delete or replace them, never point at another project's assets. Why: other projects' or temp files vanish after publish. Guarded by src/test/media-assets.test.ts.

- Founder birth data (date, age calculation, Thai/English labels) lives in src/founder.ts and is rendered from there; never duplicate it inline in routes. Why: one source keeps the page, the SEO schema, and src/test/founder-age.test.ts in step.
