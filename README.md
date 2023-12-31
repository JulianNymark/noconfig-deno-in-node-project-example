# deno inside your node project!?
Tiny example of a mix (best of both worlds!) of deno and node!

- run `npm run deno` to run the deno script
- run `npm i` + `npm run node` to run the node script
- notice there is no "deno stuff" in your node_modules :tada: (deno dependencies are usually cached in `~/Library/Caches/deno`, or `~/.cache/deno`)

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
- Separation of concerns, now you have two separate runtimes (node and deno) each with their own completely separate dependencies / caches! They can live in the same repository without stepping on each others toes. (but they can still share code with each other if desired), we wanted to make a small utility script that did something "quick and easy on the side" without polluting our existing package.json with "related but... also kinda unrelated" code. We first looked into using `ts-node`, but it's a bit tightly integrated with node itself, and expects you to modify package.json (eg. we couldn't just set something like `type: "module"`...).
- Deno has some nice things (security model, `--allow-read` ... first class TS support... only download packages when they are needed... etc)