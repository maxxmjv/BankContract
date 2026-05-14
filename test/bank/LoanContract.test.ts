import { LoanContract } from '../../src/bank/LoanContract'

describe('LoanContract tests', () => {
  let loan1: LoanContract
  let loan2: LoanContract
  let loan3: LoanContract
  let loan4: LoanContract
  let loan5: LoanContract

  beforeEach(() => {
    loan1 = new LoanContract('1', 'Maksim', false, 100000, 500, 250)
    loan2 = new LoanContract('2', 'Anton', true, 100000, 0, 250)
    loan3 = new LoanContract('3', 'Kirill', false, 100000, 500, 0)
    loan4 = new LoanContract('4', 'Artem', true, 100000, -500, 250)
    loan5 = new LoanContract('5', 'Igor', true, 100000, 500, -250)
  })

  test('should create an object with correct properties', () => {
    expect(loan1.contractId).toBe('1')
    expect(loan1.loanAmount).toBe(100000)
    expect(loan1.isActive).toBe(false)
    expect(loan2.isActive).toBe(true)
  })

  test('should activate and deactivate correctly', () => {
    loan1.activate()
    expect(loan1.isActive).toBe(true)
    loan1.deactivate()
    expect(loan1.isActive).toBe(false)
  })

  test('should calculate total payment for normal case', () => {
    expect(loan1.calculateTotalPayment()).toBe(125000)
  })

  test('should return 0 if payment or term is 0', () => {
    expect(loan2.calculateTotalPayment()).toBe(0)
    expect(loan3.calculateTotalPayment()).toBe(0)
  })

  test('should return null for negative values', () => {
    expect(loan4.calculateTotalPayment()).toBeNull()
    expect(loan5.calculateTotalPayment()).toBeNull()
  })

  afterAll(() => {
    loan1.deactivate()
    loan2.deactivate()
    loan3.deactivate()
    loan4.deactivate()
    loan5.deactivate()
    console.log(
      `Contracts: ${loan1.contractId}, ${loan2.contractId}, ${loan3.contractId}, ${loan4.contractId} and ${loan5.contractId} has been deactivated after tests.`,
    )
  })
})
