import { DepositContract } from '../../src/bank/DepositContract'

describe('DepositContract tests', () => {
  let deposit1: DepositContract
  let deposit2: DepositContract
  let deposit3: DepositContract
  let deposit4: DepositContract
  let deposit5: DepositContract

  beforeEach(() => {
    deposit1 = new DepositContract('1', 'Maksim', false, 2000, 10)
    deposit2 = new DepositContract('2', 'Anton', true, 0, 10)
    deposit3 = new DepositContract('3', 'Kirill', false, 2000, 0)
    deposit4 = new DepositContract('4', 'Artem', true, -2000, 10)
    deposit5 = new DepositContract('5', 'Igor', true, 2000, -5)
  })

  test('should create deposit object with correct properties', () => {
    expect(deposit1.contractId).toBe('1')
    expect(deposit1.amount).toBe(2000)
    expect(deposit1.isActive).toBe(false)
  })

  test('should activate inactive deposit', () => {
    deposit1.activate()
    expect(deposit1.isActive).toBe(true)
  })

  test('should deactivate active deposit', () => {
    deposit2.deactivate()
    expect(deposit2.isActive).toBe(false)
  })

  test('should calculate interest for normal case', () => {
    expect(deposit1.calculateInterest()).toBe(200)
  })

  test('should calculate interest as 0 if amount or rate is 0', () => {
    expect(deposit2.calculateInterest()).toBe(0)
    expect(deposit3.calculateInterest()).toBe(0)
  })

  test('should return null for negative amount or interest rate', () => {
    expect(deposit4.calculateInterest()).toBeNull()
    expect(deposit5.calculateInterest()).toBeNull()
  })

  afterAll(() => {
    console.log(
      `Deposits: ${deposit1.contractId}, ${deposit2.contractId}, ${deposit3.contractId}, ${deposit4.contractId} and ${deposit5.contractId} has been deactivated after tests.`,
    )
  })
})
