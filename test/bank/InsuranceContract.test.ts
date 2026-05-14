import {InsuranceContract} from '../../src/bank/InsuranceConract'

describe('InsuranceContract tests', () => {
  let insurance1: InsuranceContract
  let insurance2: InsuranceContract
  let insurance3: InsuranceContract
  let insurance4: InsuranceContract
  let insurance5: InsuranceContract

  beforeEach(() => {
    insurance1 = new InsuranceContract('1', 'Maksim', false, 'Health', 2000, 15)
    insurance2 = new InsuranceContract('2', 'Anton', true, 'Car', 0, 15)
    insurance3 = new InsuranceContract('3', 'Kirill', false, 'Life', 2000, 0)
    insurance4 = new InsuranceContract('4', 'Artem', true, 'Travel', 2000, -15)
    insurance5 = new InsuranceContract('5', 'Igor', true, 'Property', -2000, 15)
  })

  test('should create insurance with correct properties', () => {
    expect(insurance1.contractId).toBe('1')
    expect(insurance1.insuranceType).toBe('Health')
    expect(insurance1.premium).toBe(2000)
    expect(insurance1.isActive).toBe(false)
    expect(insurance2.isActive).toBe(true)
  })

  test('should activate inactive insurance', () => {
    insurance1.activate()
    expect(insurance1.isActive).toBe(true)
  })

  test('should deactivate active insurance', () => {
    insurance2.deactivate()
    expect(insurance2.isActive).toBe(false)
  })

  test('should calculate total premium correctly', () => {
    expect(insurance1.calculateTotalPremium()).toEqual(30000)
  })

  test('should return 0 if premium or term is 0', () => {
    expect(insurance2.calculateTotalPremium()).toEqual(0)
    expect(insurance3.calculateTotalPremium()).toEqual(0)
  })

  test('should return null for negative values', () => {
    expect(insurance4.calculateTotalPremium()).toBeNull()
    expect(insurance5.calculateTotalPremium()).toBeNull()
  })

  afterAll(() => {
    insurance1.deactivate()
    insurance2.deactivate()
    insurance3.deactivate()
    insurance4.deactivate()
    insurance5.deactivate()
    console.log(
      `Contracts: ${insurance1.contractId}, ${insurance2.contractId}, ${insurance3.contractId}, ${insurance4.contractId} and ${insurance5.contractId} has been deactivated after tests.`,
    )
  })
})
