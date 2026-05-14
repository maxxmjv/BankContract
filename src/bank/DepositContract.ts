import { BaseContract } from './BaseContract'

export class DepositContract extends BaseContract {
  amount: number
  interestRate: number

  constructor(
    contractId: string,
    clientName: string,
    isActive: boolean,
    amount: number,
    interestRate: number,
  ) {
    super(contractId, clientName, isActive)
    this.amount = amount
    this.interestRate = interestRate
  }

  calculateInterest(): number | null {
    if (this.amount < 0 || this.interestRate < 0) {
      return null
    }
    return this.amount * (this.interestRate / 100)
  }
}
