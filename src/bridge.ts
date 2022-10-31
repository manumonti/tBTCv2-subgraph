import { log } from "@graphprotocol/graph-ts"
import { DepositRevealed } from "../generated/Bridge/Bridge"

export function handleDepositRevealed(event: DepositRevealed): void {
  log.warning("Deposit Revealed!", [])
}
