import {
  CAN_WEIGHT_LB,
  CANS_PER_CASE,
  CARDBOARD_PER_24PACK_LB,
  FLUID_PER_CAN_LB,
  KILOGRAMS_PER_POUND,
} from '../constants/weights'

export interface WeightEstimate {
  cans: number
  cases: number
  looseCans: number
  liquidLb: number
  aluminumLb: number
  packagingLb: number
  totalLb: number
  totalKg: number
}

export function calculateWeight(cans: number): WeightEstimate {
  const cases = Math.floor(cans / CANS_PER_CASE)
  const liquidLb = cans * FLUID_PER_CAN_LB
  const aluminumLb = cans * CAN_WEIGHT_LB
  const packagingLb = cases * CARDBOARD_PER_24PACK_LB
  const totalLb = liquidLb + aluminumLb + packagingLb

  return {
    cans,
    cases,
    looseCans: cans % CANS_PER_CASE,
    liquidLb,
    aluminumLb,
    packagingLb,
    totalLb,
    totalKg: totalLb * KILOGRAMS_PER_POUND,
  }
}

export function formatWeight(value: number): string {
  return value.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 2 })
}

export function getEasterEgg(cans: number): string | undefined {
  const messages: Record<number, string> = {
    69: 'Nice.',
    420: "That's a respectable amount of Busch Apple.",
    1738: 'Remy Boyz know.',
  }
  return messages[cans]
}