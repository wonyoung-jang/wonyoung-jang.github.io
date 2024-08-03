---
date:
- 2024-06-24 Monday
description: A work in progress page showcasing how elements are rendered from Logseq
lastMod: 2024-08-03
resources:
- references
title: All Logseq elements
---
![logseq-elements.webp](/assets/logseq-elements_1722025479643_0.webp)

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

  + ### Lists

    + List item 1

    + List item 2

    + List item 3

  + ### Numbered lists

    + List item 1
logseq.order-list-type:: number

    + List item 2
logseq.order-list-type:: number

    + List item 3
logseq.order-list-type:: number

    + List with numbered children

      + List item 1
logseq.order-list-type:: number

      + List item 2
logseq.order-list-type:: number

      + List item 3
logseq.order-list-type:: number

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

## Pages

  + ### Page reference

    + **Input**: `[About]({{< ref "/about" >}})`

    + **Output**: [About]({{< ref "/About" >}})

  + ### Page embed

    + **Input**: `{{embed [About]({{< ref "/about" >}})}}`

    + **Output**: {{embed [About]({{< ref "/About" >}})}}

  + ### Tags

    + #page

## Blocks

  + ### Block reference

    + **Input**: `## About me
`

    + **Output**: ## About me


  + ### Block embed

    + **Input**: `{{embed ## About me
 }}`

    + **Output**: {{embed ## About me
 }}

  + ### Block properties

    + Block
block-property:: block-property

    + Block
block-property:: block-property
block-property-2:: block-property-2

## Tables

  + | Table | Table | Table |
| Value | Value | Value |

  + | Table | Table | Table |
|-|-|-|
| Value | Value | Value |

## Tasks

  + ### Tasks

    + #### TODO/DOING

      + TODO A todo task

      + DOING A doing task

    + #### LATER/NOW

      + LATER A later task

      + NOW A now task

    + WAIT A wait task

    + WAITING A waiting task

    + IN-PROGRESS An in-progress task

    + DONE A done task

    + CANCELED A canceled task

    + CANCELLED A cancelled task

  + ### Tasks with priorities

    + TODO [#A] A high priority task

    + TODO [#B] A medium priority task

    + TODO [#C] A low priority task

  + ### Task with deadline

    + TODO Deadline
DEADLINE: <2024-08-03 Sat>

    + TODO Deadline with time
DEADLINE: <2024-08-03 Sat 14:00>

    + TODO Deadline with repeater
DEADLINE: <2024-08-03 Sat .+1d>

    + TODO Deadline with time and repeater
DEADLINE: <2024-08-03 Sat 14:00 .+1d>

    + TODO Scheduled
SCHEDULED: <2024-08-03 Sat>

    + TODO Scheduled with time
SCHEDULED: <2024-08-03 Sat 14:00>

    + TODO Scheduled with repeater
SCHEDULED: <2024-08-03 Sat .+1d>

    + TODO Scheduled with time and repeater
SCHEDULED: <2024-08-03 Sat 14:00 .+1d>

## Other

  + ### Calculator

```calc
2 + 2
```

  + ### Cards

    + {{cards [About]({{< ref "/About" >}}) }}

  + ### Cloze

    + {{cloze [About]({{< ref "/About" >}}) }}

  + ### Embeds

    + {{tweet }}

    + {{video }}

    + @@html: @@

  + ### Excalidraw

    + [[draws/2024-07-16-17-32-44.excalidraw]]

  + ### Query

    + {{query }}

  + ### Query function

    + {{function }}

---

See: [Logseq Documentation](https://docs.logseq.com/#/page/contents)
