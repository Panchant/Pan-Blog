---
title: Extended Search
description: '关于PanBlog所使用的fusejs的扩展搜索语法,借鉴于KraHsu'
pubDate: Jul 07 2025
updatedDate: Jul 09 2025
heroColor: ''
abbrlink: lkk0v40t
tags: 
    - 'localSearch'
    - 'Extended Search'
category: 'Default Page'
lang: 'en'
---

## Extended Search

This site uses [fusejs](https://www.fusejs.io) to provide local search services, allowing you to use extended search - a search format that can fine-tune search results, similar to:color[unix]{color="green"}

Space represents logical `AND`, pipe symbol | represents logical `OR`, and to escape spaces, use double quotes `""`.

| **Token**   | **Match type**             | **Description**                        |
| ----------- | -------------------------- | -------------------------------------- |
| `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
| `=scheme`   | exact-match                | Items that are `scheme`                |
| `'python`   | include-match              | Items that include `python`            |
| `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
| `^java`     | prefix-exact-match         | Items that start with `java`           |
| `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
| `.js$`      | suffix-exact-match         | Items that end with `.js`              |
| `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |




