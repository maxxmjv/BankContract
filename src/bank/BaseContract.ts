export class BaseContract {
  contractId: string
  clientName: string
  isActive: boolean

  constructor(
    contractId: string,
    clientName: string,
    isActive: boolean = false,
  ) {
    this.contractId = contractId
    this.clientName = clientName
    this.isActive = isActive // Теперь родитель умеет сохранять статус при создании
  }

  activate(): void {
    this.isActive = true
  }

  deactivate(): void {
    this.isActive = false
  }
}
