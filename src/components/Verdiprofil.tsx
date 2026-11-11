import { BodyShort, InfoCard } from '@navikt/ds-react'

export function Verdiprofil() {
  return (
    <InfoCard data-color="info">
      <InfoCard.Header>
        <InfoCard.Title>Verdiprofil</InfoCard.Title>
      </InfoCard.Header>
      <InfoCard.Content>
        <BodyShort>Innhold</BodyShort>
      </InfoCard.Content>
    </InfoCard>
  )
}
