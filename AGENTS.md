# Elite Edu Consult — Project Guidelines

- Blog posts: public reads go through server functions in `src/lib/posts.functions.ts` (publishable client); staff writes happen in `/staff` via the browser client with RLS limited to users holding a staff/admin role (auto-granted by trigger; public sign-up disabled). Only owner-added accounts can publish.
