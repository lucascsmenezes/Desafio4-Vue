new Vue({
	el: '#desafio',
	data: {
		classe1: "destaque",
		cor: true,
		classe2: "",
		classe3: "",
		cor2: "",
		estilo: {
			width: "100px",
			height: "100px",
		},
		width: "0",
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == "destaque" ? "escolher" : "destaque"
			}, 1000);
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if(valor === 100) clearInterval(temporizador)
			}, 500);
		},
		setCor(event){
			if(event.target.value == "true"){
				this.cor = true
			}else if (event.target.value == "false"){
				this.cor = false
			}
		}
	}
})
