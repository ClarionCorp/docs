---
sidebar_position: 1
---

# Regions

These are the following regions we use internally. If you were referenced here, it's because the reference either expects or returns one of these regions.

Japan is `JapaneseLanguageText` because that's how it is labeled upstream in Odyssey's Prometheus Proxy too.

```typescript
export type Regions =
  | 'Global'
  | 'NorthAmerica'
  | 'Europe'
  | 'Asia'
  | 'SouthAmerica'
  | 'Oceania'
  | 'JapaneseLanguageText'
```
