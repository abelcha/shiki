/* eslint-disable no-console */
import fs from 'node:fs/promises'
import { parse } from 'node:path'
import process from 'node:process'
import type { BundledLanguage, BundledTheme } from 'shiki/bundle/web'
import minimist from 'minimist'
import { codeToANSI } from './code-to-ansi'

const stdin = !process.stdin.isTTY

export async function run(
  argv = process.argv.slice(2),
  log = console.log,
) {
  const options = minimist(argv)
  const {
    theme = 'vitesse-dark',
    lang = undefined,
    _: files = [],
  } = options
  if (options['list-themes']) {
    return console.log(Object.keys((await import('shiki/bundle/web')).bundledThemes).join(' '))
  }
  if (options['list-langs']) {
    return console.log(Object.keys((await import('shiki/bundle/web')).bundledLanguages).join(' '))
  }
  if (options.help || options.h || (files.length === 0 && !stdin)) {
    const str = `Usage: shiki [options] <file>...
    Options:
      -h,\t--help\t\tShow this help message
      -t,\t--theme\t\tTheme name (default: vitesse-dark)
      -l,\t--lang\t\tLanguage name (default: autodetect)

    Helpers:
      --list-themes\t\tList available themes
      --list-langs\t\tList available languages

    current theme: ${theme}
    `
    const { bundledThemesInfo } = await import('shiki/bundle/web')
    const randomTheme = bundledThemesInfo.filter(e => e.type === 'dark')[Date.now() % bundledThemesInfo.length]
    return log(await codeToANSI(str, lang || 'sh', randomTheme.id as BundledTheme))
  }
  if (stdin) {
    for await (const chunk of process.stdin) {
      codeToANSI(chunk.toString(), lang || 'sh', theme)
    }
  }

  const codes = await Promise.all(files.map(async (path) => {
    const content = await fs.readFile(path, 'utf-8')
    const ext = lang || parse(path).ext.slice(1)
    return await codeToANSI(content, ext as BundledLanguage, theme)
  }))

  for (const code of codes)
    log(code)
}

run()
