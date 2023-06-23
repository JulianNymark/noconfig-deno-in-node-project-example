# deno inside your node project!?
Tiny example of a mix (best of both worlds!) of deno and node!

- run `npm run deno` to run the deno script
- run `npm i` + `npm run node` to run the node script
- notice there is no "deno stuff" in your node_modules :tada: (deno dependencies are usually cached in ~/Library/Caches/deno)

# noconfig deno!
- `deno run --no-config my_script.ts` in your npm/yarn scripts
	- deno recently added npm support, by default it downloads and caches all packages from package.json. Probably not what you want if you are looking to add a small deno script to your existing repository!
- `import something from "npm:somewhere"`

## github workflow? no problem!
```yaml
      - uses: denoland/setup-deno@v1
        with:
          deno-version: v1.x
```
now you can run your npm/yarn scripts 🎉 

Deno works great side-by-side with Node this way.

## vscode thinks it's "normal" node?
```
    "deno.enablePaths": [
        "scripts/deno"
    ],
```

## why do this?
- Separation of concerns, now you have two separate runtimes (node and deno) each with their own completely separate dependencies / caches! They can live in the same repository without stepping on each others toes. (but they can still share code with each other)
- Not every developer needs to download all packages in `devDependencies` + `dependencies` beforehand to work on a subset of your repo, rarely used utility can now depend on big clunky packages! Only download dependencies _when they are used_.
- deno has some nice things (security model, `--allow-read` ... first class TS support... etc)

---

### Q: I want to use NPM packages in deno, but I don't want to download and cache all the dependencies listed in package.json. How can I do this?
A: adding `--no-npm` will disable npm module resolution completely, so that's not quite right. However adding `--no-config` seems to do exactly what you want. Not loading package.json by default, but still resolving npm modules imported in the scriptfile.