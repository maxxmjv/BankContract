import { BaseContract } from './BaseContract'

export class InsuranceContract extends BaseContract {
  insuranceType: string
  premium: number
  termYears: number
  constructor(
    contractId: string,
    clientName: string,
    isActive: boolean,
    insuranceType: string,
    premium: number,
    termYears: number,
  ) {
    super(contractId, clientName, isActive)
    this.insuranceType = insuranceType
    this.premium = premium
    this.termYears = termYears
  }

  calculateTotalPremium() {
    if (this.premium < 0 || this.termYears < 0) {
      return null
    }
    return this.premium * this.termYears
  }
}
