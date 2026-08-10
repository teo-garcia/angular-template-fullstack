import base from '@teo-garcia/eslint-config-shared/base'
import playwright from '@teo-garcia/eslint-config-shared/playwright'
import angular from 'angular-eslint'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  ...base,
  {
    ignores: ['.angular/**'],
  },
  ...angular.configs.tsRecommended,
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
  },
  ...playwright,
])
