import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: ['dist', 'node_modules', 'playwright-report', 'coverage', '**/*.vue'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    },
  },
  {
    // ADR 0004: the UI adapter (Vue) must go through @/ports only.
    files: ['src/ui/**/*.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@/ecs', '@/ecs/*', '@/domain', '@/domain/*'],
              message: 'UI must go through @/ports (ADR 0004): no ECS/domain imports.',
            },
          ],
        },
      ],
    },
  },
)
