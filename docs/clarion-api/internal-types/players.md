---
sidebar_position: 1
---

# Generic Player

This is the general structure of returned Player data in v2 and above. Unless specified otherwise, this is how you should type cast its return.

```typescript
export type PlayerObjectType = {
  id: string
  username: string
  logoId?: string | null
  nameplateId?: string | null
  emoticonId?: string | null
  titleId?: string | null
  region: string
  currentXp?: number
  mastery?: PlayerMasteryObjectType
  tags?: string[]
  socialUrl?: string | null
  discordId?: string | null
  playerStatus: string
  createdAt?: Date | null
  updatedAt?: Date | null
  teams?: TeamPlayers[];
  ratings?: PlayerRatingObjectType[]
  characterRatings?: PlayerCharacterRatingObjectType[]
  characterMastery?: PlayerCharacterMasteryObjectType
}
```
