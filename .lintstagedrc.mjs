export default {
  '**/*.{js,mjs,cjs,ts,html}': ['prettier --write', 'eslint --fix'],
  '**/*.{json,md,yml,yaml}': ['prettier --write'],
}
