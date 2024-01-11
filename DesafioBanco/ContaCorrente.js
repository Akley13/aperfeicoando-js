export class ContaCorrente {
    agencia;
    _saldo = 0;

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log("\nDepósito realizado | Saldo atual: " + this._saldo);
        } else {
            console.log("\nDepósito cancelado | Motivo: Valor negativo: " + valor);
        }

    };

    transferir(valor) {
        if (valor >= this._saldo) {
            console.log("\nTransferência negada | Valor da transferência: " + valor);
            console.log("Saldo atual: " + this._saldo);
            pulaLinha();
        } else {
            this._saldo -= valor;
            console.log("\nTransferência realizada | valor da transferência: " + valor);
            console.log("Saldo atualizado: " + this._saldo);
            pulaLinha();
        };
    };
};