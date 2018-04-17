## installation

1. `npm install --save-dev @moovly/eslint-config-moovly`

2.
```
(
  export PKG=eslint-config-moovly;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

3. Create an `.eslintrc` file at the root of your repo.
```
{
    "extends": "eslint-config-moovly"
}
```
