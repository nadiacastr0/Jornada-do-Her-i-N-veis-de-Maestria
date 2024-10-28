function classificarHeroi() {
    const username = document.getElementById("username").value.trim();
    const xp = parseInt(document.getElementById("xp").value);
    let nivel;
    
    const avisoElement = document.getElementById("aviso");
    
    avisoElement.innerText = ""; // Limpar aviso

    // Verificar preenchimento dos campos 
    if (!username || isNaN(xp)) {
        avisoElement.innerText = "Por favor, preencha todos os campos.";
        return; 
    }

    // Definir o nível do herói com base na XP
    switch (true) {
        case (xp < 1000):
            nivel = "Ferro";
            break;
        case (xp >= 1001 && xp <= 2000):
            nivel = "Bronze";
            break;
        case (xp >= 2001 && xp <= 5000):
            nivel = "Prata";
            break;
        case (xp >= 5001 && xp <= 7000):
            nivel = "Ouro";
            break;
        case (xp >= 7001 && xp <= 8000):
            nivel = "Platina";
            break;
        case (xp >= 8001 && xp <= 9000):
            nivel = "Ascendente";
            break;
        case (xp >= 9001 && xp <= 10000):
            nivel = "Imortal";
            break;
        default:
            nivel = "Radiante";
    }

    // Exibir mensagem
    document.getElementById("resultado").innerText = `O Herói ${username} está no nível de ${nivel}.`;
}