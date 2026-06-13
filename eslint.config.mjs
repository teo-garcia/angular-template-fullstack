import angular from '@teo-garcia/eslint-config-shared/angular'
import base from '@teo-garcia/eslint-config-shared/base'
import playwright from '@teo-garcia/eslint-config-shared/playwright'
import { defineConfig } from 'eslint/config'

export default defineConfig([...base, ...angular, ...playwright])
