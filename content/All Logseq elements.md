---
aliases: 
draft: false
slug: 
layout: 
githubrepo: 
keywords: 
type: 
date:
- 2024-06-24 Monday
resources:
- references
description: A work in progress page showcasing how elements are rendered from Logseq
title: All Logseq elements
tags:
categories:
lastMod: 2024-07-18
---
![logseq-elements.png](/assets/logseq-elements_1719436919750_0.png)

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

# Nested headings

  + ## Heading 2

    + ### Heading 3

      + #### Heading 4

        + ##### Heading 5

          + ###### Heading 6

## Text styling

  + ### Single formatting

    + **Bold**

    + _Italic_

    + {{< logseq/mark >}}Highlight{{< / logseq/mark >}}

  + ### Double formatting

    + **_Bold + italic_**

    + **{{< logseq/mark >}}Bold + highlight{{< / logseq/mark >}}**

    + _**Italic + bold**_

    + *{{< logseq/mark >}}Italic + highlight{{< / logseq/mark >}}*

    + {{< logseq/mark >}}**Highlight + bold**{{< / logseq/mark >}}

    + {{< logseq/mark >}}*Highlight + italic*{{< / logseq/mark >}}

  + ### Triple formatting

    + **_{{< logseq/mark >}}Bold + italic + highlight{{< / logseq/mark >}}_**

    + **{{< logseq/mark >}}*Bold + highlight + italic*{{< / logseq/mark >}}**

    + _**{{< logseq/mark >}}Italic + bold + highlight{{< / logseq/mark >}}**_

    + _{{< logseq/mark >}}**Italic + highlight + bold**{{< / logseq/mark >}}_

    + {{< logseq/mark >}}**_Highlight + bold + italic_**{{< / logseq/mark >}}

    + {{< logseq/mark >}}_**Highlight + italic + bold**_{{< / logseq/mark >}}

    + ~~Strikethrough~~

## Advanced commands

  + {{< logseq/orgCENTER >}}Centered text
{{< / logseq/orgCENTER >}}

    + **Hugo**: `<blockquote class="centered">Centered text</blockquote>`

  + >Blockquote with ">"

    + **Hugo**: `<blockquote><p>Blockquote with &ldquo;&gt;&rdquo;</p></blockquote>`

  + `Inline code with backticks`

    + **Hugo**: `<p><code>Blockquote with backticks</code></p>`

  + An external link: https://www.pbs.org/video/art21-fantasy/

    + **Hugo**: `<a href="https://www.pbs.org/video/art21-fantasy/"target="_blank" rel="external noopener noreferrer me">https://www.pbs.org/video/art21-fantasy/</a>`

## Logseq pages

  + ### Page reference

    + **Input**: `[About]({{< ref "/about" >}})`

    + **Output**: [About]({{< ref "/About" >}})

  + ### Page embed

    + **Input**: `{{embed [About]({{< ref "/about" >}})}}`

    + **Output**: {{embed [About]({{< ref "/About" >}})}}

  + ### Tags

    + #page

## Logseq blocks

  + ### Block reference

    + **Input**: `## About me
`

    + **Output**: ## About me


  + ### Block embed

    + **Input**: `{{embed ## About me
 }}`

    + **Output**: {{embed ## About me
 }}

## Logseq tables

  + | Table | Table | Table |
| Value | Value | Value |

  + | Table | Table | Table |
|-|-|-|
| Value | Value | Value |

## Logseq tasks

  + ### Tasks

    + TODO A todo task

    + DOING A doing task

    + DONE A done task

    + NOW A now task

    + LATER A later task

    + WAITING A waiting task

    + CANCELED A canceled task

  + ### Tasks with priorities

    + TODO [#A] A high priority task

    + TODO [#B] A medium priority task

    + TODO [#C] A low priority task

## Logseq other

  + ### Excalidraw

    + draws/2024-07-16-17-32-44.excalidraw

---

See: [Logseq Documentation](https://docs.logseq.com/#/page/contents)
